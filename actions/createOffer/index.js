/**
 * Main action
 *
 * You can invoke this function via:
 *     aio rt:action:invoke <action_path> -p tenant '<tenant_id>' -p apiKey '<api_key>' -p token '<access_token>'
 *
 * To find your <action_path>, run this command:
 *     aio rt:ls
 *
 * To show debug logging for this function, you can add the LOG_LEVEL parameter as well:
 *     aio rt:action:invoke <action_path> -p tenant '<tenant_id>' -p apiKey '<api_key>' -p token '<access_token>' -p LOG_LEVEL '<log_level>'
 * ... where LOG_LEVEL can be one of [ error, warn, info, verbose, debug, silly ]
 *
 * Then, you can view your app logs:
 *     aio app:logs
 */

const { Core, Target } = require("@adobe/aio-sdk");
const { context, getToken } = require("@adobe/aio-lib-core-ims");

async function main(params) {
  const token =
    "eyJ4NXUiOiJpbXNfbmExLWtleS0xLmNlciIsImFsZyI6IlJTMjU2In0.eyJpZCI6IjE1NzY0Mzg0NTQ5NDNfOWYwZGNmZWYtYjAzMy00OWQwLTk5NzYtNGQ2OGIwN2VlZmFhX3VlMSIsImNsaWVudF9pZCI6IjQ5NGI2ZmFiOGJhYzQ5MmRhNDFlM2VlYTQzMzJlNDQ3IiwidXNlcl9pZCI6IjdCNzA2OEQwNURDMkQ5QjEwQTQ5NUM0NEB0ZWNoYWNjdC5hZG9iZS5jb20iLCJ0eXBlIjoiYWNjZXNzX3Rva2VuIiwiYXMiOiJpbXMtbmExIiwiZmciOiJVQVRaTUhNRUhQRjVaSFVMQ09RM0tQUUFQTT09PT09PSIsIm1vaSI6Ijc0ZTdlYmVlIiwiYyI6Ik1kVGVzRm03ZmJVS2lJMlVFbG41M1E9PSIsImV4cGlyZXNfaW4iOiI4NjQwMDAwMCIsInNjb3BlIjoib3BlbmlkLEFkb2JlSUQsdGFyZ2V0X3NkayxyZWFkX29yZ2FuaXphdGlvbnMsYWRkaXRpb25hbF9pbmZvLnJvbGVzLGFkZGl0aW9uYWxfaW5mby5wcm9qZWN0ZWRQcm9kdWN0Q29udGV4dCIsImNyZWF0ZWRfYXQiOiIxNTc2NDM4NDU0OTQzIn0.hMJhDquPfvYRbbUqK5B2oycroFZy2FStB0XYmYNg-BRZpLq3Wo1c1V6JmHPRTXNl4JBVr0HaWvT6ed-FlIsTltDjmS5Z7Wf6Zof5-i2Hv-t2ryKZDepy1-9tFGvb9Gf-mgnNHIJCZn6Mhl91ZOxPVPbYKO-bUWUiiAM4HE8BzCyJZs9j6w6PzB91f5gj2Dy8w5kvbrdXK5eV7A1lyhjGhSLHZ1PuyE1B2T0NgycceG9c1rfOjOYHoqpE4dzJXg6NzTeTEa8woTfAlMmw1R6WT1dqQxPTp0JkIYckvTMyy5rvcLQE1EseBwOciGgbjUCz9XlI4s21KbDzd7r1LScVTw";

  // create a Logger
  const myAppLogger = Core.Logger("MyApp", { level: params.LOG_LEVEL });
  // 'info' is the default level if not set
  myAppLogger.info("Calling the main action");

  // log levels are cumulative: 'debug' will include 'info' as well (levels are in order of verbosity: error, warn, info, verbose, debug, silly)
  myAppLogger.debug(`params: ${JSON.stringify(params, null, 2)}`);

  try {
    // initialize the sdk
    const targetClient = await Target.init(
      "lamont",
      "494b6fab8bac492da41e3eea4332e447",
      token
    );

    // get activities from Target api
    const activities = await targetClient.getOffers({ limit: 5, offset: 0 });
    myAppLogger.debug(`profiles = ${JSON.stringify(activities, null, 2)}`);

    return {
      statusCode: 200,
      body: activities
    };
  } catch (error) {
    myAppLogger.error(error);
  }
}

/*{
  "client_id": "494b6fab8bac492da41e3eea4332e447",
  "tenant": "lamont",
  "client_secret": "f580e0d0-91d4-45f0-aa64-3665407363af",
  "url": "https://ims-na1.adobelogin.com/ims/exchange/jwt/",
  "payload": {
      "exp": "",
      "iss": "2CAB2CAD547352740A4C98C6@AdobeOrg",
      "sub": "7B7068D05DC2D9B10A495C44@techacct.adobe.com",
      "https://ims-na1.adobelogin.com/s/ent_marketing_sdk": true,
      "aud": "https://ims-na1.adobelogin.com/c/494b6fab8bac492da41e3eea4332e447"
  }
}*/
async function getMyToken() {
  const config = {
    callback_url: "https://ims-na1.adobelogin.com/ims/exchange/jwt/",
    client_id: "494b6fab8bac492da41e3eea4332e447",
    client_secret: "f580e0d0-91d4-45f0-aa64-3665407363af",
    scope: "openid"
  };
  context.set("example", config, true);
  context.current = "example";

  const token = getToken();
  const tokenDecoded = getTokenData(token);
  return token;
}

exports.main = main;
