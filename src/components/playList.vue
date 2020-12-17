<template>
  <div class="ui-playlist">
    <el-link href="/" class="ui-playlist-banner" :underline="false">
      <img :src="require(`../assets/demo/p-banner.png`)" class="ui-playlist-banner" />
    </el-link>
    <div class="ui-playlist-classify">
      <el-button round size="small" @click="switchDlg">{{classify}}<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      <div class="ui-playlist-tag">
        <el-tag
          v-for="(item, i) in items"
          :key="item.label"
          :type="item.type"
          size="small"
          :effect="item.effect"
          @click="switchClassify(i)"
          class="ui-classify-tag"
        >
          {{ item.label }}
        </el-tag>
      </div>
    </div>
    <div v-show="isShow" class="ui-classify-box">
      <div class="ui-all-playlist">
        <el-tag
          size="small" 
          class="ui-classify-tag"
          effect="plain"
        >
          全部歌单
        </el-tag>
      </div>
      <el-row class="ui-playlist-type">
        <el-col :span="3">
          <a href="javascript:;" class="ui-classify-item">
            <i class="et-icon-diqiu01 ui-icon-item"></i>
            <span>语种</span>
          </a>
        </el-col>
        <el-col :span="21" class="ui-playlist-tag">
          <el-tag
            v-for="(item, i) in items"
            :key="item.label"
            :type="item.type"
            size="small"
            :effect="item.effect"
            @click="switchClassify(i, 'isDLG')"
            class="ui-classify-tag"
          >
            {{ item.label }}
          </el-tag>
        </el-col>
      </el-row>
    </div>
    <ul class="ui-recommend-playlist">
      <li v-for="img in 8" :key="img">
        <img :src="require(`../assets/demo/p-${img}.png`)" />
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
  name: 'Playlist',
  components: {
  },
  data() {
    return {
      items: [
        { type: '', label: '华语', effect: 'dark' },
        { type: '', label: '流行', effect: 'plain' },
        { type: '', label: '摇滚', effect: 'plain' },
        { type: '', label: '民谣', effect: 'plain' },
        { type: '', label: '电子', effect: 'plain' },
        { type: '', label: '独立', effect: 'plain' },
        { type: '', label: '轻音乐', effect: 'plain' },
        { type: '', label: '综艺', effect: 'plain' },
        { type: '', label: '影视原声', effect: 'plain' },
        { type: '', label: 'ACG', effect: 'plain' }
      ],
      isShow: false
    }
  },
  computed: {
    classify () {
      const item = this.items.find(item => item.effect === 'dark')
      return item.label
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    switchClassify (i, type) {
      let list = JSON.parse(JSON.stringify(this.items))
      list = list.map((item, j) => {
        item.effect = i===j ? 'dark' : 'plain'
        return item
      })
      this.items = list
      if (type) {
        this.switchDlg()
      }
    },
    switchDlg () {
      const isShow = this.isShow
      this.isShow = !isShow
    }
  }
}
</script>
<style lang="scss" scoped>
  .ui-playlist{
    width: 100%;
    text-align: left;
    position: relative;
    .ui-playlist-banner{
      height: 170px;
      width: 100%;
      display: block;
    }
    .ui-classify-box {
      position: absolute;
      width: 750px;
      min-height: 400px;
      background-color: #fff;
      top: 230px;
      left: 0px;
      border-top: 0;
      .ui-all-playlist{
        height: 60px;
        align-items: center;
        display: flex;
        padding: 0 15px;
        border-bottom: 1px solid #ebebeb;
      }
      .ui-classify-item{
        color: #d8d8d8;
        margin-left: 15px;
        text-decoration: none;
        width: 60px;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        align-items: center;
      }
      .ui-playlist-type{
        margin: 35px 0 0;
        .ui-classify-tag{
          margin: 0 15px 15px;
          cursor: pointer;
        }
      }
    }
    .ui-icon-item {
      font-size: 22px;
      color: #666;
    }
  }
  .ui-classify-box::before{
    content: " ";    //追加一个空
    position: absolute;    //设置定位
    top: 0;  //如果不设置可能会出现偏移
    left: 0;  
    border: 1px solid #ebebeb;    //设置边框
    width: 200%;    //设置为插入元素的两倍宽高
    height: 200%;
    transform-origin: 0 0;    //设置元素的基点为0 0
    transform: scale(0.5,0.5);    //宽高缩小一半
    box-sizing: border-box;    //设置盒模型 这一步必须要有,否则边框不会随着一起缩放
  }
  .ui-playlist-classify{
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .ui-playlist-tag{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .ui-classify-tag{
        margin: 0 5px;
        cursor: pointer;
      }
    }
  }
  .ui-recommend-playlist{
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    li{
      width: 23%;
      margin: 0 1% 20px;
      overflow: hidden;
      cursor: pointer;
      img{
        width: 100%;
        height: 160px;
        display: block;
      }
      .ui-playlist-title{
        line-height: 1.5;
        font-size: 14px;
        margin: 0;
      }
    }
  }
</style>