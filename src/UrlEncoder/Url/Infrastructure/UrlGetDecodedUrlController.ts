import { Request, Response } from 'express'
import { UrlGeneralController } from '../Domain/UrlController'
import { UrlRepository } from '../Domain/UrlRepository'
import { GetDecodedUrlUseCase } from '../Application/GetDecodedUrlUseCase'
import { EncodedUrl } from '../Domain/EncodedUrl'

export class UrlGetDecodedUrlController implements UrlGeneralController {
  urlRepository: UrlRepository

  constructor(urlRepository: UrlRepository) {
    this.urlRepository = urlRepository
  }

  async handler(req: Request, res: Response): Promise<void> {
    const url = req.params.encodedUrl

    try {
      const encodedUrl = new EncodedUrl(url)

      const getDecodedUrlUseCase = new GetDecodedUrlUseCase(encodedUrl, this.urlRepository)
      const decodedUrl = await getDecodedUrlUseCase.run()

      const response = {
        decodedUrl: decodedUrl?.get()
      }
      res.status(200).json(response)
    } catch (error) {
      const response = {
        decodedUrl: 'not-found'
      }

      res.status(404).json(response)
    }
  }
}
