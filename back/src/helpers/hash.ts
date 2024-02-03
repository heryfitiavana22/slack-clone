export class Hash {
  static make(value: string) {
    return value;
    // return bcrypt.hashSync(value, SALT_ROUND);
  }

  static compare(value: string, hashValue: string) {
    return value == hashValue;
    // return bcrypt.compareSync(value, hashValue);
  }
}
