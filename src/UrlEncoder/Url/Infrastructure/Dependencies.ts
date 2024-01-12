import { UrlController } from './UrlController'
import { UrlGetDecodedUrlController } from './UrlGetDecodedUrlController'
import { SequelizeRepository } from './sequelize/SequelizeRepository'

const urlRepository = new SequelizeRepository()

export const urlController = new UrlController(urlRepository)
export const urlGetDecodedUrlController = new UrlGetDecodedUrlController(urlRepository)
