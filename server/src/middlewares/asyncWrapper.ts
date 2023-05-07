import { Request, Response, NextFunction, RequestHandler } from "express";

export default function (
  asyncController: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<Response | void>
): RequestHandler {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await asyncController(req, res, next);
    } catch (err) {
      next(err);
    }
  };
}
