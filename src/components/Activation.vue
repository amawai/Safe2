<template>
	<md-card class="activation-container">
    <img style="margin: 0 auto; display: block; width: 100%"
      src="https://s-media-cache-ak0.pinimg.com/736x/ae/46/5b/ae465b500e1e4cd36cad31a18ef9a93b.jpg" />
    <md-button class="md-raised md-accent" v-on:click="onActivate">ACTIVATE</md-button>
		<md-card-header>
      <div class="md-title">Activation--the text will start harassing you!</div>
		</md-card-header>
  </md-card>
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
  .activation-container {
    margin: 20px;
  }
</style>
