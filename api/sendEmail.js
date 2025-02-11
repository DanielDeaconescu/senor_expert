import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { fullName, email, phone, company, service, message, turnstileToken } =
    req.body;

  // Validate input fields
  if (
    !fullName ||
    !email ||
    !phone ||
    !company ||
    !service ||
    !turnstileToken
  ) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Verify Turnstile token
    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      }
    );

    const turnstileData = await turnstileResponse.json();

    if (!turnstileData.success) {
      return res.status(400).json({ error: "Turnstile verification failed" });
    }

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"Formular Senor Expert" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Solicitare Formular | Nume: ${fullName} | Firma: ${company}`,
      text: `
        Nume: ${fullName}
        Adresă de email: ${email}
        Telefon: ${phone}
        Societate: ${company}
        Tipul serviciului: ${service}
        Mesaj: ${message || "Fără mesaj"}
      `,
      html: `
        <meta charset="UTF-8">
        <h2>Un utilizator a completat formularul de contact de pe website și mai jos găsiți detaliile solicitării: </h2>
        <div><strong>Nume:</strong> ${fullName}</div>
        <div><strong>Adresă de email:</strong> ${email}</div>
        <div><strong>Telefon:</strong> ${phone}</div>
        <div><strong>Societate:</strong> ${company}</div>
        <div><strong>Tipul serviciului:</strong> ${service}</div>
        <div><strong>Mesaj:</strong> ${message || "Fără mesaj"}</div>
      `,
    });

    return res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send email." });
  }
}
