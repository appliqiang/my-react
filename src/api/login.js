import request from '../utils/request'
import qs from "qs";
export function login(params) {
  return request({
    url: 'index.php?r=doctor/doctor/login',
    method: 'post',
    data:qs.stringify({
        log_name: 15255575890,
        pwd: 123456,
        token: 1234,
        add_info: '',
        language: 1
    })
  })
}