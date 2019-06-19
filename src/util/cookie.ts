import Cookies from 'js-cookie';

export const setCookie = (key: string, value: any) => {
    Cookies.set(key, value);
}

// 获取cookie中的值，传空值则去所有cookie
export const getCookie = (key: string) => {
    Cookies.get(key)
}

export const delCookie = (key: string) => {
    Cookies.remove(key);
}

export const setCookies = (data: object) => {
    for (const key of Object.keys(data)) {
        if (data.hasOwnProperty(key)) {
            Cookies.set(key, data[key]);
        }
    }
}
