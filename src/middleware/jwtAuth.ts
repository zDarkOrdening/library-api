import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import jwtConfig from "./jwtConfig";

interface JwtPayload {
  
}

const jwtAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization");

}
  

