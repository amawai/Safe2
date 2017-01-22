<template>
  <div class="center sliding">
    <navigation></navigation>
    <md-card id="jojo">
      <md-button-toggle>
        <md-button v-model="voice">
          <md-icon>REC</md-icon>
        </md-button>
      </md-button-toggle>
      <md-button  v-on:click="onSubmit" class="md-raised md-accent">Submit</md-button>
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
    },
    onSubmit: function (event) {
      window.alert('YOU PRESSED A BUTTON!')
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
