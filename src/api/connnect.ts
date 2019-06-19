import http from "@/util/http"

let baseUrl: string
const env: string = process.env.NODE_ENV

if (env === "development") {
    baseUrl = `https://ptoken-test.lonsid.co`
} else {
    baseUrl = ''
}

export const token = (data: object) => http({method: "POST", url: baseUrl + "/connect/token", data})
