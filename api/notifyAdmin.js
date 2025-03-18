// In your notifyAdmin.js file (server-side)

const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { companyName, month, fileNames } = req.body;

      // Check if required fields are provided
      if (!companyName || !month) {
        return res
          .status(400)
          .json({ success: false, message: "Missing required fields" });
      }

      // Setup your email transporter
      const transporter = nodemailer.createTransport({
        service: "gmail", // or any other email service provider
        auth: {
          user: process.env.EMAIL_USER, // Set environment variables for credentials
          pass: process.env.EMAIL_PASS,
        },
      });

      // Define the email content
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL, // Send to admin's email
        subject: "New Document Upload Notification",
        text: `A new document has been uploaded.

        Company Name: ${companyName}
        Month: ${month}
        Files: ${fileNames.join(", ")}

        Please check the system for more details.`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      return res
        .status(200)
        .json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .json({ success: false, message: "Failed to send email" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
