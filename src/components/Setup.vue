<template>
	<md-card class="setup-container">
    <form novalidate @submit.stop.prevent="submit">
  		<md-card-header>
  			<div class="md-title">Not changing it yet, when you initially need to setup voice + string authentication</div>
  		</md-card-header>
      <img class="meme" src="http://i2.kym-cdn.com/photos/images/newsfeed/000/915/822/7b2.jpg" />

      <md-button-toggle class="record-container">
        <md-button class="md-raised md-accent">
          <md-icon class="md-size-4x">mic</md-icon>
        </md-button>
      </md-button-toggle>

	  	<md-input-container>
	    	<label>Input a verification message</label>
	    	<md-input v-model="stringauth" placeholder="Type something you'll remember!"></md-input>
	  	</md-input-container>

	  	<md-input-container>
	    	<label>What's your numbah?</label>
	    	<md-input v-model="numauth" type="number"></md-input>
	  	</md-input-container>
      <md-button  v-on:click="onSubmit" class="md-raised md-accent">Submit</md-button>
  	</form>
	</md-card>
</template>

<script>
import Navigation from './Navigation'
export default{
  name: 'Setup',
  component: {
    Navigation
  },
  data () {
    return {
      stringauth: null,
      numauth: null
    }
  },
  methods: {
    onRecord: function (event) {
      window.alert('YOU WANNA RECORD SOMETHIN?!')
    },
    onSubmit: function (event) {
      window.alert('YOU PRESSED SUBMIT')
    }
  }
}
</script>
<style>
  div {
    text-align: center;
  }
  .setup-container {
    margin: 40px;
    padding: 20px;
  }
  .record-container {
    padding: 20px;
  }
  .record-container .md-button {
    margin: 0 auto;
  }
  .meme {
    display: block;
    margin: 0 auto;
  }
</style>
