import axios from 'axios'; 

const instance = axios.create({
  baseURL : process.env.REACT_APP_SERVER_HOST,
})

instance.interceptors.request.use(
  function (config){
    config.headers.Authorization= process.env.REACT_APP_SERVER_KEY
    return config
  },
)
export default instance;

