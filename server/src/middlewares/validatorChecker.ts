import { Request, Response, NextFunction } from "express";
import HttpException from "../models/HttpException";
const { validationResult } = require("express-validator");

interface test {
  value: string;
  msg: string;
  param: string;
  location: string;
}
export default function (req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  throw new HttpException(400, errors.array()[0].msg);
}
