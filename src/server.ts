import 'dotenv/config'
import "express-async-errors"

import express, { NextFunction, Response, Request } from 'express'

import { router } from './routes'
import { errorMiddleware } from "./middlewares/error"

const app = express()

app.use((request: Request, response: Response, next: NextFunction)=> {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Credentials", "true");
  response.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  response.header("Access-Control-Allow-Headers", "*");

  return next()
})

app.use(express.json())

app.use(router)

app.use(errorMiddleware)



app.listen(3000, () => console.log('Server is running on port 3000'))