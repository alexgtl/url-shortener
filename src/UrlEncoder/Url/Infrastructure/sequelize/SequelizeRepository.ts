// import DecodedUrl from '../../Domain/DecodedUrl'
import DecodedUrl from '../../Domain/DecodedUrl'
import { EncodedDecoded } from '../../Domain/EncodedDecoded'
import { UrlRepository } from '../../Domain/UrlRepository'
import UrlModel from './UrlModel'

export class SequelizeRepository implements UrlRepository {
  constructor() {}

  async saveUrl(encodedDecoded: EncodedDecoded): Promise<void> {
    try {
      const response = await UrlModel.create({
        encoded_url: encodedDecoded.encodedUrl.get(),
        decoded_url: encodedDecoded.decodedUrl.get()
      })

      console.log('UserCreado', response)
    } catch (error) {
      console.log('Error creando ', error)
    }
  }

  async getDecodedUrl(encodedUrl: string): Promise<DecodedUrl | undefined> {
    try {
      const result = await UrlModel.findOne({ where: { encoded_url: encodedUrl } })
      return new DecodedUrl(result?.decoded_url ?? '')
    } catch (error) {
      console.log('Error creando ', error)
    }
  }
}
