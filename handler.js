const serverless = require("serverless-http");
const app = require('./api/index');

module.exports.api = serverless(app);
