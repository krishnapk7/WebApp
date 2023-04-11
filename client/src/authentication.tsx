import axios from 'axios';

export const api_url = 'http://localhost:3001'

export const axiosAPI = async (url: string, data: any = null, headers={}, method: string = "POST") => {
    try{
        var payload =  {
            method: method,
            url: api_url + url,
            headers: {
                    ...headers,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
            },
            data: data
        }

        var res = axios(payload);
        
        var data = (await res).data

        return {status: (await res).status, body: data}
    }
    catch(error: any){
        return {status: 'Error', body: error.response.data.error}
    }
}

export const auth_get = async (url: string, data: any = null, headers={},) => {
    return await axiosAPI(url, data, headers, "GET");
}
export const auth_post = async (url: string, data: any = null, headers={}) => {
    return await axiosAPI(url, data, headers, "POST");
}

export const auth_delete = async (url: string, data: any = null, headers={}) => {
    return await axiosAPI(url, data, headers, "DELETE");
}