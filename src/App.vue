<template>
  <div>
    <md-tabs md-fixed>
      <md-tab id="Register" md-label="Register" :md-active="isRegister" >
        <register></register>
      </md-tab>
      <md-tab id="Setup" md-label="Setup" :md-active="isSetup">
        <setup></setup>
      </md-tab>
      <md-tab id="Activation" md-label="Activation" :md-active="isActivation">
        <activation></activation>
      </md-tab>
      <md-tab id="Authentication" md-label="Authentication" :md-active="isAuthentication">
        <authentication />
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import Register from './components/Register'
import Setup from './components/Setup'
import Activation from './components/Activation'
import Authentication from './components/Authentication'
export default {
  name: 'app',
  components: {
    Register,
    Setup,
    Activation,
    Authentication
  },
  data () {
    return {
      currentRoute: window.location.pathname
    }
  },
  computed: {
    isRegister () {
      return this.currentRoute === '/register'
    },
    isActivation () {
      return this.currentRoute === '/activation'
    },
    isAuthentication () {
      return this.currentRoute === '/authentication'
    },
    isSetup () {
      return this.currentRoute === '/setup'
    }
  }
}
</script>
<style>
  .inputForm {
    padding: 20px;
  }

</style>
