const { context, getToken } = require('@adobe/aio-lib-core-ims');

async function myToken(params) {

  const config = {
    callback_url: "https://ims-na1.adobelogin.com/s/ent_marketing_sdk",
    client_id: "ca82a30862d84eaf8f25dcdbee5e2b09",
    client_secret: "4284ed52-3c55-4c96-b36f-08ca41f2907b",
    scope: "openid"
  };
  context.set('example', config, true);
  context.current = 'example';
  
  const token = getToken();
  const tokenDecoded = getTokenData(token);
    
  return tokenDecoded;
}


exports.main = myToken;
