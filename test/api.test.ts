import request from 'supertest'
import app from '../src/app'

describe('Space test suite', () => {
  it('tests /destinations endpoints', async () => {
    const response = await request(app).get('/api/v1/decodeUrl/apm142').send()

    console.log(response.text)

    expect(response.statusCode).toBe(200)
    expect(response.text).toEqual('http://www.alexgutierrez.dev')
  })
})
