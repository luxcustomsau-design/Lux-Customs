import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, service, message } = body;

    // Server-side validation check
    if (!fullName || !message) {
      return NextResponse.json(
        { success: false, error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // If Resend API key is configured, send actual email
    if (resend) {
      await resend.emails.send({
        from: 'Lux Customs <onboarding@resend.dev>',
        to: ['luxcustoms.au@gmail.com'],
        subject: `New Quote Request: ${service || 'General Enquiry'} from ${fullName}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; background: #121214; color: #fff; border-radius: 10px;">
            <h2 style="color: #FBBF24;">New Enquiry - Lux Customs</h2>
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Email Address:</strong> ${email || 'Not provided'}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Selected Service:</strong> ${service || 'General Enquiry'}</p>
            <p><strong>Message:</strong></p>
            <p style="background: #1f1f23; padding: 15px; border-radius: 5px; border: 1px solid #333; color: #ddd;">${message}</p>
          </div>
        `,
      });
    } else {
      // Fallback console log for local development testing without API key
      console.log('--- MOCK EMAIL SENT ---');
      console.log({ fullName, email, phone, service, message, timestamp: new Date().toISOString() });
    }

    return NextResponse.json(
      { success: true, message: 'Your quote request has been sent successfully! We will contact you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact Form Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message. Please try calling us directly at 0468 317 131.' },
      { status: 500 }
    );
  }
}
