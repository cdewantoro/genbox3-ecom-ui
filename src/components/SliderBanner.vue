<template>
    <div class="slider">
        <div class="slider-container" :style="sliderContainerStyle">
            <div class="slider-item" v-for="(item, index) in sliderItems" :key="index">
                <img :src="item.src" alt="Image" />
            </div>
        </div>
        <div class="nav-left">
            <button class="slider-prev" @click="prevSlide()"><span class="material-icons">arrow_back_ios</span></button>
        </div>
        <div class="slider-nav">
            <div class="slider-dots">
                <button v-for="(item, index) in sliderItems" :key="index" @click="showSlide(index)" class="slider-dot"
                    :class="{ active: index === currentIndex }"></button>
            </div>
        </div>
        <div class="nav-right">
            <button class="slider-next" @click="nextSlide()"><span class="material-icons">arrow_forward_ios</span></button>
        </div>
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
    },
    mounted() {
        this.startAutoSlide();
    },
    methods: {
        showSlide(index) {
            this.currentIndex = index;
            this.sliderContainerStyle = {
                transform: `translateX(-${this.currentIndex * 100}%)`
            };
        },
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.sliderItems.length;
            this.showSlide(this.currentIndex);
        },
        prevSlide() {
            this.currentIndex = (this.currentIndex + this.sliderItems.length - 1) % this.sliderItems.length;
            this.showSlide(this.currentIndex);
        },
        startAutoSlide() {
            this.intervalId = setInterval(this.nextSlide, 5000);
        },
    }
}
</script>

<style scoped>
.slider {
    position: relative;
    overflow: hidden;
    min-height: 400px;
    border-radius: 20px;
}

.slider-container {
    display: flex;
    transition: transform 0.5s ease;
    height: 100px;
}

.slider-item {
    flex-shrink: 0;
    width: 100%;
}

.slider-item img {
    width: 100%;
}

.slider-nav {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: linear-gradient(180deg, rgba(5, 5, 5, 0) 0%, rgba(5, 5, 5, 0.9375) 100%);
}

.nav-left,
.nav-right {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 7%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav-left {
    left: 0;
}

.nav-right {
    right: 0;
}

.slider-prev,
.slider-next {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: rgba(255, 250, 250, 0.45);
    color: var(--color-secondary);
    font-size: 30px;
    cursor: pointer;
    transition: opacity 0.3s ease;
    width: 40px;
    height: 40px;
    border-radius: 20px;
}

.slider-prev {
    padding-left: 7px;
}

.slider-prev:hover,
.slider-next:hover {
    opacity: 0.7;
}

.slider-dots {
    display: flex;
    justify-content: center;
    align-items: center;
}

.slider-dot {
    border: 2px solid white;
    background-color: transparent;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin: 20px 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.slider-dot.active {
    background-color: #fff;
}

@media (max-width: 1200px) {
    .slider {
        min-height: 350px;
    }
}

@media (max-width: 991px) {
    .slider {
        min-height: 260px;
    }
}

@media (max-width: 767px) {
    .slider {
        min-height: 190px;
    }

    .slider-prev,
    .slider-next {
        height: 20px;
        width: 20px;
        background: transparent;
        color: rgba(255, 250, 250, 0.45);
    }

    .slider-nav {
        align-items: center;
        padding: 0;
    }

    .slider-dot {
        border: 1px solid white;
        width: 9px;
        height: 9px;
        margin: 15px 3px;
    }
}

@media (max-width: 500px) {
    .slider {
        min-height: 140px;
    }

    .slider-prev,
    .slider-next {
        height: 20px;
        width: 20px;
        background: transparent;
        color: rgba(255, 250, 250, 0.45);
    }
}
</style>
