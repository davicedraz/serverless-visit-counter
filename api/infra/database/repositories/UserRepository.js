const { User } = require("../../../domain/User");

export class UserRepository {

  constructor(Database) {
    this.db = new Database();
  }

  async findById(id) {
    const user = new User(id);
    const user = await this.db.query(user)
    return user;
  }

}
