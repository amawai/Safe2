<template>
	<md-card class="setup-container">
    <form novalidate @submit.stop.prevent="submit">
  		<md-card-header>
  			<div class="md-title">Setup, when you initially need to setup voice + string authentication</div>
  		</md-card-header>

      <record-button @recorded="onRecorded" />

	  	<md-input-container>
	    	<label>Input a verification message</label>
	    	<md-input v-model="stringauth" placeholder="Type something you'll remember!"></md-input>
	  	</md-input-container>

	  	<md-input-container>
	    	<label>What's your numbah?</label>
	    	<md-input v-model="numauth" type="number"></md-input>
	  	</md-input-container>

      <md-input-container>
	    	<label>What's your emergency contact numbah?</label>
	    	<md-input v-model="emergencyNumber" type="number"></md-input>
	  	</md-input-container>

      <md-button  v-on:click="onSubmit" class="md-raised md-accent">Submit</md-button>
  	</form>
	</md-card>
</template>
<script>
import RecordButton from './RecordButton'
export default{
  name: 'Setup',
  components: { RecordButton },
  data () {
    return {
      stringauth: null,
      numauth: null,
      emergencyNumber: null
    }
  },
  methods: {
    onSubmit: function (event) {
      window.alert('YOU PRESSED SUBMIT')
    },
    onRecorded (fileUrl) {
      console.log(fileUrl)
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
