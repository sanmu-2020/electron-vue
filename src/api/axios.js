import Axios from 'axios'
import QS from 'querystring'
import Call from './call'
import router from '../router/index'
import { ElMessage } from 'element-plus'

// TODO baseURL
const AUTH_TOKEN = ''

Axios.defaults.baseURL = process.env.BASE_URL
Axios.defaults.headers.common['token'] = AUTH_TOKEN

Axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// Axios.defaults.headers.post['Accept'] = '*/*'

// TODO 设置超时时间
Axios.defaults.timeout = 20000

// TODO http code 校验
Axios.defaults.validateStatus = function (status) {
  return status
}

// TODO GET 请求 params 序列化
Axios.defaults.paramsSerializer = function (params) {
  // 将对象解析成URL的形式
  return QS.stringify(params)
}

// TODO 设置POST等请求 body 序列化
// Axios.defaults.transformRequest = [function (body) {
//   let data = body || {}
//   if (data instanceof window.FormData) {
//     return data
//   }
//   return QS.stringify(data)
// }]

// request拦截器
Axios.interceptors.request.use(config => {
  config.headers.token = ''
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})

// TODO 设置统一请求拦截
// eslint-disable-next-line complexity
Axios.interceptors.response.use(res => {
  if (res.headers.token) {
    // localStorage.setItem('token', res.headers.token)
  }

  if (res.status === 200) {
    // 会话过期  当前会话已过期，请重新访问。
    //
    // 423代表权限不允许，继没有传token
    // 403代表token异常，即token过期
    // -1代表内部异常
    if (res.data.code && res.data.code === 403) {
      // localStorage.setItem('token', '')
      document.getElementById('body').className = 'theme-white'

      router.replace({
        path: '/login',
        // query: {redirect: router.currentRoute.fullPath}
        query: { redirect: router.currentRoute.path }

      })
    } else if ((res.data.code && res.data.code !== 200) || !res.data.success) {
      // alert(res.data.msg)
      ElMessage({
        type: 'error',
        ElMessage: res.data.msg
      })
    }
    return Promise.resolve(res.data)
  } else if (res.status === 401) {
    router.replace({
      path: '/login',
      // query: {redirect: router.currentRoute.fullPath}
      query: { redirect: router.currentRoute.path }

    })
  }
  return Promise.reject(res.data)
}, error => {
  return Promise.reject(error)
})

/**
 * @description 统一 GET 请求
 * @param url
 * @param params --> GET 请求参数（***?name=walid&age=25）
 */
function get (url, params = {}) {
  return new Call((resolve, reject) => {
    const timestamp = (new Date()).valueOf()
    params.timestamp = timestamp
    Axios.get(url, { params: params })
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * @description 统一 POST 请求
 * @param url
 * @param body --> POST 请求 data
 */
function post (url, body) {
  return new Call((resolve, reject) => {
    Axios.post(url, body)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * @description 统一 Put 请求
 * @param url
 * @param body --> Put 请求 data
 */
function put (url, body) {
  return new Call((resolve, reject) => {
    Axios.put(url, body)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

function uploadFile (url, payload) {
  return new Call((resolve, reject) => {
    const config = {
      headers: { 'Content-Type': 'multipart/form-data' }
    }

    Axios({
      url: url,
      config: config,
      method: 'post',
      data: payload
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

/**
 * @description 统一 GET 请求
 * @param url
 * @param params --> GET 请求参数（***?name=walid&age=25）
 */
function getById (url, params) {
  return new Call((resolve, reject) => {
    const id = typeof params === 'object' ? params.id : params
    const timestamp = (new Date()).valueOf()
    const obj = typeof params === 'object' ? params : {}
    obj.timestamp = timestamp

    Axios.get(url + '/' + id, obj)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * @description 统一 put 请求
 * @param url
 * @param params --> put 请求参数
 */
function putById (url, params) {
  return new Call((resolve, reject) => {
    Axios.put(url + '/' + params.id, params)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * @description 统一 delete 请求
 * @param url
 * @param params --> delete 请求参数
 */
function deleteById (url, params) {
  const id = typeof params === 'object' ? params.id : params

  return new Call((resolve, reject) => {
    Axios.delete(url + '/' + id)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}
/**
 * @description 统一 delete 请求
 * @param url
 * @param params --> delete 请求参数
 */
function del (url, params) {
  return new Call((resolve, reject) => {
    Axios.delete(url, params)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

function downloadUrl (url) {
  return new Call((resolve) => {
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = url
    // iframe.onload = function () {
    //   resolve({ code: 200, loaded: true })
    //   document.body.removeChild(iframe)
    // }
    const timer = setInterval(function () {
      var iframeDoc = iframe.contentDocument || iframe.contentWindow.document
      if (iframeDoc.readyState === 'complete' || iframeDoc.readyState === 'interactive') {
        resolve({ code: 200, loaded: true })
        document.body.removeChild(iframe)
        clearInterval(timer)
      }
    }, 1000)
    document.body.appendChild(iframe)
  })
}
function direct (url) {
  return url
}
export default {
  get, post, put, direct, uploadFile, putById, deleteById, getById, del, downloadUrl
}
