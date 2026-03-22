import { NextResponse } from "next/server";
import { Resend } from "resend";

let _resend: Resend | null = null;

function getResend() {
  if (!_resend) {
    _resend = new Resend(process.env.RESEND_API_KEY);
  }
  return _resend;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, email, telephone, souhait, message } = body;

    if (!nom || !email || !souhait) {
      return NextResponse.json(
        { error: "Champs requis manquants" },
        { status: 400 }
      );
    }

    const resend = getResend();

    await resend.emails.send({
      from: "Domaine Terre de Galets <onboarding@resend.dev>",
      to: process.env.EMAIL_TO || "kamal@sparkana.fr",
      subject: `Nouveau contact — ${souhait} — ${nom}`,
      html: `
        <h2>Nouveau message depuis le site</h2>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone || "Non renseigné"}</p>
        <p><strong>Souhait :</strong> ${souhait}</p>
        <p><strong>Message :</strong></p>
        <p>${message || "Aucun message"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi" },
      { status: 500 }
    );
  }
}
