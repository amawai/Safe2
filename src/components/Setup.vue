<template>
	<md-card class="setup-container">
    <form novalidate @submit.stop.prevent="submit">
  		<md-card-header>
  			<div class="md-title">Setup, when you initially need to setup voice + string authentication</div>
  		</md-card-header>

      <div v-show="initSuccess">
        Init success
      </div>
      <div v-show="recording">
        recording!
      </div>

      <md-button-toggle class="record-container">
        <md-button class="md-raised md-accent" @click="onClickMic">
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
import Mic from '../mic'

const mic = new Mic()

export default{
  name: 'Setup',
  component: {
    Navigation
  },
  data () {
    return {
      stringauth: null,
      numauth: null,
      initSuccess: false,
      recording: false
    }
  },
  methods: {
    onSubmit: function (event) {
      window.alert('YOU PRESSED SUBMIT')
    },
    onClickMic () {
      if (!this.recording) {
        this.startRecording()
      } else {
        this.stopRecording()
      }
    },
    startRecording () {
      mic.start()
      .then(() => {
        this.recording = true
      })
      .catch(e => {
        this.recording = false
        window.alert(e)
      })
    },
    stopRecording () {
      mic.stop()
      .then(url => {
        this.recording = false
        window.alert(url)
      })
      .catch(e => {
        this.recording = false
        window.alert(e)
      })
    }
  },
  mounted () {
    mic.init()
    .then(() => {
      this.initSuccess = true
    })
    .catch(() => {
      this.initSuccess = false
    })
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
