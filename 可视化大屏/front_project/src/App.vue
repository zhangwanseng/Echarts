<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import bg from '../src/assets/images/bg.jpg'
export default {
  
}
</script>
<style>

*{
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  color: white;
}
body{
  background: url('../src/assets/images/bg.jpg') no-repeat top center;
}
body,html,#app,#app>div{
  width: 100%;
  height: 100%;
}
</style>
