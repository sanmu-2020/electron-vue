<template>
  <div id="app">
    <!-- <el-container  class="ui-container"> -->
      <!-- <el-header>Header</el-header> -->
    <el-container class="ui-container">
      <el-aside width="200px" class="ui-aside-left">
        <el-menu class="ui-menu-left"  :default-active="activeIndex" :router="true" @select="selectMenu">
          <el-menu-item index="discovrMusic" >
            <router-link to="/discovrMusic" class="ui-router-item">发现音乐</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
            <router-link to="/about" class="ui-router-item">视频</router-link>
          </el-menu-item>
          <el-menu-item index="1-3">
            <router-link to="/" class="ui-router-item">朋友</router-link>
          </el-menu-item>
          <li class="ui-menu-text">我的音乐</li> 
          <el-menu-item index="1-4">
            <router-link to="/" class="ui-router-item"><i class="el-icon-headset"></i>本地音乐</router-link>
          </el-menu-item>
          <el-menu-item index="1-5">
            <router-link to="/" class="ui-router-item"><i class="el-icon-download"></i>下载音乐</router-link>
          </el-menu-item>
          <!-- <el-submenu index="1"> -->
            <!-- <template #title><router-link to="/about">发现音乐</template> -->
            <!-- <el-menu-item index="1-1">
              <router-link to="/"><i class="el-icon-message"></i>Go to Foo</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="/about">Go to Bar</router-link>
            </el-menu-item> -->
          <!-- </el-submenu> -->
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <!-- </el-container> -->
  </div>
</template>

<script>
// import { ipcRenderer } from 'electron'
import setTitleBarStyle from './electron/preload'
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      activeIndex: 'discovrMusic'
    };
  },
  beforeCreate () {
    setTitleBarStyle()
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    selectMenu(key, keyPath) {
      console.log(key, keyPath)
      this.activeIndex = key
    }
  }

}
</script>

<style lang='scss'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  // margin-top: 60px;
}
.ui-container{
  height: 100%;
}
.ui-router-item{
  text-decoration: none;
  color: #333;
  font-size: 16px;
}
.ui-aside-left{
  height: 100%;
  .ui-menu-left{
    height: 100%;
  }
}
.ui-menu-text{
  color: #666;
  font-size: 12px;
  padding: 15px 0;
}
</style>
