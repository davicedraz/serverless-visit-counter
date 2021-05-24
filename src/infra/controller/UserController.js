const HttpStatus = require('http-status-codes');

const User = require("../../app/domain/User");
const UserService = require('../../app/service/UserService');
const UserRepository = require('../database/repositories/UserRepository');

class UsersController {

  static async create(req, res) {
    const userService = new UserService(UserRepository);
    const newUser = new User(req.body);
    await newUser.validate();

    const user = await userService.create(newUser);
    return res.status(HttpStatus.StatusCodes.CREATED).json(user);
  }
}

module.exports = UsersController;
