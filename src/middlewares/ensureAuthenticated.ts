import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken"

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
  const authToken = request.headers.authorization

  if (!authToken) {
    return response.status(401).json({
      message: "Token is missing"
    })
  }

  const [_, token] = authToken.split(" ")

  try {
    verify(token, process.env.JWT_SECRET_TOKEN!)

    return next()
  } catch (error) {
    return response.status(401).json({
      message: "Token invalid"
    })
  }
}