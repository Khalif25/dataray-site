import { Resend } from "resend";
import { CONTACT_SERVICES, FormError, checkFields, emailField, escapeHtml, formFailure, formResponse, readPublicForm, textField } from "@/lib/public-forms";

export async function POST(request: Request) {
  try {
    const body = await readPublicForm(request);
    checkFields(body, ["name", "email", "organization", "service", "message", "website"]);
    if (textField(body, "website", 300, false)) return formResponse({ success: true });
    const name = textField(body, "name", 120);
    const email = emailField(body);
    const organization = textField(body, "organization", 200, false);
    const service = textField(body, "service", 100);
    const message = textField(body, "message", 5000);
    if (!CONTACT_SERVICES.includes(service)) throw new FormError("Choose a valid service.");
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return formResponse({ error: "Unable to submit right now. Please try again." }, 503);
    const { error } = await new Resend(apiKey).emails.send({
      from: "DataRay AI Technologies <onboarding@resend.dev>",
      to: ["abdinur.khalif25@gmail.com"],
      subject: `New DataRay AI Technologies inquiry: ${service}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nOrganization: ${organization || "Not provided"}\nService: ${service}\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New DataRay AI Technologies Inquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Organization:</strong> ${escapeHtml(organization || "Not provided")}</p>
          <p><strong>Service:</strong> ${escapeHtml(service)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\r?\n/g, "<br />")}</p>
        </div>
      `,
    });

    if (error) {
      return formResponse({ error: "Unable to submit right now. Please try again." }, 503);
    }

    return formResponse({ success: true });
  } catch (error) { return formFailure(error); }
}
