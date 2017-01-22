<template>
  <div>
    <login-button @login="onLogin"></login-button>
  </div>
</template>

<script>
import LoginButton from './LoginButton'
export default{
  name: 'Register',
  methods: {
    onLogin (user) {
      this.$emit('login', user)
    }
  },
  components: {
    LoginButton
  }
}
</script>
