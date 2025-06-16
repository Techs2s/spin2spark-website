
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { formType, data }: FormEmailRequest = await req.json();

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

    console.log(`Sending ${formType} form email to support@spin2spark.com`);

    const emailResponse = await resend.emails.send({
      from: "Spin2Spark Forms <onboarding@resend.dev>",
      to: ["support@spin2spark.com"],
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
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
