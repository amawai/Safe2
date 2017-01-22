// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import VueFire from 'vuefire'
import App from './App'

/* eslint-disable no-new */
Vue.use(VueMaterial)
Vue.use(VueFire)

new Vue({
  el: '#app',
  components: {
    App
  },
  data () {
    return { }
  },
  computed: {
    ViewComponent () {
      return App
    }
  },
  render (h) { return h(this.ViewComponent) }
})
