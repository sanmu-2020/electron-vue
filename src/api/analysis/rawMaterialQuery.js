import Api from '../axios'

const prefix = '/inspection/services/analyze'

export default {

  /* 原材收发存分析 */
  rawMaterialQuery (obj) {
    return Api.post(prefix + '/raw-material/query', obj)
  },
  queryMaterialPerday (obj) {
    return Api.post(prefix + '/raw-material/query-material-perday', obj)
  },
  queryMaterialList (obj) {
    return Api.post(prefix + '/raw-material/query-material', obj)
  },
  export2Excel (url) {
    return Api.downloadUrl(url)
  },
  queryWarehouse (obj) {
    return Api.get(prefix + '/raw-material/query-warehouse', obj)
  }
  // changeTheme (obj) {
  //   return Api.get(prefix + '/changeTheme', obj)
  // }
}
