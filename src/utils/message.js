import Vue from 'vue'

const success = (msg) => {
  Vue.prototype.$notify({
    title: '成功',
    message: msg,
    type: 'success'
  });
}

const warning = (msg) => {
  Vue.prototype.$notify({
    title: '警告',
    message: msg,
    type: 'warning'
  });
}

const info = (msg) => {
  Vue.prototype.$notify.info({
    title: '信息',
    message: msg
  });
}

const error = (msg) => {
  Vue.prototype.$notify.error({
    title: '错误',
    message: msg
  })
}

const tip = (msg) => {
  Vue.prototype.$message({
    showClose: true,
    message: msg,
    type: 'warning'
  });
}

const confirm = (msg) => {
  return Vue.prototype.$confirm(msg, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  });
}

export default {
  success,
  warning,
  info,
  error,
  tip,
  confirm
}