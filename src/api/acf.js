import { request } from './request'

class ACFAPI {
    constructor() {
        this.route = '/wp-json/acf/v3'
        this.getFieldByPageId = this.getFieldByPageId.bind(this)
    }
    getFieldByPageId(id=6, query={}) {
        const url = this.route + `/pages/${id}`

        const config = {
            method: 'GET',
			query: query
        }

        return request(url, config)
    }

    getPosts(query={}) {
        const url = this.route + `/posts`
        const config = {
            method: 'GET',
			query: query
        }
        return request(url, config)
    }

}

const ACFApi = new ACFAPI()

export default ACFApi