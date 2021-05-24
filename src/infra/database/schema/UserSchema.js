const uuid = require('uuid');
const dynamoose = require('dynamoose');

const env = require('../../../config/env');

dynamoose.AWS.config.update({
  region: 'us-east-1',
});

if (env.IS_OFFLINE === 'true')
  dynamoose.local();

const UserSchema = new dynamoose.Schema({
  id: {
    type: String,
    hashKey: true,
    default: uuid.v1(),
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
},
  {
    timestamps: true,
  });

module.exports = dynamoose.model('UserSchema', UserSchema);
