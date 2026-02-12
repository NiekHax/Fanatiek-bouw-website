import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Honeypot check
    const honeypot = formData.get("website");
    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    // Extract fields
    const naam = formData.get("naam") as string | null;
    const email = formData.get("email") as string | null;
    const telefoon = formData.get("telefoon") as string | null;
    const locatie = formData.get("locatie") as string | null;
    const typeProject = formData.get("type-project") as string | null;
    const omschrijving = formData.get("omschrijving") as string | null;
    const gevonden = formData.get("gevonden") as string | null;

    // Validate required fields
    if (!naam || !email || !telefoon || !locatie || !typeProject || !omschrijving) {
      return NextResponse.json(
        { error: "Vul alle verplichte velden in." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Ongeldig e-mailadres." },
        { status: 400 }
      );
    }

    // Collect file attachments
    const attachments: { filename: string; content: Buffer }[] = [];
    const files = formData.getAll("bestanden");
    let totalSize = 0;
    for (const file of files) {
      if (file instanceof File && file.size > 0) {
        totalSize += file.size;
        if (totalSize > 4 * 1024 * 1024) {
          return NextResponse.json(
            { error: "Bestanden zijn samen te groot (max. 4MB totaal)." },
            { status: 400 }
          );
        }
        const buffer = Buffer.from(await file.arrayBuffer());
        attachments.push({ filename: file.name, content: buffer });
      }
    }

    // Build email HTML
    const html = `
      <h2>Nieuwe offerte-aanvraag via fanatiekbouw.nl</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:Arial,sans-serif;">
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;width:160px;">Naam</td>
          <td style="padding:8px 12px;border:1px solid #ddd;">${escapeHtml(naam)}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;">E-mail</td>
          <td style="padding:8px 12px;border:1px solid #ddd;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;">Telefoon</td>
          <td style="padding:8px 12px;border:1px solid #ddd;"><a href="tel:${escapeHtml(telefoon)}">${escapeHtml(telefoon)}</a></td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;">Locatie</td>
          <td style="padding:8px 12px;border:1px solid #ddd;">${escapeHtml(locatie)}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;">Type project</td>
          <td style="padding:8px 12px;border:1px solid #ddd;">${escapeHtml(typeProject)}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;">Omschrijving</td>
          <td style="padding:8px 12px;border:1px solid #ddd;">${escapeHtml(omschrijving).replace(/\n/g, "<br>")}</td>
        </tr>
        ${gevonden ? `
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;">Gevonden via</td>
          <td style="padding:8px 12px;border:1px solid #ddd;">${escapeHtml(gevonden)}</td>
        </tr>` : ""}
        ${attachments.length > 0 ? `
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;">Bijlagen</td>
          <td style="padding:8px 12px;border:1px solid #ddd;">${attachments.length} bestand(en) — zie bijlagen</td>
        </tr>` : ""}
      </table>
    `;

    await resend.emails.send({
      from: "Fanatiek Bouw Website <noreply@fanatiekbouw.nl>",
      to: [process.env.CONTACT_EMAIL || "info@fanatiekbouw.nl"],
      replyTo: email,
      subject: `Offerte-aanvraag: ${typeProject} — ${naam}`,
      html,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Er ging iets mis. Probeer het later opnieuw of bel ons direct." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
