
import { Response, Request } from 'express'

export abstract class BaseController {

  protected abstract execute (req: Request, res: Response): Promise<void | any>

  public async exec (req: Request, res: Response): Promise<void> {
    try {
      await this.execute(req, res)
    } catch (err) {
      console.log(`[BaseController]: Uncaught controller error`)
      console.log(err)
      
      this.fail(res, 'An unexpected error occurred')
    }
  }

  public ok<T> (res: Response, dto?: T) {
    if (!!dto) {
      res.type('application/json')
      return res.status(200).json(dto)
    } else {
      return res.sendStatus(200);
    }
  }

  public created (res: Response) {
    return res.sendStatus(201);
  }

  public clientError (res: Response, error: string | object[]) {
    if (typeof error == 'string') {
      return res.status(400).json({
        message: error
      })
    } else {
      return res.status(400).json({
        message: 'Error',
        erros: error
      })
    }
  }

  public fail (res: Response, error: any = 'An unexpected error occurred') {
    console.log(error)

    return res.status(500).json({
      message: error.toString()
    })
  }
}