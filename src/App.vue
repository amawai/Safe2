<template>
  <div>
    <input-form></input-form>
  </div>
</template>

<script>
  import InputForm from './components/InputForm'
  import LoginButton from './components/LoginButton'
  export default {
    name: 'app',
    components: {
      InputForm,
      LoginButton
    }
  }
</script>
<style>

  .inputForm {
    padding: 20px;
  }

</style>
