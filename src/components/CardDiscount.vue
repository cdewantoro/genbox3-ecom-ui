<template>
    <div class="card-wrap">
        <div class="label-card fw-bold">
            12.12
        </div>
        <div class="card">
            <img src="https://source.unsplash.com/collection/190727/330x330" class="card-img-top" alt="...">
            <div class="card-body px-3 px-md-4">
                <h5 class="card-title">{{ dataProduct.name }}</h5>
                <h5 class="card-text  lh-1"><b>{{ dataProduct.harga }}</b></h5>
                <p class="text-decoration-line-through text-secondary lh-1">{{ dataProduct.diskon }}</p>
                <div class="d-flex align-items-center">
                    <a href="#" class="btn btn-primary" style="width: 60%;">Beli</a>
                    <span class="material-symbols-outlined fs-1 text-secondary text-center" style="width: 40%;">
                        favorite
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dataProduct: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.card-wrap {
    padding: 8px;
    position: relative;
}

.label-card {
    position: absolute;
    z-index: 700;
    left: 0;
    top: 20px;
    padding: 3px 20px 3px 20px;
    background-color: #0D6EFD;
    font-size: 24px;
    color: white;
    border-radius: 5px;
}

.card {
    border-radius: 15px;
}

.card-title {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}

img {
    border-radius: 15px 15px 0 0;
}

@media (max-width: 766px) {
    .card {
        max-width: 200px;
    }

    .card-body {
        padding: 5% 5% 5% 5%;
    }

    h5 {
        font-size: 15px;
        margin-bottom: 6px;
    }

    p {
        font-size: 13px;
    }

    a {
        font-size: 15px;
    }
}</style>