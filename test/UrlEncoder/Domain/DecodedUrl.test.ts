import DecodedUrl from '../../../src/UrlEncoder/Url/Domain/DecodedUrl'

describe('Decoded url', () => {
  let decodedUrl: DecodedUrl

  beforeEach(() => {
    decodedUrl = new DecodedUrl('John')
  })

  it('should be correctly created', () => {
    expect(decodedUrl).toBeDefined()
    expect(decodedUrl.get()).toBe('John')
  })

  it('should return the url', () => {
    expect(decodedUrl).toBeDefined()
    expect(decodedUrl.get()).toBe('John')
  })
})
