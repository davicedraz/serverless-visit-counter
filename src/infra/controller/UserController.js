const HttpStatus = require('http-status-codes');

const User = require("../../app/domain/User");
const UserService = require('../../app/service/UserService');
const UserRepository = require('../database/repositories/UserRepository');

class UsersController {

  static async createUser(req, res) {
    try {
      const newUser = new User(req.body);
      await newUser.validate();

      const userService = new UserService(UserRepository);
      const user = await userService.create(newUser);
      return res.status(HttpStatus.StatusCodes.CREATED).json(user);
    } catch (error) {
      return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
          message: "Could not create user",
          error
        });
    }
  }

  static async getUser(req, res) {
    try {
      const userService = new UserService(UserRepository);
      const user = await userService.getOne(req.params.id);
      if (!user) return res.status(HttpStatus.StatusCodes.NOT_FOUND)
        .send(HttpStatus.ReasonPhrases.NOT_FOUND);

      return res.status(HttpStatus.StatusCodes.OK).json(new User(user).get());
    } catch (error) {
      return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
          message: "Could not retrieve user information",
          error
        });
    }

  }
}

module.exports = UsersController;
