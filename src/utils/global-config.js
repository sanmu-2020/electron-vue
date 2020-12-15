import api from '../api'
export default function plugin (Vue) {
  Vue.config.globalProperties.$api = api
}
