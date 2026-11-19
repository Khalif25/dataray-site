import { Resend } from "resend";
import { checkFields, emailField, escapeHtml, formFailure, formResponse, readPublicForm, textField } from "@/lib/public-forms";

export async function POST(req: Request) {
  try {
    const body = await readPublicForm(req);
    checkFields(body, ["email", "website"]);
    if (textField(body, "website", 300, false)) return formResponse({ success: true });
    const email = emailField(body);
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return formResponse({ error: "Unable to submit right now. Please try again." }, 503);
    const { error } = await new Resend(apiKey).emails.send({
      from: "DataRay AI Technologies Website <onboarding@resend.dev>",
      to: ["abdinur.khalif25@gmail.com"],
      subject: "New DataRay AI Technologies weekly subscription",
      text: `New weekly subscription: ${email}`,
      html: `
        <h2>New weekly subscription</h2>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p>This subscriber joined the DataRay AI Technologies weekly intelligence brief.</p>
      `,
    });

    if (error) return formResponse({ error: "Unable to submit right now. Please try again." }, 503);
    return formResponse({ success: true });
  } catch (error) { return formFailure(error); }
}
