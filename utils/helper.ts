import axios, { AxiosRequestConfig } from 'axios';

function createAxiosInstance(config: AxiosRequestConfig){
    return axios.create({...config});
}
export async function makeRequest(config: AxiosRequestConfig){
    return await createAxiosInstance({...config}).request({
        method:config.method,
        url: config.url
      });
}