import express, { Router } from 'express'
import { urlController, urlGetDecodedUrlController } from './Dependencies'
import cors from 'cors'

const urlRouter: Router = express.Router()

urlRouter.post('/encodeUrl', cors(), urlController.handler.bind(urlController))
urlRouter.get('/decodeUrl/:encodedUrl', cors(), urlGetDecodedUrlController.handler.bind(urlGetDecodedUrlController))

export { urlRouter }
