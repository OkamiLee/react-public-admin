import Axios from 'axios';
import qs from 'qs';
import {createBrowserHistory} from 'history'
const history = createBrowserHistory();
//Axios.defaults.baseURL = '/api';
const axios = Axios.create();
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.interceptors.request.use((config) => {
  if (!config.data){
   // history.push('/login')
  }
  /*if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }*/
  const token = sessionStorage.getItem('token');
  if (token) { //判断token是否存在
    config.headers.token = token;  //将token设置成请求头
  }
  return config;
});
// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    // Do something with response data
    let data = response.data;
    response.data = data.data;

    return response;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);
export default axios;
