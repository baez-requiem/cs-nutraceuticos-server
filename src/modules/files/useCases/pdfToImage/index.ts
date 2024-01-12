import { PdfToImageUseCase } from "./PdfToImageUseCase"
import { PdfToImageController } from "./PdfToImageController"

const pdfToImageUseCase = new PdfToImageUseCase()
const pdfToImageController = new PdfToImageController(pdfToImageUseCase)

export { pdfToImageUseCase, pdfToImageController }