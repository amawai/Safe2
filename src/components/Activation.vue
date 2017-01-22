<template>
  <div>
    <navigation></navigation>
    <p>Activation--the text will be sent to you in half an hour!</p>
    <md-button class="md-raised md-accent">ACTIVATE</md-button>
  </div>
</template>

<script>
import Navigation from './Navigation'
export default {
  name: 'Activation',
  components: {
    Navigation
  }
}
</script>
