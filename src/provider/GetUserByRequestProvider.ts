import { Request } from "express"
import { verify } from "jsonwebtoken"
import { client } from "../prisma/client"

class GetUserByRequestProvider {
  async execute(req: Request, hasReturnUser: boolean = false) {
    const authToken = req.headers.authorization!

    const [, token] = authToken.split(" ")

    const decoded = verify(token, process.env.JWT_SECRET_TOKEN!)

    const userId = typeof decoded.sub == 'string'
      ? decoded.sub
      : decoded.sub?.()

    if (!userId) {
      throw new Error('Invalid token')
    }

    if (hasReturnUser) {
      const user = await client.user.findUnique({
        where: { id: userId }
      })

      if (!user) {
        throw new Error('Invalid token')
      }

      return user
    }

    return userId
  }
}

export { GetUserByRequestProvider }