<template>
  <div id="container">
    <h1>Login container</h1>
    <br/>
    <button @click="login">login in</button>
  </div>
</template>

<script>
export default {
    methods:{
        login(){
            this.$router.push({path:'/component-a'})
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
s