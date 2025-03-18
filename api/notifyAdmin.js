import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { companyName, month } = req.body;

  try {
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
      from: `"Senor Expert" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `Un utilizator a încărcat un nou document folosind aplicația Senor Expert`,
      text: `
        Un utilizator de la compania ${companyName} a încărcat documente noi pentru luna ${month}. Vizitați aplicația pentru a vedea.
      `,
      html: `
        <p>Un utilizator de la compania <strong>${companyName}</strong> a încărcat documente noi pentru luna <strong>${month}</strong>. Vizitați aplicația folosind link-ul de mai jos pentru a vedea.</p>
        <div>
            <a href="https://www.senorexpert.ro/" target="_blank">Senor Expert</a>
        </div>
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
