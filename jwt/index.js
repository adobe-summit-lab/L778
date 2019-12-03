const CONFIG = require(`${__dirname}/config.json`);
const JWT = require("jsonwebtoken");
const FS = require("fs");
const AXIOS = require("axios");


function main(args) {
    return new BearerToken(CONFIG).bearer_token;
}

class BearerToken {
    constructor(config) {
        if (!config.privateKey)
            this.privateKey = `${__dirname}/private.pem`;
        else
            this.privateKey = config.privateKey;
        this.config = config;
    }

    get jwt_token() {
        let privateKey = '';
        
        if (FS.existsSync(this.privateKey)) {
            privateKey = FS.readFileSync(this.privateKey);
        } else {
            throw `Cannot find private key file ${this.privateKey}`;
            return null;
        }

        return JWT.sign(this.config.payload, privateKey, {
            algorithm: "RS256"
        });
    }

    get bearer_token() {
        return new Promise((resolve, reject) => {
            AXIOS.post(
                `${this.config.url}?client_id=${this.config.client_id}&client_secret=${this.config.client_secret}&jwt_token=${this.jwt_token}`
            )
                .then(res => {
                    resolve(res.data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

}


exports.main = main;
