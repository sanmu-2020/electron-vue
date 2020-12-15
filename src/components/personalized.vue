<template>
  <div >
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <img :src="require(`../assets/demo/${item}.png`)" class="ui-carousel-img"/>
      </el-carousel-item>
    </el-carousel>
    
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
  .ui-carousel-img{
    width: 100%;
    height: 200px;
  }
</style>