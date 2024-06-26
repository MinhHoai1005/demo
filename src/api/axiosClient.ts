import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config: any) => {
    config.headers = {
        Authorization: '',
        Accept: 'application/json',
        ...config.headers
    }
    config.data
    return config
})

axiosClient.interceptors.response.use(res => {

    if (res.status === 200 && res.data) {
        return res.data;
    }
    throw new Error('Error')
},error=>{
    console.log(`Error api axiosClient: ${JSON.stringify(error) }`)
    throw new Error(error.response)
});
export default axiosClient;
