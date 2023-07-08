<template>
    <div class="mt-4">
        <div class="d-flex gap-2 align-items-center p-2">
            <span class="fs-2">Diskon</span>
            <span class="fs-3 bg-primary text-light px-4 rounded-3 fw-bold mx-2">12.12</span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
    </div>
    <div class="mt-4 position-relative">
        <div class="card-slider" ref="cardSlider">
            <div class="card" v-for="product in products" :key="product.id">
                <CardDiscount :dataProduct="product" />
            </div>
        </div>
        <div class="card-slider-controls">
            <button class="button-prev" @click="scrollLeft">
                <span class="material-symbols-outlined">
                    arrow_back_ios
                </span>
            </button>
            <button class="button-next" @click="scrollRight">
                <span class="material-symbols-outlined">
                    arrow_forward_ios
                </span>
            </button>
        </div>
    </div>
</template>

<script>
import CardDiscount from "@/components/CardDiscount.vue"

export default {
    name: 'DiscountSection',
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
    methods: {
        scrollLeft() {
            const cardSlider = this.$refs.cardSlider;
            cardSlider.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        },
        scrollRight() {
            const cardSlider = this.$refs.cardSlider;
            cardSlider.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        }
    },
    components: { CardDiscount }
}
</script>
<style scoped>
.dot {
  width: 10px;
  height: 10px;
  background-color: gray;
  border-radius: 5px;
}
.card-slider {
    display: flex;
    overflow-x: hidden;
    scroll-behavior: smooth;
    position: relative;
}

.card {
    flex: 0 0 auto;
    max-width: 300px;
    margin-right: 10px;
    background-color: transparent;
    border: none;
}

.card-slider-controls {
    width: 100%;
    top: 50%;
    padding-left: 10px;
    /* left: -20px; */
    position: absolute;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

.button-prev, .button-next {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: black;
    opacity: 0.3;
    color: white;
}
.button-prev {
    padding-left: 8px;
}
</style>