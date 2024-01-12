import { Request, Response } from 'express'
import { UrlGeneralController } from '../Domain/UrlController'
import { UrlRepository } from '../Domain/UrlRepository'
import { EncodedUrlGenerator } from '../shared/utils/EncodedUrlGenerator'
import { EncodedUrl } from '../Domain/EncodedUrl'
import { CreateEncodedUrlUseCase } from '../Application/CreateEncodedUrlUseCase'
import DecodedUrl from '../Domain/DecodedUrl'
import { EncodedDecoded } from '../Domain/EncodedDecoded'

export class UrlController implements UrlGeneralController {
  urlRepository: UrlRepository

  constructor(urlRepository: UrlRepository) {
    this.urlRepository = urlRepository
  }

  async handler(req: Request, res: Response): Promise<void> {
    try {
      const { url } = req.body

      const decodedUrl: DecodedUrl = new DecodedUrl(url)
      const encodedUrl: EncodedUrl = EncodedUrlGenerator.generateEncodedUrl()

      const encodedDecodedUrl: EncodedDecoded = {
        encodedUrl,
        decodedUrl
      }

      const createEncodedUrlUseCase = new CreateEncodedUrlUseCase(encodedDecodedUrl, this.urlRepository)
      await createEncodedUrlUseCase.run()

      res.status(200).send(encodedUrl)
    } catch (error) {
      throw new Error()
    }
  }
}
