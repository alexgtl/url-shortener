import { EncodedUrl } from '../../../src/UrlEncoder/Url/Domain/EncodedUrl'
import { EncodedUrlGenerator } from '../../../src/UrlEncoder/Url/shared/utils/EncodedUrlGenerator'

describe('Encoded url generator', () => {
  let encodedUrlGenerator: EncodedUrlGenerator

  beforeEach(() => {
    encodedUrlGenerator = new EncodedUrlGenerator()
  })

  it('should be correctly created', () => {
    expect(encodedUrlGenerator).toBeDefined()
  })

  it('should create an encoded valid url', () => {
    const encodedUrl: EncodedUrl = EncodedUrlGenerator.generateEncodedUrl()

    expect(encodedUrl).toBeDefined()
    expect(encodedUrl).toBeInstanceOf(EncodedUrl)
  })
})
