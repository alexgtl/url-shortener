export class EncodedUrl {
  private encodedUrl: string

  constructor(encodedUrl: string) {
    this.encodedUrl = encodedUrl
  }

  public get() {
    return this.encodedUrl
  }
}
