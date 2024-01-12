import express from 'express'
import bodyParser from 'body-parser'
import { urlRouter } from './UrlEncoder/Url/Infrastructure/UrlRouter'

const PORT = process.env.PORT

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/v1/', urlRouter)

app.listen(PORT, () => {
  console.log(`[APP] - Starting application on port ${PORT}`)
})

export default app
