<template>
    <div class="card">
        <img :src="'http://localhost:8000/images/' + dataProduct.foto_produk" class="card-img-top" alt="...">
        <div class="card-body px-3 px-md-4 d-flex flex-column justify-content-between">
            <h5 class="card-title">{{ dataProduct.nama_produk }}</h5>
            <h5 class="card-text"><b>{{ formatCurrency(dataProduct.harga) }}</b></h5>
            <div class="d-flex align-items-center">
                <a href="#" class="btn btn-primary" style="width: 60%;">Beli</a>
                <div class="d-flex justify-content-center" style="width: 40%;">
                    <span class="material-symbols-outlined fs-1 text-secondary text-center cursor-pointer">
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
    },
    methods: {
        formatCurrency(value) {
            return value.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            });
        },
    },
}
</script>

<style scoped>
.card {
    border-radius: 15px;
    width: 100%;
}

.card-img-top {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 65%;
}

.card-title {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

img {
    border-radius: 15px 15px 0 0;
}

@media (max-width: 766px) {

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
}
</style>