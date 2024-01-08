import fs from 'fs'

import { Request, Response } from 'express'
import { BaseController } from '../../../../shared/core/BaseController'
import { PdfToImageUseCase } from './PdfToImageUseCase'
import { PdfToImageRequestDTO } from './PdfToImageRequestDTO'

class PdfToImageController extends BaseController {
  private useCase: PdfToImageUseCase

  constructor(useCase: PdfToImageUseCase) {
    super()
    this.useCase = useCase
  }

  async execute(request: Request, response: Response) {
    const file = request.file;
    const imageName = request.body.imageName;

    if (!file || !imageName) {
      return this.clientError(response, 'Arquivo ou nome da imagem não fornecido.')
    }

    const result = await this.useCase.execute({ file, imageName } as PdfToImageRequestDTO)

    if (result) {
      response.download(result.outputPath, err => {
        try { fs.unlinkSync(result.inputPath) } catch (_err) { }
        try { fs.unlinkSync(result.outputPath) } catch (_err) { }
        
        if (err) return this.clientError(response, 'Houve um erro ao converter a imagem.')
      })
    } else {
      return this.clientError(response, 'Houve um erro ao converter a imagem.');
    }
  }
}

export { PdfToImageController }