import { EncodedUrl } from '../Domain/EncodedUrl'
import { UrlRepository } from '../Domain/UrlRepository'

export class GetDecodedUrlUseCase {
  private externalEncodedUrl: EncodedUrl
  private urlRepository: UrlRepository

  constructor(externalEncodedUrl: EncodedUrl, urlRepository: UrlRepository) {
    this.externalEncodedUrl = externalEncodedUrl
    this.urlRepository = urlRepository
  }

  async run() {
    try {
      console.log('Get Decoded Use Case')
      return await this.urlRepository.getDecodedUrl(this.externalEncodedUrl.get())
    } catch (error) {
      console.log('Error in CreateEncodedUrlUseCase', error)
    }
  }
}
