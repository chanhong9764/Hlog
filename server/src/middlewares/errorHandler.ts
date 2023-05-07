import { Request, Response, NextFunction } from "express";
import HttpException from "../models/HttpException";

export default function (
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err);
  res.status(err.status || 500).json({ message: err.message });
}
