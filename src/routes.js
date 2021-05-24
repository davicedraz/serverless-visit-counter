const { Router } = require('express');
const UserController = require('./infra/controller/UserController');

const routes = new Router();

routes.post('/users', UserController.createUser);
routes.get('/users/:id', UserController.getUser);

module.exports = routes;
