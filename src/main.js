import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import globalConfig from './utils/global-config'
import installElementPlus from './plugins/element.js'

const app = createApp(App)
installElementPlus(app)
app.use(router).use(store).use(globalConfig).mount('#app')
