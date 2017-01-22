// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import VueFire from 'vuefire'
import App from './App'
import Activation from './components/Activation'
import Authentication from './components/Authentication'
import Setup from './components/Setup'
import Register from './components/Register'
import NotFound from './components/NotFound'

/* eslint-disable no-new */
Vue.use(VueMaterial)
Vue.use(VueFire)

const routes = {
  '/': App,
  '/register': Register,
  '/setup': Setup,
  '/Activation': Activation,
  '/authentication': Authentication
}

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App,
    Register,
    Setup,
    Activation,
    Authentication,
    NotFound
  },
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
