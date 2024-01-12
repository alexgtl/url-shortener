import express, { Router } from 'express'
import { urlController, urlGetDecodedUrlController } from './Dependencies'

const urlRouter: Router = express.Router()

urlRouter.post('/encodeUrl', urlController.handler.bind(urlController))
urlRouter.get('/decodeUrl/:encodedUrl', urlGetDecodedUrlController.handler.bind(urlGetDecodedUrlController))

export { urlRouter }
