import { UrlController } from './UrlController'
import { UrlGetDecodedUrlController } from './UrlGetDecodedUrlController'
import { SequelizeRepository } from './sequelize/SequelizeRepository'
import { SupabaseRepository } from './supabase/SupabaseRepository'

const urlRepository = new SequelizeRepository()
const supabaseRepository = new SupabaseRepository()

export const urlController = new UrlController(supabaseRepository)
export const urlGetDecodedUrlController = new UrlGetDecodedUrlController(supabaseRepository)
