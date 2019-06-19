import axios from "axios"
import qs from 'qs'
import { Message, Loading } from "element-ui"

let baseUrl: string
const env: string = process.env.NODE_ENV

if (env === "development") {
    baseUrl = `http://192.168.10.95:8013`
} else {
    baseUrl = ''
}

const http = (url: string, data: object, type: string = "post", host: string = baseUrl) => {
    return new Promise((resolve: any, reject: any) => {
        const reqData: object = {
            method: type,
            url: host + url,
            timeout: 10000,
            data,
            paramsSerializer: (params: object) => {
                return qs.stringify(params, { indices: false })
            },
            headers: { 'X-Custom-Header': 'foobar' }
        }
        axios(reqData).then(
            (response: object) => {
                resolve(response)
            },
            (error: object) => {
                Message.error('请求失败，请查看控制台提示');
                resolve(error)
            }
        ).catch((error: object) => {
            reject(error)
        });
    });
}

export default http
