<template lang="html">
  <md-button v-if="!user" @click="onClickLogin">Login</md-button>
  <md-button v-else @click="onClickLogout">Logout</md-button>
</template>

<script>
import { login, logout, watchLogin } from '../db'

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
  },
  mounted () {
    watchLogin(authData => {
      if (authData) {
        console.log('User ' + authData.uid + ' is logged')
        this.user = authData
        this.$emit('login', { user: authData })
      } else {
        console.log('User is logged out')
        this.$emit('logout')
      }
    })
  }
}
</script>

<style lang="css">
</style>
