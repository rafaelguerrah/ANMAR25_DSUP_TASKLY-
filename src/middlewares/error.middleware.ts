import { Request, Response, NextFunction } from 'express'

export function errorMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  console.error(err)
  res.status(500).json({
    message: 'Internal Server Error',
    error: err.message || err,
  })
}
