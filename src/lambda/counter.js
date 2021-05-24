'use strict';

const incrementHit = async (event) => {
  try {
    const countapi = require('countapi-js');
    await countapi.hit('davicedraz.com', 'visits');

    return {
      statusCode: 204,
    };
  } catch (error) {
    return error;
  }

};

const getVisits = async (event) => {
  try {
    const countapi = require('countapi-js');
    const result = await countapi.get('davicedraz.com', 'visits');

    return {
      statusCode: 200,
      body: JSON.stringify({ result })
    };
  } catch (error) {
    return error;
  }
};

module.exports = {
  getVisits,
  incrementHit
}
