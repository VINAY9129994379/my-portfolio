import nodemailer from "nodemailer";
import { pool } from "../config/db.js";

export const createMail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // 1. SAVE TO DATABASE
    await pool.query(
      "INSERT INTO messages (name, email, message) VALUES ($1, $2, $3)",
      [name, email, message]
    );

    // 2. SEND EMAIL
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="padding:10px;border-left:4px solid #7c6dfa;">
            ${message}
          </div>
        </div>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message saved & email sent successfully",
    });

  } catch (error) {
    console.log("Email Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to process message",
    });
  }
};