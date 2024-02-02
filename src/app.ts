import express from 'express'
import bodyParser from 'body-parser'
import { urlRouter } from './UrlEncoder/Url/Infrastructure/UrlRouter'
import cors from 'cors'

const PORT = process.env.PORT

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api/v1/', urlRouter)

app.listen(PORT, () => {
  console.log(`[APP] - Starting application on port ${PORT}`)
})

export default app
