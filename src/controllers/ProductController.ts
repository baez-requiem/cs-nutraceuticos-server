import { Request, Response } from 'express'

import { CreateProductUseCase } from '../useCases/createProduct/CreateProductUseCase'
import { UpdateProductUseCase } from '../useCases/updateProduct/UpdateProductUseCase'
import { DeleteProductUseCase } from '../useCases/deleteProduct/DeleteProductUseCase'
import { GetProductsUseCase } from '../useCases/getProducts/GetProductsUseCase'

class ProductController {

  async createProductHandle(request: Request, response: Response) {
    const data = request.body

    const createUserUseCase = new CreateProductUseCase()

    const product = await createUserUseCase.execute(data)

    return response.json(product)
  }

  async updateProductHandle(request: Request, response: Response) {
    const data = request.body

    const updateMediaUseCase = new UpdateProductUseCase()

    const product = await updateMediaUseCase.execute(data)

    return response.json(product)
  }

  async deleteProductHandle(request: Request, response: Response) {
    const { id } = request.body

    const deleteProductUseCase = new DeleteProductUseCase()

    const status = await deleteProductUseCase.execute({ id })

    return response.json(status)
  }

  async getProductsHandle(_request: Request, response: Response) {
    const getProductsUseCase = new GetProductsUseCase()

    const products = await getProductsUseCase.execute()

    return response.json(products)
  }
}

export { ProductController }