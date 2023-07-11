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

export default {
  name: 'HomeView',
  components: { SliderBanner, DiscountSection, ProductSection }
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