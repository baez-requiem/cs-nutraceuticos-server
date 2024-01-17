import fs from 'fs'
import os from 'os'
import path from 'path'
import { Poppler } from 'node-poppler'

import { PdfToImageRequestDTO } from './PdfToImageRequestDTO'

class PdfToImageUseCase {

  async execute({ file, imageName }: PdfToImageRequestDTO) {
    const inputPath = path.join(__dirname, 'temp.pdf')
    const outputPath = path.join(__dirname, imageName)

    fs.writeFileSync(inputPath, Buffer.from(file.buffer));

    const poppler = new Poppler(os.type() === 'Windows_NT' ? undefined : '/usr/bin');

    try {
      await poppler.pdfToCairo(inputPath, outputPath, {
        firstPageToConvert: 1,
        pngFile: true
      })

      return { inputPath, outputPath: outputPath + '-1.png' }
    } catch (err) {
      console.log(err)
      return false
    }
  }
}

export { PdfToImageUseCase }