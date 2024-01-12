import DecodedUrl from '../../Domain/DecodedUrl'
import { EncodedDecoded } from '../../Domain/EncodedDecoded'
import { EncodedUrl } from '../../Domain/EncodedUrl'

export class EncodedUrlGenerator {
  constructor() {}

  static generateEncodedUrl(): EncodedUrl {
    const encodedUrl: string = Math.random().toString(36).substr(2, 6)
    return new EncodedUrl(encodedUrl)
  }

  static generateEncodeDecodeEntity(url: string): EncodedDecoded {
    const decodedUrl: DecodedUrl = new DecodedUrl(url)
    const encodedUrl: EncodedUrl = EncodedUrlGenerator.generateEncodedUrl()

    const encodedDecodedUrl: EncodedDecoded = {
      encodedUrl,
      decodedUrl
    }

    return encodedDecodedUrl
  }
}
