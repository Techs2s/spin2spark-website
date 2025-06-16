
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface FormEmailRequest {
  formType: 'contact' | 'booking';
  data: any;
}

const handler = async (req: Request): Promise<Response> => {
  console.log(`Received ${req.method} request to send-form-email function`);
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("Handling CORS preflight request");
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Check if Resend API key is available
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not set");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Processing form email request...");
    const requestBody = await req.text();
    console.log("Request body:", requestBody);
    
    const { formType, data }: FormEmailRequest = JSON.parse(requestBody);
    console.log("Parsed form data:", { formType, data });

    // Initialize Resend here after confirming API key exists
    const resend = new Resend(resendApiKey);

    let subject = "";
    let htmlContent = "";

    if (formType === 'contact') {
      subject = `New Contact Form Submission - ${data.subject}`;
      htmlContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
        <hr>
        <p><em>Submitted from Spin2Spark Contact Form</em></p>
      `;
    } else if (formType === 'booking') {
      subject = `New Pickup Booking Request - ${data.name}`;
      htmlContent = `
        <h2>New Pickup Booking Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Pickup Address:</strong> ${data.address}</p>
        <p><strong>Special Instructions:</strong></p>
        <p>${data.instructions || 'None provided'}</p>
        <hr>
        <p><em>Submitted from Spin2Spark Booking Form</em></p>
      `;
    }

    console.log(`Sending ${formType} form email to spin2spark@gmail.com`);
    console.log("Email subject:", subject);

    const emailResponse = await resend.emails.send({
      from: "Spin2Spark Forms <onboarding@resend.dev>",
      to: ["spin2spark@gmail.com"],
      subject: subject,
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-form-email function:", error);
    console.error("Error stack:", error.stack);
    
    // Provide more specific error messages
    let errorMessage = error.message;
    if (error.message?.includes('API key')) {
      errorMessage = "Invalid or missing API key for email service";
    } else if (error.message?.includes('domain')) {
      errorMessage = "Email domain not verified. Please verify your domain at https://resend.com/domains";
    }
    
    return new Response(
      JSON.stringify({ 
        error: errorMessage,
        details: error.stack 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
