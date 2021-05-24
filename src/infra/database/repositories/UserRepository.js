const UserSchema = require("../schema/UserSchema");

class UserRepository {

  async save(user) {
    const newUser = await UserSchema.create(user);
    return newUser;
  }

  async listAll() {
    return await UserSchema.scan().exec();
  }

  async findById(id) {
    const user = await UserSchema.get(id);
    return user;
  }

}

module.exports = UserRepository;
