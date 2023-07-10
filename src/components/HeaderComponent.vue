<template>
    <header class="fixed-top">
        <div class="bg-primary py-3 px-2" v-show="!(currentRoute.path === '/login' || currentRoute.path === '/register')">
            <div class="container d-flex">
                <div class="text-light d-flex gap-3 align-items-center w-75">
                    <router-link to="/">Home</router-link> <span class="fw-lighter fs-5">|</span>
                    <router-link to="/wishlist">Wishlist</router-link> <span class="fw-lighter fs-5">|</span>
                    <router-link class="d-flex align-items-center" to="/"><span>Category</span> <span
                            class="material-symbols-outlined">arrow_drop_down</span></router-link>
                </div>
                <div class="w-25 d-flex justify-content-end align-items-center"
                    v-if="currentRoute.path === '/cart' || currentRoute.path === '/wishlist' || currentRoute.path === '/profile'">
                    <span class="fs-6 text-light mx-2">User</span>
                    <router-link to="/profile"><span
                            class="material-symbols-outlined fs-2 text-light">account_circle</span></router-link>
                </div>
            </div>
        </div>
        <div class="bg-primary pb-3 px-2" v-show="currentRoute.path === '/'">
            <div class="container">
                <div class="d-flex gap-4 gap-md-0 justify-content-between align-items-center pt-2">
                    <div style="width: 20%;"><router-link to="/" class="fs-1 fw-bold">Shop</router-link></div>
                    <div class="position-relative search-bar d-flex justify-content-between bg-light mr-10 rounded-3"
                        style="width: 60%;">
                        <input v-model="searchValue" v-on:focus="showResult = true" v-on:blur="showResult = false"
                            type="text" placeholder="Cari Produk ..." />
                        <div class="bg-primary rounded-3 d-flex align-items-center px-2 px-md-4 text-light cursor-pointer">
                            <span class="material-icons fs-5">search</span>
                        </div>
                        <div v-show="showResult" class="search-result">
                            <div v-if="searchValue === ''" class="text-secondary">Ketik untuk mulai mencari produk</div>
                            <div v-if="searchValue !== ''">
                                <div class="fw-bold d-flex justify-content-between"><span>{{ searchValue }}</span> <span
                                        class="material-symbols-outlined">arrow_right_alt</span></div>
                                <!-- <hr> -->
                            </div>
                        </div>
                    </div>
                    <div class="d-none gap-1 d-md-flex justify-content-end" style="width: 20%;">
                        <router-link to="/cart"
                            class="d-flex align-items-center justify-content-center text-light rounded-3 p-1 mx-2 bg-primary border border-2 cursor-pointer"
                            style="height: 38px; width: 70px; margin-left: 5px;">
                            <span class="material-icons fs-5">shopping_cart</span>
                        </router-link>
                        <div v-if="isAuth"
                            class="profil-icon position-relative d-flex align-items-center text-light cursor-pointer">
                            <span class="material-symbols-outlined">arrow_drop_down</span><span
                                class="material-symbols-outlined fs-1">account_circle</span>
                            <div class="profile-dropdown">
                                <div class="text-secondary">Profil</div>
                                <hr class="my-0 text-secondary">
                                <div class="text-secondary">Wishlist</div>
                                <hr class="my-0 text-secondary">
                                <div class="mb-2 text-secondary">Transaksi</div>
                                <div @click="actionLogout()"
                                    class="d-flex align-items-center justify-content-center gap-2 bg-danger text-light rounded-3">
                                    Logout <span class="material-symbols-outlined fw-bold"
                                        style="font-size: 15px;">logout</span></div>
                            </div>
                        </div>
                        <router-link v-else to="/login"
                            class="d-flex align-items-center justify-content-center text-light border border-2 rounded-3 cursor-pointer"
                            style="width: 80px">Login</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-light pb-3 px-2 border-bottom"
            v-show="currentRoute.path === '/cart' || currentRoute.path === '/wishlist' || currentRoute.path === '/profile' || currentRoute.path === '/order'">
            <div class="container">
                <div class="d-flex gap-4 gap-md-0 justify-content-between align-items-center pt-2">
                    <div>
                        <router-link to="/" class="fs-1 fw-bold text-primary">Shop</router-link>
                        <span class="d-none d-md-inline fs-1 fw-lighter text-primary">&nbsp; | &nbsp;</span>
                        <span class="d-none d-md-inline fs-2 fw-normal text-primary">{{ currentRoute.name }}</span>
                    </div>
                    <div class="search-bar d-flex justify-content-between bg-light rounded-3 border border-primary"
                        style="width: 60%;">
                        <input type="text" placeholder="Search Wishlist..." />
                        <div class="bg-primary rounded-3 d-flex align-items-center px-2 px-md-4 text-light cursor-pointer">
                            <span class="material-icons fs-5">search</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import { ref } from 'vue';

export default {
    data() {
        return {
            searchValue: '',
            showResult: ref(false)
        }
    },
    props: {
        currentRoute: {
            type: Object,
            required: true
        }
    },
    computed: {
        isAuth() {
            return this.$store.state.isAuth;
        }
    },
    methods: {
        actionLogout() {
            this.$store.dispatch('logout').then(() => {
                if (!this.isAuth) {
                    this.$router.push('/');
                }
            });
        }
    }
}
</script>
<style scoped>
.search-bar {
    padding: 2px 3px;
    padding-left: 10px;
    font-size: 13px;
    height: 40px;
}

.search-bar input {
    padding: 6px;
    width: 100%;
    outline: none;
    border: none;
}

.search-result {
    position: absolute;
    top: 43px;
    left: 0;
    width: 100%;
    border-radius: 10px;
    background-color: white;
    padding: 20px;
}

.profile-dropdown {
    display: none;
    position: absolute;
    top: 43px;
    right: 0;
    width: 190px;
    background-color: white;
    border-radius: 10px;
    padding: 15px 20px;
}

.profil-icon:hover .profile-dropdown {
    display: block;
}

/* .profile-dropdown:hover {
    display: block;
} */

.profile-dropdown div {
    padding: 10px;
    font-size: 12px;
    font-weight: 600;
}

.profile-dropdown div:hover {
    background-color: #f0f3f8;
}


a {
    color: white;
    text-decoration: none;
}</style>