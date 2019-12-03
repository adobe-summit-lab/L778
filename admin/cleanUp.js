const openwhisk = require("openwhisk");
const AXIOS = require("axios");
const CONFIG = require(`${__dirname}/config.json`);

let options = {
    api_key: '50b51893-e7fb-43f1-b518-93e7fb33f103:6eqtExXsBwOiukD7EQcWdxtekW7s05yBk2tOXQxxkumvyceZIbSQ4NXaVPIfL8As',
    apihost: 'https://runtime.adobe.io'
};

function getToken() {  
    return openwhisk(options).actions.invoke({ 
        name: 'target_lab/token', 
        result: true, 
        blocking: true, 
    });
}

function listOffers(args) {
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

            let url = `https://mc.adobe.io/${CONFIG.tenant}/target/offers`;
            AXIOS.get(url, config)
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

function deleteOffer(args) {

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

            let url = `https://mc.adobe.io/${CONFIG.tenant}/target/offers/content/${args.id}`;
            AXIOS.delete(url, config).then((res) => { resolve(res.data); })
            .catch((err) => { reject(err); });
        });
    }).then((json) => {
        return {
            statusCode: 200,
            body: json
        };
    }).catch(err => {return err.message});
}

function deleteActivity(args) {

    return new Promise((resolve, reject) => {
        getToken().then(token => { 
            let config = {
                headers: {
                    'Authorization': `Bearer ${token.access_token}`,
                    'X-Api-Key': CONFIG.client_id,
                    'Accept': 'application/vnd.adobe.target.v3+json'
                }
            };

            let url = `https://mc.adobe.io/${CONFIG.tenant}/target/activities/ab/${args.id}`;
            AXIOS.delete(url, config).then((res) => { resolve(res.data); });

        });
    }).then((json) => {
        return {
            statusCode: 200,
            body: json
        };
    }).catch(err => {return err.message});
}

function updateActivity(args) {

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

function getActivities() {
    return new Promise((resolve, reject) => {
        getToken().then(token => { 
            let config = {
                headers: {
                    'Authorization': `Bearer ${token.access_token}`,
                    'X-Api-Key': CONFIG.client_id,
                    'Accept': 'application/vnd.adobe.target.v3+json'
                }
            };

            let url = `https://mc.adobe.io/${CONFIG.tenant}/target/activities`;
            AXIOS.get(url, config).then((res) => { resolve(res.data.activities); });

        });
    }).then((json) => {
        return {
            statusCode: 200,
            body: json
        };
    });
}

var ids = [];
listOffers().then(res => {
    ids = res.body.offers.map(element => element.id);
    console.log(ids.length);
    ids.forEach(e => deleteOffer({id:e}).then(res => console.log(res)));
});



//deleteOffer({id:127322}).then(res => console.log(res));

//https://mc.adobe.io/<your-tenant-name>/target/offers/content/438180 

