export const api_url = 'http://localhost:3001'

export const fetchAPI = async (url: string, body: any = null, headers={}, method: string = "POST") => {
    try{
        var payload =  {
            method: method,
            headers: {
                    ...headers,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
            },
            body: ''
        }

        if (method === 'POST'){
            payload = {...payload, body: JSON.stringify(body)}
        }

        var res = await fetch(api_url + url, payload)
        
        var data = await res.json();

        return {status: res.status, body: data}
    }
    catch(error: any){
        return {status: 'Error', body: {'message': error.message}}
    }
}

export const auth_get = async (url: string, body: any = null, headers={},) => {
    return await fetchAPI(url, body, headers, "GET");
}
export const auth_post = async (url: string, body: any = null, headers={}) => {
    return await fetchAPI(url, body, headers, "POST");
}

export const auth_delete = async (url: string, body: any = null, headers={}) => {
    return await fetchAPI(url, body, headers, "DELETE");
}