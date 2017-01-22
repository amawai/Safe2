<template>
  <md-card class="auth-view">
    <img style="margin: 0 auto; display: block; width: 100%" src="https://pbs.twimg.com/media/CPB2xJ9WcAAK0G6.jpg" />
    <br />
    <h1>Say the password</h1>
    <record-button @recorded="onRecord" />
    <br />
  </md-card>
</template>

<script>
import RecordButton from './RecordButton'
export default{
  name: 'Authenticate',
  components: {
    RecordButton
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
    },
    onRecord: function (event) {
      window.alert(event)
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
