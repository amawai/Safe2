<template>
	<md-card class="activation-container">
		<h1 v-if="active" style="color: green;">Active</h1>
		<h1 v-if="!active" style="color: red;">Deactivated</h1>
		<p>
					Disactivated
					<md-switch md-theme="green" v-model="active" id="my-test5" name="my-test5"></md-switch>
					Activated
		</p>
		</md-card-header>
  </md-card>
</template>



<script>
export default {
  name: 'Activation',
  data: () => ({
    active: false,
    activatedColor: 'green'
  }),
  methods: {
    onActivate: function (event) {
      window.alert('YOU PRESSED A BUTTON!')
    }
  }
}
</script>

<style>
  .activation-container {
    margin: 20px;
  }
</style>
