import { verify } from "jsonwebtoken"
import { client } from "../prisma/client"

class GetUserByAuthProvider {
  async execute(authToken: string) {
      const [_, token] = authToken.split(" ")

      const decoded = verify(token, process.env.JWT_SECRET_TOKEN!)

      const userId = typeof decoded.sub == 'string'
        ? decoded.sub
        : decoded.sub?.()

      const user = await client.user.findUnique({
        where: { id: userId }
      })

      return user
  }
}

export { GetUserByAuthProvider }