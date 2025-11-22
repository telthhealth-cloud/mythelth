import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "https://esm.sh/resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface PartnerInquiryRequest {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  partnerType: string;
  location: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    const resend = new Resend(resendApiKey);

    const inquiryData: PartnerInquiryRequest = await req.json();

    console.log("Received partner inquiry:", { email: inquiryData.email, partnerType: inquiryData.partnerType });

    // Store in database
    const { data: dbData, error: dbError } = await supabase
      .from("partner_inquiries")
      .insert({
        full_name: inquiryData.fullName,
        email: inquiryData.email,
        phone: inquiryData.phone,
        company: inquiryData.company,
        partner_type: inquiryData.partnerType,
        location: inquiryData.location,
        message: inquiryData.message,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Failed to store inquiry: ${dbError.message}`);
    }

    console.log("Inquiry stored successfully:", dbData.id);

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: "Telth Partnership <onboarding@resend.dev>",
      to: [inquiryData.email],
      subject: "Thank you for your partnership interest with Telth",
      html: `
        <h1>Thank you for your interest, ${inquiryData.fullName}!</h1>
        <p>We have received your partnership inquiry for <strong>${inquiryData.partnerType}</strong>.</p>
        <p>Our team will review your application and get back to you within 2-3 business days.</p>
        <br>
        <p><strong>Your submission details:</strong></p>
        <ul>
          <li>Company: ${inquiryData.company}</li>
          <li>Location: ${inquiryData.location}</li>
          <li>Partnership Type: ${inquiryData.partnerType}</li>
        </ul>
        <br>
        <p>Best regards,<br>The Telth Partnership Team</p>
      `,
    });

    console.log("Confirmation email sent:", userEmailResponse);

    // Send notification email to admin
    const adminEmailResponse = await resend.emails.send({
      from: "Telth Notifications <onboarding@resend.dev>",
      to: ["telthhealth@gmail.com"],
      subject: `New Partnership Inquiry - ${inquiryData.partnerType}`,
      html: `
        <h2>New Partnership Inquiry Received</h2>
        <p><strong>Name:</strong> ${inquiryData.fullName}</p>
        <p><strong>Email:</strong> ${inquiryData.email}</p>
        <p><strong>Phone:</strong> ${inquiryData.phone}</p>
        <p><strong>Company:</strong> ${inquiryData.company}</p>
        <p><strong>Partnership Type:</strong> ${inquiryData.partnerType}</p>
        <p><strong>Location:</strong> ${inquiryData.location}</p>
        <br>
        <p><strong>Message:</strong></p>
        <p>${inquiryData.message}</p>
        <br>
        <p><em>Submitted: ${new Date().toLocaleString()}</em></p>
      `,
    });

    console.log("Admin notification sent:", adminEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Inquiry submitted successfully",
        id: dbData.id 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in submit-partner-inquiry function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);