// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//引入less
import less from "less"
Vue.use(less)

import "./js/test"

import InputText from './components/input-text'
Vue.use(InputText)

import "./js/prototype"


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
