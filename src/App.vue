<template>
    <header-component :currentRoute="$route" />
      <div class="container">
    <router-view/>
  </div>
 <footer-component />
</template>
<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
export default {
  components: {
    HeaderComponent,
    FooterComponent
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
  /* height: 100vh; */
  font-family: 'Roboto', sans-serif;
}
/* customs rounded for container */
.rnd-075 {
    border-radius: 0.75rem;
}

.cursor-pointer {
    cursor: pointer;
}

</style>
