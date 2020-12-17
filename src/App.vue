<template>
  <div id="app">
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
    <el-footer class="ui-footer">
      <el-row class="ui-play-area">
        <el-col :span="6" class="ui-footer-item">
          <img src="./assets/demo/g-4.png" class="ui-footer-img" />
          <p>
            <span>国王与乞丐</span>
            <span>华晨宇/杨宗纬</span>
          </p>
          <span class="ui-footer-favorite">
            <i 
              :class="[isFavorite ? 'et-icon-yizhuifan ui-text-red' : 'et-icon-guanzhu']" 
              @click="switchFavorite"
            />
          </span>
        </el-col>
        <el-col :span="12">
          <div class="ui-switch-box">
            <i class="et-icon-suijibofang"></i>
            <i class="et-icon-shangyishou ui-fz-26"></i>
            <i class="et-icon-bofang ui-fz-28"></i>
            <i class="et-icon-xiayishou ui-fz-26"></i>
            <i class="et-icon-geciweidianji"></i>
          </div>
          <div class="ui-play-box">
            <span>{{startTime}}</span>
            <el-slider 
              v-model="sliderVal" 
              :show-tooltip="false" 
              :max="maxSlider"
              class="ui-slider-box"
              @input="switchSlider" 
            />
            <span>{{endTime}}</span>
          </div>
        </el-col>
        <el-col :span="6" class="ui-switch-box ui-switch-sound">
          <span class="ui-hd-text">标准</span>
          <i class="et-icon-shengyin" />
          <el-slider 
            v-model="soundVal" 
            :show-tooltip="false" 
            :max="100"
            class="ui-slider-box"
          />
          <i class="et-icon-liebiao" />
        </el-col>
      </el-row>
    </el-footer>
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
      activeIndex: 'discovrMusic',
      isFavorite: false,
      maxSlider: 210,
      sliderVal: 0,
      soundVal: 30
    };
  },
  computed: {
    startTime () {
      let start = '00:00'
      let min = parseInt(this.sliderVal / 60)
      let sec = this.sliderVal % 60
      min = min > 9 ? min : '0' + min
      sec = sec > 9 ? sec : '0' + sec
      start = min + ':' + sec
      return start
    },
    endTime () {
      let min = parseInt(this.maxSlider / 60)
      let sec = this.maxSlider % 60
      return min+ ':' + sec
    }
  },
  created () {
    setTitleBarStyle()
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    selectMenu(key, keyPath) {
      console.log(key, keyPath)
      this.activeIndex = key
    },
    switchFavorite () {
      const isFavorite = this.isFavorite
      this.isFavorite = !isFavorite
    },
    switchSlider (slider) {
      console.log(slider)
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
  position: relative;
  overflow: hidden;
}
.ui-container{
  height: 100%;
  padding: 0 0 75px;
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
.ui-footer{
  position: absolute;
  height: 75px !important;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f7f8f9;
  z-index: 20;
  padding: 0 !important;
  .ui-footer-img{
    height: 50px;
    width: 50px;
    display: flex;
    flex: 0 0 50px;
  }
  .ui-footer-favorite{
    height: 60px;
    width: 30px;
    flex: 0 0 30px;
    align-items: flex-start;
    justify-content: center;
    > i{
      font-size: 22px;
      cursor: pointer;
    }
  }
  .ui-footer-item{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    > p{
      padding: 0;
      height: 60px;
      margin: 0 0 0 15px;
      flex: 1 1 auto;
      font-size: 14px;
      text-align: left;
      overflow: hidden;
      > span{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        height: 30px;
        line-height: 30px;
        display: block;
        font-size: 16px;
      }
       > span:last-child{
         font-size: 14px;
       }
    }
  }
  .ui-play-area{
    height: 75px;
    border-top: 1px solid #dcdfe6;
    padding: 0 15px;
    .ui-switch-sound {
      align-self: center;
      .ui-hd-text{
        display: inline-block;
        font-size: 12px;
        height: 14px;
        line-height: 14px;
        color: #303030;
        border: 1px solid #303030;
      }
    }
    .ui-switch-box{
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      > i{
        font-size: 20px;
        cursor: pointer;
        margin-left: 25px;
      }
    }
    .ui-play-box{
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      > span {
        width: 50px;
        flex: 0 0 50px;
        font-size: 12px;
        text-align: center;
      }

    }
    .ui-slider-box{
      flex: 1 1 auto;
      .el-slider__button{
        width: 10px;
        height: 10px;
        border: solid 1px #409eff;
      }
    }
  }
}
</style>
