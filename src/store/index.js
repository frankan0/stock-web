import Vue from 'vue'
import Vuex from 'vuex'
//import { setToken, getToken, removeToken } from '@/utils/auth'
//import { login, getInfo } from '@/api/user'

Vue.use(Vuex)

const getDefaultState = () => {
  return {
    token: '',
    user: undefined,
  }
}

export default new Vuex.Store({
  state: getDefaultState(),
  // getters: {
  //   user: state => {
  //     return state.user ? state.user : JSON.parse(sessionStorage.getItem('user'))
  //   },
  //   token: state => {
  //     return state.token ? state.token : getToken()
  //   }
  // },
  mutations: {
    RESET_STATE: (state) => {
      //Object.assign(state, getDefaultState())
      //removeToken()
      //sessionStorage.removeItem('user')
    },
    SET_TOKEN: (state, token) => {
      //state.token = token
      //setToken(token)
    },
    SET_USER: (state, user) => {
      //state.user = user
      //sessionStorage.setItem('user', JSON.stringify(user))
    },
  },
  actions: {
    // login({ commit }, data) {
    //   return new Promise((resolve, reject) => {
    //     login(data).then(response => {
    //       const { data } = response
    //       commit('SET_TOKEN', data.token)
    //       commit('SET_USER', data)
    //       resolve(data)
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },
    // // get user info
    // getInfo({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     getInfo(state.token).then(response => {
    //       commit('SET_USER', response.data)
    //       resolve(response.data)
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },
    
    // // remove token
    // reset({ commit }) {
    //   return new Promise(resolve => {
    //     commit('RESET_STATE')
    //     resolve()
    //   })
    // }
  },
  modules: {
  }
})
