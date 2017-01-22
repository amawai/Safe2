<template>
  <div>
    <md-tabs md-fixed>
      <md-tab id="Register" md-label="Register">
        <register></register>
      </md-tab>
      <md-tab id="Setup" md-label="Setup">
        <setup></setup>
      </md-tab>
      <md-tab id="Activation" md-label="Activation">
        <activation></activation>
      </md-tab>
      <md-tab id="Authentication" md-label="Authentication">
        <authentication />
      </md-tab>
    </md-tabs>
  </div>
</template>
<script>
  import Setup from './Setup'
  import Activation from './Activation'
  import Authentication from './Authentication'
  import Register from './Register'
  export default {
    name: 'Navigation',
    data () {
      return { }
    },
    components: {
      Setup,
      Activation,
      Authentication,
      Register
    }
  }
</script>
