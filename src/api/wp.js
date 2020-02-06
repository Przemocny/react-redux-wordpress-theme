import { request } from './request'
class WPAPI {
    constructor() {
        this.route = '/wp-json/wp/v2'
        this.getPages = this.getPages.bind(this)
        this.getPosts = this.getPosts.bind(this)
    }
    getMenu(lang='pl', query={}) {
        const url = `/wp-json/menus/v1/menus/main-${lang}`
        const config = {
            method: 'GET',
			query: query
        }
        return request(url, config)
    }
    getPages(query={}) {
        const url = this.route + `/pages`
        query['_fields'] = ['id','slug','title','acf']

        const config = {
            method: 'GET',
			query: query
        }
        return request(url, config)
    }
    getPosts(query={}) {
        const url = this.route + `/posts`
        query['_fields'] = ['id','slug','date', 'slug','title']

        const config = {
            method: 'GET',
			query: query
        }
        return request(url, config)
    }

    sendMail(email,reason, query={}){
        const url = "/wp-json/contact-form-7/v1/contact-forms/5/feedback"

        const data = new FormData()
        data.append('email', email)
        data.append('reason', reason)
        


        const config = {
            method: 'POST',
            query: query,
            multipart:true,
            data
        }
        return request(url, config)
    }

}

const WPApi = new WPAPI()

export default WPApi

