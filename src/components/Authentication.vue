<template>
  <div class="center sliding">
    <navigation></navigation>
      <md-card id="jojo">
        <md-button-toggle>
          <md-button class="md-icon-button">
            <md-icon>T/V</md-icon>
          </md-button>
        </md-button-toggle>

        <md-switch v-on:change="toggleThing" id="textorvoice" name="textorvoice"></md-switch>

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
<style>
  div {
    text-align: center;
  }
  .md-button {

  }

  #jojo {
    display: -webkit-flex; /* Safari */
    -webkit-align-items: center; /* Safari 7.0+ */
    display: flex;
    align-items: center;
  }
</style>
