<template>
  <div>
    <p>Activation--the text will be sent to you in half an hour!</p>
    <md-button class="md-raised md-accent" v-on:click="onActivate">ACTIVATE</md-button>
  </div>
</template>

<script>
export default {
  name: 'Activation',
  methods: {
    onActivate: function (event) {
      window.alert('YOU PRESSED A BUTTON!')
    }
  }
}
</script>
<style>
  div {
    text-align: center;
  }
</style>
