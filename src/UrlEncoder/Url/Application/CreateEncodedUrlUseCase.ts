import { EncodedDecoded } from '../Domain/EncodedDecoded'
import { UrlRepository } from '../Domain/UrlRepository'

export class CreateEncodedUrlUseCase {
  private encodedDecodedUrl: EncodedDecoded
  private urlRepository: UrlRepository

  constructor(encodedDecodedUrl: EncodedDecoded, urlRepository: UrlRepository) {
    this.encodedDecodedUrl = encodedDecodedUrl
    this.urlRepository = urlRepository
  }

  async run() {
    try {
      console.log('Create encoded url')
      await this.urlRepository.saveUrl(this.encodedDecodedUrl)
    } catch (error) {
      console.log('Error in CreateEncodedUrlUseCase', error)
    }
  }
}
