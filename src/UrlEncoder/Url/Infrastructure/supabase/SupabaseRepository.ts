import DecodedUrl from '../../Domain/DecodedUrl'
import { EncodedDecoded } from '../../Domain/EncodedDecoded'
import { UrlRepository } from '../../Domain/UrlRepository'
import { createClient } from '@supabase/supabase-js'

export class SupabaseRepository implements UrlRepository {
  SUPABASE_URL = process.env.SUPABASE_URL ?? ''
  SUPABASE_KEY = process.env.SUPABASE_KEY ?? ''
  SUPABASE_URLS_TABLE = process.env.SUPABASE_URLS_TABLE ?? ''

  supabaseClient

  constructor() {
    this.supabaseClient = createClient(this.SUPABASE_URL, this.SUPABASE_KEY)
  }

  async saveUrl(encodedDecoded: EncodedDecoded): Promise<void> {
    try {
      const { error } = await this.supabaseClient.from(this.SUPABASE_URLS_TABLE).insert({
        encoded_url: encodedDecoded.encodedUrl.get(),
        decoded_url: encodedDecoded.decodedUrl.get()
      })
    } catch (error) {
      throw Error()
    }
  }

  async getDecodedUrl(encodedUrl: string): Promise<DecodedUrl | undefined> {
    try {
      const { data } = await this.supabaseClient.from(this.SUPABASE_URLS_TABLE).select().eq('encoded_url', encodedUrl)
      if (!data) {
        return
      }

      return new DecodedUrl(data[0].decoded_url ?? '')
    } catch (error) {
      throw new Error()
    }
  }
}
