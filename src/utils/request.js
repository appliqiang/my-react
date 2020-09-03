import axios from 'axios'
// import store from '@/store'
import { getToken } from '../utils/auth'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = 'http://test.ifacesmile.com:8080/ifaces/';

const service = axios.create({
  // baseURL: 'http://127.0.0.1:9090/', 
  // withCredentials: true,
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(
  config => {
    if(  config.url.indexOf('/getScanCode')  >-1  ){
        // console.log('login no add token')
    }else {
      config.headers['Authorization'] = 'Bearer ' + getToken('token');
    };
    return config;
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code === 0) {
      return res;
    } else if(res.code === 401){
    //   Message({
    //     message: res.msg || 'Error',
    //     type: 'error',
    //     duration: 5 * 1000
    //   });
      return res;
    }else if(res.code === 403){
    //   Message({
    //     message: res.msg || 'Error',
    //     type: 'error',
    //     duration: 5 * 1000
    //   });
      return res;
    } else{
      return Promise.reject('error');
    };
    // return response;
    
  },
  error => {
    return Promise.reject(error)
  })


export default service




