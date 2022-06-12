<template>
  <el-container>
    <el-header>
      <app-header></app-header>
    </el-header>
    <el-main>
      <app-main></app-main>
    </el-main>
    <!-- <el-footer>
      <app-footer></app-footer>
    </el-footer> -->
    <!-- <el-dialog
      title="登录"
      width="400px"
      :visible="loginDialogVisible"
      @open="onOpen"
      @close="onClose"
      :close-on-click-modal="false"
      :modal-append-to-body="false"
    >
      <login />
    </el-dialog> -->
  </el-container>
</template>

<script>
import AppHeader from './Header'
import AppFooter from './Footer'
import AppMain from './Main'

//import Login from "@/views/login/Index.vue";
import { mapState } from "vuex";
import store from '@/store'

export default {
  name: 'Layout',
  components: {
    AppHeader,
    AppFooter,
    AppMain,
  },
  methods: {
    onOpen() {
      store.commit('SET_LOGIN_DIALOG_VISIBLE', true)
    },
    onClose() {
      store.commit('SET_LOGIN_DIALOG_VISIBLE', false)
    }
  },
  computed: {
    ...mapState({
      loginDialogVisible: 'loginDialogVisible'
    })
  }
}
</script>
