import { getAuth } from "@clerk/express";  // ← ADD THIS LINE

export const adminOnly = (req, res, next) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (userId !== process.env.ADMIN_ID) {
    return res.status(403).json({ message: "Forbidden" });
  }

  next();
};