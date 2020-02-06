import axios from 'axios';
import querystring from 'query-string'
import {WP_URL} from '../global/config'
const DEBUG = true;

const instance = axios.create({
    baseURL: WP_URL,
    timeout: 1000 * 60,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    validateStatus: function (status) {
        const good = [200, 400]
        return good.includes(status)
      },
})

const logger = (data, url) => {
    DEBUG && console.log(url, `\n\t status: ${data.status}`, `\n\t payload: `, data.data)
    return data.data
}

export const request = (_url, _config = {}) => {
    DEBUG && console.log(_url, 'config', _config);
    let req = {
        url: _url,
        ..._config
    }
    if (!req.headers) {
        req.headers = {}
    }
    if (_config.multipart) {
        req.headers['content-type'] = 'multipart/form-data'
    }
     

    if (_config.query && Object.keys(_config.query).length !== 0) {
        req.url += '?' + querystring.stringify(_config.query, {arrayFormat: 'bracket'})
    }

    return instance
        .request(req)
        .then((data) => {
            return logger(data, _url);
        })
        .catch((err)=>{
            return { msg:'error', err: err.response }
        })
}