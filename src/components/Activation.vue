<template>
  <div>
    <p>Activation--the text will be sent to you in half an hour!</p>
    <md-button class="md-raised md-accent">ACTIVATE</md-button>
  </div>
</template>

<script>
export default {
  name: 'Activation',
  components: {
    voiceAuthentication: null,
    wordMessage: '',
    phoneNumber: '',
    confirm: ''
  }

}
</script>
