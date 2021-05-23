export class Database {
  constructor() {
    if (!Database.instance) {
      Database.instance = this;
    }
    return Database.instance;
  }

  getInstance() {
    const instance = new Database();
    Object.freeze(instance);
    return instance;
  }
}
