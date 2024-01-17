import fs from 'fs'
import path from 'path'

// @ts-ignore
import { convert } from 'pdf-poppler'

import { PdfToImageRequestDTO } from './PdfToImageRequestDTO'

class PdfToImageUseCase {

  async execute({ file, imageName }: PdfToImageRequestDTO) {
    const inputPath = path.join(__dirname, 'temp.pdf')
    const outputPath = path.join(__dirname, imageName)

    fs.writeFileSync(inputPath, Buffer.from(file.buffer));

    const opts = {
      format: 'png',
      out_dir: path.dirname(outputPath),
      out_prefix: path.basename(outputPath, path.extname(outputPath))
    }
    
    try {
      await convert(inputPath, opts)
      
      return { inputPath, outputPath: outputPath+ '-1.png' }
    } catch (err) {
      console.log(err)
      return false
    }
  }
}

export { PdfToImageUseCase }