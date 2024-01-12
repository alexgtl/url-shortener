import DecodedUrl from './DecodedUrl'
import { EncodedDecoded } from './EncodedDecoded'

export interface UrlRepository {
  saveUrl(encodedDecoded: EncodedDecoded): Promise<void>
  getDecodedUrl(encodedUrl: string): Promise<DecodedUrl | undefined>
}
