import jwt from "jsonwebtoken";
import User from "../Models/User.js";

// Verifying
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

const roleAuthorization = (roles) => {
  return async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id);
      if (!roles.includes(user.role)) {
        return res.status(403).json({ message: "Access Denied" });
      }
      next();
    } catch (err) {
      res.status(500).json({ message: "Server Error" });
    }
  };
};

export default { verifyToken, roleAuthorization };
