
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
  console.log(`=== EDGE FUNCTION START ===`);
  console.log(`Method: ${req.method}`);
  console.log(`URL: ${req.url}`);
  console.log(`Headers:`, Object.fromEntries(req.headers.entries()));
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("Handling CORS preflight request");
    return new Response(null, { 
      headers: corsHeaders,
      status: 200 
    });
  }

  if (req.method !== "POST") {
    console.log(`Method ${req.method} not allowed`);
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      {
        status: 405,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }

  try {
    console.log("=== PROCESSING REQUEST ===");
    
    // Check if Resend API key is available
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    console.log("RESEND_API_KEY present:", !!resendApiKey);
    
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not set");
      return new Response(
        JSON.stringify({ error: "Email service not configured - missing API key" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Parse request body
    const requestBody = await req.text();
    console.log("Raw request body:", requestBody);
    
    if (!requestBody) {
      console.error("Empty request body");
      return new Response(
        JSON.stringify({ error: "Empty request body" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    let parsedData;
    try {
      parsedData = JSON.parse(requestBody);
    } catch (parseError) {
      console.error("JSON parse error:", parseError);
      return new Response(
        JSON.stringify({ error: "Invalid JSON in request body" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { formType, data }: FormEmailRequest = parsedData;
    console.log("Parsed form data:", { formType, data });

    if (!formType || !data) {
      console.error("Missing formType or data");
      return new Response(
        JSON.stringify({ error: "Missing formType or data in request" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Initialize Resend
    console.log("Initializing Resend client...");
    const resend = new Resend(resendApiKey);

    let subject = "";
    let htmlContent = "";

    if (formType === 'contact') {
      subject = `New Contact Form Submission - ${data.subject || 'No Subject'}`;
      htmlContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name || 'Not provided'}</p>
        <p><strong>Email:</strong> ${data.email || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${data.subject || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message || 'No message provided'}</p>
        <hr>
        <p><em>Submitted from Spin2Spark Contact Form</em></p>
      `;
    } else if (formType === 'booking') {
      subject = `New Pickup Booking Request - ${data.name || 'Unknown'}`;
      htmlContent = `
        <h2>New Pickup Booking Request</h2>
        <p><strong>Name:</strong> ${data.name || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Pickup Address:</strong> ${data.address || 'Not provided'}</p>
        <p><strong>Special Instructions:</strong></p>
        <p>${data.instructions || 'None provided'}</p>
        <hr>
        <p><em>Submitted from Spin2Spark Booking Form</em></p>
      `;
    } else {
      console.error("Invalid form type:", formType);
      return new Response(
        JSON.stringify({ error: `Invalid form type: ${formType}` }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log(`=== SENDING EMAIL ===`);
    console.log(`Form type: ${formType}`);
    console.log(`Subject: ${subject}`);
    console.log(`Recipient: spin2spark@gmail.com`);

    const emailResponse = await resend.emails.send({
      from: "Spin2Spark Forms <onboarding@resend.dev>",
      to: ["spin2spark@gmail.com"],
      subject: subject,
      html: htmlContent,
    });

    console.log("=== EMAIL SENT SUCCESSFULLY ===");
    console.log("Email response:", emailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Email sent successfully",
      emailResponse 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error("=== ERROR IN EDGE FUNCTION ===");
    console.error("Error name:", error.name);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
    
    // Provide more specific error messages
    let errorMessage = error.message || "Unknown error occurred";
    let statusCode = 500;
    
    if (error.message?.includes('API key')) {
      errorMessage = "Invalid or missing API key for email service";
      statusCode = 500;
    } else if (error.message?.includes('domain')) {
      errorMessage = "Email domain not verified. Please verify your domain at https://resend.com/domains";
      statusCode = 400;
    } else if (error.message?.includes('fetch')) {
      errorMessage = "Network error while sending email";
      statusCode = 503;
    }
    
    return new Response(
      JSON.stringify({ 
        error: errorMessage,
        details: error.message,
        timestamp: new Date().toISOString()
      }),
      {
        status: statusCode,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

console.log("=== EDGE FUNCTION LOADED ===");
serve(handler);
