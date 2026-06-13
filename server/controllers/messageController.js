import { pool } from "../config/db.js";

// GET all messages
export const getMessages = async (req, res) => {
  try {
    console.log("📨 Fetching messages...");
    console.log("DATABASE_URL:", process.env.DATABASE_URL ? "✅ Set" : "❌ NOT SET");
    
    const result = await pool.query(
      "SELECT * FROM messages ORDER BY id DESC"
    );

    console.log("✅ Messages fetched:", result.rows.length);

    res.status(200).json({
      success: true,
      messages: result.rows
    });
  } catch (error) {
    console.error("❌ GET MESSAGES ERROR:", error.message);
    console.error("Full error:", error);
    
    res.status(500).json({ 
      success: false,
      message: "Failed to fetch messages",
    });
  }
};

// DELETE message
export const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM messages WHERE id = $1", [id]);

    res.status(200).json({
      success: true,
      message: "Message deleted",
    });
  } catch (error) {
    console.error("Delete Message Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete message",
    });
  }
};