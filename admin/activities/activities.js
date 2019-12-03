const openwhisk = require("openwhisk");
const AXIOS = require("axios");
const CONFIG = require(`${__dirname}/config.json`);


let options = {};

function main(args) {
    if(process.env.TESTING)
        options = {
            api_key: '50b51893-e7fb-43f1-b518-93e7fb33f103:6eqtExXsBwOiukD7EQcWdxtekW7s05yBk2tOXQxxkumvyceZIbSQ4NXaVPIfL8As',
            apihost: 'https://runtime.adobe.io'
        };
    //return deleteActivity(args);
    return getActivities();
    //return updateActivity(args);
    
}

function getToken() {  
    return openwhisk(options).actions.invoke({ 
        name: 'target_lab/token', 
        result: true, 
        blocking: true, 
    });
}

function createActivity(args) {
    return new Promise((resolve, reject) => {
        getToken().then(token => { 
            let config = {
                headers: {
                    'Authorization': `Bearer ${token.access_token}`,
                    'X-Api-Key': CONFIG.client_id,
                    'Content-Type': 'application/vnd.adobe.target.v3+json',
                    'cache-control': 'no-cache'
                }
            };

            let url = `https://mc.adobe.io/${CONFIG.tenant}/target/activities/xt/${args.id}`;
            AXIOS.put(url, {
                state: 'deleted',
                name: 'zipcode-campaign_author'
            }, config)
                .then((res) => { resolve(res.data); })
                .catch((err) => { reject(err); });

        });
    }).then((json) => {
        return {
            statusCode: 200,
            body: json
        };
    }).catch(err => {return err.message});
}



exports.main = main;

