class Session {
  private username: string;
  private expiresAt: Date;

  constructor(username: string, expiresAt: Date) {
    this.username = username;
    this.expiresAt = expiresAt;
  }

  isExpired(): boolean {
    return this.expiresAt < new Date();
  }
}
