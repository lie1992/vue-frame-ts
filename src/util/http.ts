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

// const http = (url: string, data: object, type: string = "post", host: string = baseUrl) => {
//     return new Promise((resolve: any, reject: any) => {
//         const reqData: object = {
//             method: type,
//             url: host + url,
//             timeout: 10000,
//             data,
//             paramsSerializer: (params: object) => {
//                 return qs.stringify(params, { indices: false })
//             },
//             headers: { 'X-Custom-Header': 'foobar' }
//         }
//         axios(reqData).then(
//             (response: object) => {
//                 resolve(response)
//             },
//             (error: object) => {
//                 Message.error('请求失败，请查看控制台提示');
//                 resolve(error)
//             }
//         ).catch((error: object) => {
//             reject(error)
//         });
//     });
// }

// export default http

/****** 创建axios实例 ******/
const service = axios.create({
    baseURL: process.env.BASE_URL,  // api的base_url
    timeout: 10000  // 请求超时时间
});

service.interceptors.request.use(config => {
    // 请求前
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    config.paramsSerializer = (params: object) => {
        return qs.stringify(params, { indices: false })
    }
    return config;
}, error => {
    // 请求错误处理   
    Message.error('请求失败，请查看控制台提示')
    Promise.reject(error)
}
);

service.interceptors.response.use(
    response => {
        // 成功请求到数据 根据项目封装        
        // if (response.data.result === 'TRUE') {            

        // } else {            
              
        // }        
        return response.data;
    },
    error => { 
        // 响应错误处理console.log('error');  
        Message.error('请求失败，请查看控制台提示')      
        return Promise.reject(error)
    }
)

export default service
