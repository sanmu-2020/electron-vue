<template>
  <div >
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="个性推荐" name="personalized-recommendation">
        <gys-personalized />
        <gys-personalized-middle />
      </el-tab-pane>
      <el-tab-pane label="歌单" name="playlist">
        <gys-playlist />
      </el-tab-pane>
      <el-tab-pane label="排行榜" name="KTV">
        <gys-top />
      </el-tab-pane>
      <el-tab-pane label="歌手" name=" singer">歌手</el-tab-pane>
    </el-tabs>
  </div>
    
</template>

<script>
// @ is an alias to /src
// import { ipcRenderer } from 'electron'
import personalized from '@/components/personalized.vue'
import personalizedMiddle from '@/components/personalized-middle.vue'
import playList from '@/components/playList.vue'
import topList from '@/components/topList.vue'
export default {
  name: 'DiscovrMusic',
  components: {
    'gys-personalized': personalized,
    'gys-personalized-middle': personalizedMiddle,
    'gys-playlist': playList,
    'gys-top': topList
  },
  data() {
    return {
      activeName: 'personalized-recommendation'
    };
  },
  created () {
    console.log(this.$api)
  },
  mounted () {
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>
<style lang="scss" scoped>
  .ui-carousel-img{
    width: 100%;
    height: 200px;
  }
</style>