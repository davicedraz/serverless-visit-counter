const bcrypt = require('bcryptjs');
const { DuplicityException } = require('../errors');

class UserService {

  constructor(UserRepository) {
    this.userRepository = new UserRepository();
  }

  async create(user) {
    const userExist = await this.userExist(user.email);
    if (userExist) throw new DuplicityException('That email is already in use');

    user.password = await bcrypt.hash(user.password, 8);
    const newUser = await this.userRepository.save(user);
    return newUser;
  }

  async getOne(id) {
    const user = await this.userRepository.findById(id);
    return user;
  }

  async userExist(id) {
    const user = await this.userRepository.findById(id);
    return !!user;
  }

}

module.exports = UserService;
