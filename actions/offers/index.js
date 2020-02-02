const { Core, Target } = require("@adobe/aio-sdk");
//const { context, getToken } = require('@adobe/aio-lib-core-ims');

const token = require("../getToken");
async function main(params) {

  try {

    const targetClient = await Target.init(
      "lamont",
      "494b6fab8bac492da41e3eea4332e447",
      token.myToken()
    );

    const offers = await targetClient.getOffers();

    return {
      statusCode: 200,
      body: offers
    };
  } catch (error) {
    return {
      statusCode: error.statusCode,
      body: error.info
    };
  }

}


exports.main = main;
main();