<template>
  <md-card class="auth-view">
    <img style="margin: 0 auto; display: block; width: 100%" src="https://pbs.twimg.com/media/CPB2xJ9WcAAK0G6.jpg" />
    <br />
    <h1>Say the password</h1>
    <md-button-toggle>
      <md-button v-model="voice" class="md-raised md-accent">
        <md-icon class="md-size-4x">mic</md-icon>
      </md-button>
    </md-button-toggle>
    <br />
  </md-card>
</template>

<script>
import Navigation from './Navigation'
export default{
  name: 'Authenticate',
  components: {
    Navigation
  },
  data () {
    return {
      choice: 'text',
      message: null,
      voice: null
    }
  },
  methods: {
    toggleThing: function (event) {
      this.choice = (this.choice === 'text') ? 'voice' : 'text'
    },
    onSubmit: function (event) {
      window.alert('YOU PRESSED A BUTTON!')
    }
  }
}
</script>
<style>
  div {
    text-align: center;
  }
  .md-button {

  }

  .auth-view {
    margin: 20px;
    align-items: center;
  }
</style>
