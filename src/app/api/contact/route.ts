import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  type: string;
  subject: string;
  message: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm(data: ContactFormData): string | null {
  if (!data.name || data.name.trim().length < 2) return "Name must be at least 2 characters.";
  if (!data.email || !validateEmail(data.email)) return "Please provide a valid email address.";
  if (!data.subject || data.subject.trim().length < 3) return "Subject must be at least 3 characters.";
  if (!data.message || data.message.trim().length < 10) return "Message must be at least 10 characters.";
  return null;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate
    const validationError = validateForm(body);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    // Create transporter — configure via environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.verify();

    const contactEmail = process.env.CONTACT_EMAIL || "contact@drramupadhayaya.com";

    // If SMTP is not configured, log and return success (for development)
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log("=== CONTACT FORM SUBMISSION (SMTP not configured) ===");
      console.log("From:", body.name, `<${body.email}>`);
      console.log("Type:", body.type);
      console.log("Subject:", body.subject);
      console.log("Message:", body.message);
      console.log("===================================================");

      return NextResponse.json({
        success: true,
        message: "Message received successfully. (Email delivery will be enabled once SMTP is configured.)",
      });
    }

    // Send both emails with SMTP error logging
    try {
      // Send notification email to Dr. Ram
      await transporter.sendMail({
        from: `"Dr. Ram Website" <${process.env.SMTP_USER}>`,
        to: contactEmail,
        replyTo: body.email,
        subject: `[Website Contact] ${body.subject}`,
        html: `
          <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
            <div style="border-bottom: 2px solid #0d7377; padding-bottom: 16px; margin-bottom: 24px;">
              <h2 style="color: #0c1b33; margin: 0;">New Contact Form Submission</h2>
            </div>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #64748b; width: 120px;"><strong>Name</strong></td><td style="padding: 8px 0; color: #1e293b;">${body.name}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;"><strong>Email</strong></td><td style="padding: 8px 0; color: #1e293b;"><a href="mailto:${body.email}" style="color: #0d7377;">${body.email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;"><strong>Type</strong></td><td style="padding: 8px 0; color: #1e293b;">${body.type}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;"><strong>Subject</strong></td><td style="padding: 8px 0; color: #1e293b;">${body.subject}</td></tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 8px 0;">Message</p>
              <p style="color: #1e293b; line-height: 1.7; margin: 0; white-space: pre-wrap;">${body.message}</p>
            </div>
          </div>
        `,
      });

      // Send confirmation email to visitor
      await transporter.sendMail({
        from: `"Dr. Ram Shankar Upadhayaya" <${process.env.SMTP_USER}>`,
        to: body.email,
        subject: "Message Received Successfully",
        html: `
          <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
            <div style="border-bottom: 2px solid #0d7377; padding-bottom: 16px; margin-bottom: 24px;">
              <h2 style="color: #0c1b33; margin: 0;">Thank You, ${body.name}</h2>
            </div>
            <p style="color: #1e293b; line-height: 1.8;">Thank you for contacting Dr. Ram Shankar Upadhayaya.</p>
            <p style="color: #1e293b; line-height: 1.8;">Your message has been received successfully.</p>
            <p style="color: #1e293b; line-height: 1.8;">We appreciate your interest and will review your query. A personal response may be sent when available.</p>
            <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 13px; margin: 0;">Regards,<br/><strong style="color: #0d7377;">Dr. Ram Shankar Upadhayaya Website Team</strong></p>
            </div>
          </div>
        `,
      });
    } catch (smtpError) {
      console.error("SMTP send error:", smtpError);
      throw smtpError;
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully. A confirmation email has been sent to your inbox.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
