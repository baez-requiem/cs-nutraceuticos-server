import { NextFunction, Request, Response } from "express"
import { CustomError } from "../utils/error.utils"

export function errorMiddleware(
  error: Error & Partial<CustomError>,
  request: Request,
  response: Response,
  next: NextFunction
) {
  return response.status(error.statusCode ?? 500).json({
    error: error.message,
    errors: error.errors
  })
}