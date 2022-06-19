<template>
  <div class="app-header">
    <el-row type="flex" justify="center" class="hidden-xs-only">
      <el-col :lg="24" :xl="16">
        <el-row type="flex" justify="space-around">
          <el-col :span="6">
            <span style="margin-left:20px;font-size:20px;font-weight:700;">股票监控</span>
            <!-- <img src="@/assets/logo.png" class="logo"> -->
          </el-col>
          <el-col :span="14">
            <el-menu
              class="app-nav"
              :default-active="activeIndex"
              mode="horizontal"
              router>
              <el-menu-item index="/">首页</el-menu-item>
              <el-menu-item index="/monitor/volume">监控</el-menu-item>
              <el-menu-item index="/stock/my">自选</el-menu-item>
            </el-menu>
          </el-col>
         
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'AppHeader',
  data() {
    return {
      activeIndex: this.$route.fullPath,
      menuOpen: false
    }
  },
  methods: {
    
  },
  computed: {
   
  }
}
</script>

<style lang="scss">

</style>
