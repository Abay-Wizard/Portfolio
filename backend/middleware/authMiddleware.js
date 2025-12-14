import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
  const token = localStorage.getItem('token')
  if (!token) {
    return res.status(401).json({ success: false, message: "No token is provided!" });
  }

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.jwt_secret);
  } catch (err) {
    return res.status(401).json({ success: false, message: "Invalid token!" });
  }

  const isAdmin = decoded.admin;
  if (!isAdmin) {
    return res.status(403).json({ success: false, message: "You aren't a verified admin!" });
  }

  next();
};

export default authMiddleware;
