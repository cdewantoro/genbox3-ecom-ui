<template>
    <header-component :currentRoute="$route" />
  <div class="container" style="margin-top: 170px; border: 1px solid red;">
    <router-view/>
  </div>
  
</template>
<script>
import HeaderComponent from './components/HeaderComponent.vue';
export default {
  components: {
    HeaderComponent
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Roboto:wght@300;400;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}

#app {
  background-color: #f4f4f4;
  height: 100vh;
  font-family: 'Roboto', sans-serif;
}

</style>
