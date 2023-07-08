<template>
    <div id="carouselBanner" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselBanner" data-bs-slide-to="0" class="active dot"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselBanner" data-bs-slide-to="1" class="dot" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselBanner" data-bs-slide-to="2" class="dot" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner" style="border-radius: 15px;">
            <div class="carousel-item active" data-bs-interval="2000">
                <img src="https://source.unsplash.com/collection/190727/1245x459" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <img src="@/assets/img/banner.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="https://source.unsplash.com/collection/190727/1245x459" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselBanner" data-bs-slide="prev">
            <span>&nbsp; </span>
            <span class="material-symbols-outlined next">
                arrow_back_ios
            </span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselBanner" data-bs-slide="next">
            <span class="material-symbols-outlined next">
                arrow_forward_ios
            </span>
            <!-- <span class="carousel-control-next-icon fs-6" style="color: black;" aria-hidden="true"></span> -->
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentIndex: 0,
            intervalId: null,
            sliderContainerStyle: {},
            sliderItems: [
                {
                    id: 1,
                    src: require('@/assets/img/banner.png')
                },
                {
                    id: 2,
                    src: require('@/assets/img/image-1.jpeg')
                },
                {
                    id: 3,
                    src: require('@/assets/img/image-4.png')
                }
            ],
        }
    }
}
</script>

<style scoped>
/* .dot {
    height: 10px;
    width: 10px;
    border-radius: 5px;
} */

.carousel-control-next,
.carousel-control-prev {
    background-color: black;
    height: 50px;
    width: 50px;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 20px;
    margin-left: 20px;
    border-radius: 30px;
}

.carousel-control-next:focus,
.carousel-control-prev:focus,
.carousel-control-next:hover,
.carousel-control-prev:hover {
    background-color: black;
    opacity: 0.3;
}

@media (max-width: 766px) {

    .carousel-control-next,
    .carousel-control-prev {
        opacity: 0;
    }
}
</style>
