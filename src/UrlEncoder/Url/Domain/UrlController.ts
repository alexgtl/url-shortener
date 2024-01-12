import { Request, Response } from 'express'
import { UrlRepository } from './UrlRepository'

export interface UrlGeneralController {
  urlRepository: UrlRepository
  handler?(req: Request, res: Response): void
}
