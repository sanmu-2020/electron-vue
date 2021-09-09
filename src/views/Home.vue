<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
  <el-button type="primary" @click="sendMessageToElectron">发送消息</el-button>
</template>

<script>
// @ is an alias to /src
import { ipcRenderer } from 'electron'
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  created () {
    console.log(this.$api)
  },
  mounted () {
    ipcRenderer.on('new-file', (e, data)=>{
      console.log('event\n ', e)
      console.log('data\n ', data)
      alert('渲染进程接受了消息')
    })
  },
  methods: {
    sendMessageToElectron () {
      ipcRenderer.send('isReady', {isReady:'HomeReady'})
      ipcRenderer.on('isReadyReply', (ev, res)=>{
        console.log('isReady', res)
      })
    }
  }
}
</script>
