<template lang="html">
  <md-button :class="buttonCls" v-if="initialized" @click="onClickMic">
    <md-icon class="md-size-4x">mic</md-icon>
  </md-button>
  <div v-else>
    There's no mic available on this device.
  </div>
</template>

<script>
import Mic from '../mic'

export default {
  data: () => ({
    initialized: false,
    recording: false
  }),
  computed: {
    buttonCls () {
      if (this.recording) {
        return 'md-raised simple-transition md-accent'
      } else {
        return 'md-raised simple-transition md-primary'
      }
    }
  },
  mounted () {
    this.$mic = new Mic()
    this.init()
  },
  methods: {
    onClickMic () {
      if (this.recording) {
        this.stop()
      } else {
        this.start()
      }
    },
    init () {
      this.$mic.init()
      .then(() => {
        this.initialized = true
      })
      .catch(() => {
        this.initialized = false
      })
    },
    start () {
      this.$mic.start()
      .then(() => {
        this.recording = true
      })
      .catch(e => {
        this.recording = false
        window.alert(e)
      })
    },
    stop () {
      this.$mic.stop()
      .then(url => {
        this.recording = false
        this.$emit('recorded', url)
      })
      .catch(e => {
        this.recording = false
        window.alert(e)
      })
    }
  }
}
</script>

<style lang="css">
.simple-transition {
  transition: all 0.5s;
}
</style>
