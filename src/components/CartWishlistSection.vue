<template>
    <div class="d-flex gap-2 align-items-center p-2">
    <span class="fs-2">Wishlist</span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
  <div class="row p-1">
          <div class="col-xl-3 col-lg-4 col-md-6 col-6 d-flex justify-content-center p-1 p-md-3" v-for="product in products" :key="product.id">
            <CardProduct :dataProduct="product" />
            </div>
        </div>
</template>

<script>
import CardProduct from '@/components/CardProduct.vue'
export default {
    name : 'CartWishlistSection',
    components: { CardProduct },
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Asus ROG Phone Ram 128 GB',
                    harga: 'Rp. 20.000',
                    diskon: 'Rp. 23.000'
                },
                {
                    id: 2,
                    name: 'Product 2',
                    harga: 'Rp. 10.000',
                    diskon: 'Rp. 14.000'
                },
                {
                    id: 3,
                    name: 'Product 3',
                    harga: 'Rp. 34.500',
                    diskon: 'Rp. 45.000'
                },
                {
                    id: 4,
                    name: 'Product 4',
                    harga: 'Rp. 34.500',
                    diskon: 'Rp. 45.000'
                },
                {
                    id: 5,
                    name: 'Product 5',
                    harga: 'Rp. 34.500',
                    diskon: 'Rp. 45.000'
                },
                {
                    id: 6,
                    name: 'Product 6',
                    harga: 'Rp. 34.500',
                    diskon: 'Rp. 45.000'
                },
            ]
        }
    },
}
</script>

<style scoped>
.dot {
  width: 10px;
  height: 10px;
  background-color: gray;
  border-radius: 5px;
}

</style>