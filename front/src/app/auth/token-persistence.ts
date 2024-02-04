const keyAT = '@access_token_sc';
export class AccessTokenPersistence {
  static get() {
    return localStorage.getItem(keyAT);
  }

  static save(token: string) {
    return localStorage.setItem(keyAT, token);
  }

  static remove() {
    return localStorage.removeItem(keyAT);
  }
}
