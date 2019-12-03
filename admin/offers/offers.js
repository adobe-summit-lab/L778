const openwhisk = require("openwhisk");
const axios = require("axios");
const CONFIG = require(`${__dirname}/config.json`);

function main(args) {
    let options = {
        api_key: '50b51893-e7fb-43f1-b518-93e7fb33f103:6eqtExXsBwOiukD7EQcWdxtekW7s05yBk2tOXQxxkumvyceZIbSQ4NXaVPIfL8As',
        apihost: 'https://runtime.adobe.io'
    };
    let ow = openwhisk(options);

    return createOffer({
        token: ow.actions.invoke({
            name: 'target_lab/token',
            result: true,
            blocking: true,
        })
    })
}

function _makeRequest(args) {
    return new Promise((resolve, reject) => {
        args.token.then(token => {
            args.config.headers.Authorization = `Bearer ${token.access_token}`;
            args.axios[args.method]("content", args.content, args.config)
                .then((res) => { resolve(res.data); })
                .catch((err) => { reject(err); });

        });
    }).then((json) => {
        return {
            statusCode: 200,
            body: json
        };
    }).catch(err => { return err.message });
}

function createOffer(args) {

    args.config = {
        headers : {
        'X-Api-Key': CONFIG.client_id,
        'Content-Type': 'application/vnd.adobe.target.v2+json',
        'cache-control': 'no-cache'
    }};
    let url = `https://mc.adobe.io/${CONFIG.tenant}/target/offers/`;
    args.axios = axios.create({baseURL:url});
    args.content = {
        name:"test",
        content:"{c:\"json offer\"}"
    };
    args.method = 'post';
    return _makeRequest(args);
}


exports.main = main;
main().then(res => console.log(res));


//https://mc.adobe.io/<your-tenant-name>/target/offers/content