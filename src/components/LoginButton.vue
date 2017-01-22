<template lang="html">
  <md-button v-if="!user" @click="onClickLogin">Login</md-button>
  <md-button v-else @click="onClickLogout">Logout</md-button>
</template>

<script>
import { login, logout } from '../db'

export default {
  data () {
    return {
      user: null
    }
  },
  methods: {
    onClickLogin () {
      login().then(x => {
        this.user = x
        this.$emit('login', x)
      })
    },
    onClickLogout () {
      logout().then(x => {
        this.user = null
        this.$emit('logout')
      })
    }
  }
}
</script>

<style lang="css">
</style>
