const { Router } = require('express');

const UserController = require('./infra/controller/UserController');

// import auth from './middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.create);
// routes.post('/login', SessionController.generateToken);

// routes.use(auth.verifyToken);

// routes.put('/users', UserController.updateUser);
// routes.post('/file', uploadFile.single('file'), FileController.store);

module.exports = routes;
