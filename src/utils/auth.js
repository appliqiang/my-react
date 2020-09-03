import Cookies from 'js-cookie'




export function getToken(key) {
  return Cookies.get(key)
}

export function setToken(key,val) {
  return Cookies.set(key, val)
}

export function removeToken(key) {
  return Cookies.remove(key)
}

