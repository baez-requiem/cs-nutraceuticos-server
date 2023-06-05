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
    verify(token, "d9781907-36fe-4e5a-b122-b8003c3432e5")

    return next()
  } catch (error) {
    return response.status(401).json({
      message: "Token invalid"
    })
  }
}