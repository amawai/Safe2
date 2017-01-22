<template>
  <div>
    <navigation></navigation>
  </div>
</template>

<script>
  import InputForm from './components/InputForm'
  import LoginButton from './components/LoginButton'
  import Navigation from './components/Navigation'
  export default {
    name: 'app',
    components: {
      InputForm,
      LoginButton,
      Navigation
    }
  }
</script>
<style>

  .inputForm {
    padding: 20px;
  }

</style>
