export const api_url = 'http://localhost:3001'

export const fetchAPI = async (url, body=null, headers={}, method = "POST") => {
    try{
        var payload =  {
            method: method,
            headers: {
                    ...headers,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
            }
        }

        if (method == 'POST'){
            payload = {...payload, body: JSON.stringify(body)}
        }

        var res = await fetch(api_url + url, payload)
        
        var data = await res.json();

        return {status: res.status, body: data}
    }
    catch(error){
        return {status: 'Error', body: {'message': error.message}}
    }
}

export const auth_get = async (url, body=null, headers={},) => {
    return await fetchAPI(url, body, headers, "GET");
}
export const auth_post = async (url, body=null, headers={}) => {
    return await fetchAPI(url, body, headers, "POST");
}

export const auth_delete = async (url, body=null, headers={}) => {
    return await fetchAPI(url, body, headers, "DELETE");
}