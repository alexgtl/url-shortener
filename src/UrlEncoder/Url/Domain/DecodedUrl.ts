export default class DecodedUrl {
  private decodedUrl: string

  constructor(decodedUrl: string) {
    this.decodedUrl = decodedUrl
  }

  public get() {
    return this.decodedUrl
  }
}
