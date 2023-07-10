<template>
  <div class="home">
    <SliderBanner />
    <DiscountSection />
    <ProductSection />
  </div>
</template>

<script>
import SliderBanner from "@/components/SliderBanner.vue";
import DiscountSection from "@/components/DiscountSection.vue"
import ProductSection from "@/components/ProductSection.vue"
// import axios from 'axios';

export default {
  name: 'HomeView',
  components: { SliderBanner, DiscountSection, ProductSection },
  // mounted() {
  //   axios
  //     .get('http://127.0.0.1:8000/api/user')
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }
}
</script>
<style scoped>
.home {
  padding-top: 170px;
}

@media (max-width: 766px) {
  .home {
    padding-top: 145px;
  }
}
</style>