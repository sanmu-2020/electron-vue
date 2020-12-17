<template>
  <div class="ui-top-box">
    <el-link href="javascript:;" class="ui-top-title" :underline="false">
      <span>官方榜</span>
    </el-link>
    <el-row class="ui-top-list"  v-for="l in 3" :key="l">
      <el-col :span="6" class="ui-top-item">
        <img :src="require(`../assets/demo/t-${l}.png`)" class="ui-top-img"/>
      </el-col>
      <el-col :span="16">
        <ul class="ui-list-box">
          <li v-for="i in 5" :key="i">
            <span class="ui-title-item">
              <i :class="i<4?'ui-text-red': ''">{{i}}</i>
              <i>{{600-i*70}}%</i>
              <i>努力吧工作{{i*20}}</i>
            </span>
            <span class="ui-title-item">赛文&GOD</span>
          </li>
        </ul>
        <el-link href="javascript:;" class="ui-show-more" :underline="false">
          <span>查看全部</span>
          <i class="el-icon-arrow-right"></i>
        </el-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'TopList',
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
  .ui-top-box{
    width: 100%;
    text-align: left;
    .ui-top-title{
      height: 44px;
      width: 100%;
      display: block;
      line-height: 2;
      font-size: 22px;
      color: #000;
    }
    .ui-top-list{
      height: 200px;
      margin: 0 0 20px;
      .ui-top-item{
        display: flex;
        align-items: center;
        justify-content: center;
        .ui-top-img{
          width: 162px;
          height: 162px;
          border-radius: 4px;
          display: block;
        }
      }
      .ui-list-box{
        width: 100%;
        overflow: hidden;
        margin: 0;
        padding: 0;
        li{
          height: 36px;
          line-height: 36px;
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          i{
            font-style: normal;
            margin: 0 10px 0 0;
          }
          .ui-title-item{
            color: #909399;
            i:last-child{
              color: #333;
            }
          }
        }
      }
    }
    .ui-show-more{
      font-size: 14px;
      display: block;
      text-align: left;
    }
  }
</style>