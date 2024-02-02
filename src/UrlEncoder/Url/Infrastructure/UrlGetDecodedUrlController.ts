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
    try {
      const url = req.params.encodedUrl

      const encodedUrl = new EncodedUrl(url)

      const getDecodedUrlUseCase = new GetDecodedUrlUseCase(encodedUrl, this.urlRepository)
      const decodedUrl = await getDecodedUrlUseCase.run()

      const response = {
        decodedUrl: decodedUrl?.get()
      }
      if (!response.decodedUrl) {
        res.status(404).send('')
      } else {
        res.status(200).json(response)
      }
    } catch (error) {
      res.status(404).send('')
      throw new Error('Not found')
    }
  }
}
