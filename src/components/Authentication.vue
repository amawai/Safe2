<template>
  <div>
    <navigation></navigation>
      <md-card>
        <md-button-toggle>
          <md-button  v-on:click="toggleThing" class="md-icon-button">
            <md-icon>T/V</md-icon>
          </md-button>
        </md-button-toggle>

        <md-button-toggle>
          <md-button v-model="voice">
            <md-icon>REC</md-icon>
          </md-button>
        </md-button-toggle>

      <md-input-container>
        <label>String verification</label>
        <md-input v-model="message" placeholder="Type the thing!"></md-input>
      </md-input-container>
    </md-card>
  </div>
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
      window.alert('You selected ' + this.choice)
    }
  }
}
</script>
