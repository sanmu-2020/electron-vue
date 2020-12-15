<template>
  <div class="ui-personalized-title">
    <el-link href="/" class="ui-perl-title" :underline="false">
      <span>推荐歌单</span>
      <i class="el-icon-arrow-right el-icon--right"></i>
    </el-link>
    <ul class="ui-recommend-playlist">
      <li v-for="img in 10" :key="img">
        <img :src="require(`../assets/demo/g-${img}.png`)" />
        <p v-if="img===1" class="ui-playlist-title">每日新歌速递</p>
        <p v-else class="ui-playlist-title" >戴上耳机，出车祸|别找我{{img}}</p>
      </li>
    </ul>
    <el-link href="/" class="ui-perl-title" :underline="false">
      <span>独家放送</span>
      <i class="el-icon-arrow-right el-icon--right"></i>
    </el-link>
    <ul class="ui-recommend-playlist">
      <li v-for="img in 3" :key="img" class="ui-exclusive-play">
        <img :src="require(`../assets/demo/d-${img}.png`)" />
        <p class="ui-playlist-title" >校园歌曲比赛，陈奕迅我是树上一只懒懒豹</p>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import { ipcRenderer } from 'electron'
// import personalized from '@/components/personalized.vue'
export default {
  name: 'Personalized',
  components: {
  },
  data() {
    return {
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    
  }
}
</script>
<style lang="scss" scoped>
  .ui-personalized-title{
    width: 100%;
    text-align: left;
    .ui-perl-title{
      height: 44px;
      width: 100%;
      display: block;
      line-height: 2;
      font-size: 22px;
      color: #000;
    }
  }
  .ui-recommend-playlist{
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    li{
      width: 18%;
      margin: 0 1% 20px;
      overflow: hidden;
      cursor: pointer;
      img{
        width: 100%;
        height: 140px;
        display: block;
      }
      .ui-playlist-title{
        line-height: 1.5;
        font-size: 14px;
        margin: 0;
      }
    }
    .ui-exclusive-play{
       width: 31.2%;
    }
  }
</style>