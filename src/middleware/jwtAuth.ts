import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import jwtConfig from "./jwtConfig";

interface JwtPayload {
  id: string,
  name: string,
  email: string,
  role: string
}

const jwtAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ message: "Authorization token expected"})
  }
  try {
    const decode = jwt.verify(token, jwtConfig.secret) as JwtPayload
    req.user = decode
    next()
  } catch (error) {
    return res.status(401).json({ message: "Invalid token provided"})
  }
}

export default jwtAuth