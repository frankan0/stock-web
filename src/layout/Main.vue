<template>
  <div class="app-main">
    <el-row type="flex" justify="center">
      <el-col :lg="24" :xl="16">
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'AppMain',
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  margin-top: 60px;
}
</style>
