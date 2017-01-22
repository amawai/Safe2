<template>
	<md-card class="setup-container">
    <form novalidate @submit.stop.prevent="submit">
  		<md-card-header>
  			<div class="md-title">Setup, when you initially need to setup voice + string authentication</div>
  		</md-card-header>

      <record-button @recorded="onRecorded" />
			<div v-if="connected"> {{training.count}} / 5 </div>

			<md-button class="md-raised" v-if="connected">Status: {{training.state}}</md-button>

	  	<md-input-container>
	    	<label>Your name</label>
	    	<md-input v-model="name" placeholder="Your name"></md-input>
	  	</md-input-container>

	  	<md-input-container>
	    	<label>What's your numbah?</label>
	    	<md-input v-model="phoneNumber" type="number"></md-input>
	  	</md-input-container>

      <md-input-container>
	    	<label>What's your emergency contact numbah?</label>
	    	<md-input v-model="emergencyNumber" type="number"></md-input>
	  	</md-input-container>
			<md-button :disabled="!allowNext" class="md-raised md-primary">Next</md-button>
  	</form>
	</md-card>
</template>
<script>
import RecordButton from './RecordButton'
import { addTraining } from '../db'
export default{
  name: 'Setup',
  props: ['userId'],
  components: { RecordButton },
  data () {
    return {
      connected: false,
      name: null,
      phoneNumber: null,
      emergencyNumber: null,
      status: 'Waiting for input',
      activateNext: ''
    }
  },
  methods: {
    onSubmit: function (event) {
      window.alert('YOU PRESSED SUBMIT')
    },
    onRecorded (fileUrl) {
      console.log(fileUrl)
      // update fb object with fileUrl
    }
  },
  mounted () {
    if (this.userId !== '') {
      addTraining(this.userId)
      .then(r => {
        this.connected = true
        this.$bindAsObject('training', r)
      })
    }
  },
  computed: {
    allowNext () {
      return this.training && this.training.count >= 5
    },
    statusCheck: function () {
      this.status = (this.counter === 5) ? 'Working' : this.status
      return this.status
    },
    nextCheck: function () {
      this.activateNext = (this.counter === 5) ? '' : 'disabled'
      return this.activateNext
    },
    buttonTextCheck: function () {
      this.buttonText = (this.counter === 5) ? 'NEXT' : 'TRAIN'
      return this.buttonText
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
