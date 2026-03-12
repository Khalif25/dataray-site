import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    await resend.emails.send({
      from: "DataRay Website <onboarding@resend.dev>",
      to: ["abdinur.khalif25@gmail.com"],
      subject: "New DataRay weekly subscription",
      html: `
        <h2>New weekly subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p>This subscriber joined the DataRay weekly intelligence brief.</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Subscription could not be completed." },
      { status: 500 }
    );
  }
}