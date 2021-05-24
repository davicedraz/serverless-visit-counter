const bcrypt = require('bcryptjs');

class UserService {

  constructor(UserRepository) {
    this.userRepository = new UserRepository();
  }

  async create(newUser) {
    newUser.password = await bcrypt.hashSync(newUser.password, 8);
    const user = await this.userRepository.save(user);
    return user;
  }

}

module.exports = UserService;
