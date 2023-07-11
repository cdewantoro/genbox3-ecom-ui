<template>
  <div class="mt-4">
    <div class="d-flex gap-2 align-items-center p-2">
      <span class="fs-2" style="margin-right: 10px;">Product</span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
    <div class="row p-1">
      <div class="col-xl-3 col-lg-4 col-md-6 col-6 d-flex justify-content-center p-1 p-md-3" v-for="product in products"
        :key="product.id">
        <CardProduct :dataProduct="product" />
      </div>
    </div>
    <div class="pagination">
      <button :disabled="currentPage === 1" @click="prevPage">
        <span class="material-icons">chevron_left</span>
      </button>

      <button v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }" @click="changePage(page)">
        {{ page }}
      </button>

      <button :disabled="currentPage === totalPages" @click="nextPage">
        <span class="material-icons">chevron_right</span>
      </button>
    </div>
  </div>
</template>

<script>
import CardProduct from '@/components/CardProduct.vue'
import axios from 'axios';

export default {
  components: { CardProduct },
  data() {
    return {
      products: [],
      totalItems: 0,
      currentPage: 1,
      itemsPerPage: 8,
    }
  },
  computed: {
    paginatedData() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.products.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
      .get('/product?page='+this.currentPage)
      .then(response => {
        this.totalItems = response.data.total;
        this.products = response.data.data;
      })
      .catch(error => {
        console.error(error);
      });
    },
    changePage(page) {
      this.currentPage = page;
      this.fetchData();
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.changePage(this.currentPage + 1);
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.changePage(this.currentPage - 1);
      }
    }
  }
}
</script>

<style scoped>
.dot {
  width: 10px;
  height: 10px;
  background-color: gray;
  border-radius: 5px;
}

.pagination {
  display: flex;
  gap: 10px;
  /* width: 30%; */
  /* justify-content: space-around; */
  margin-bottom: 30px;
}

.pagination button {
  width: 60px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: transparent;
  border-radius: 5px;
  background-color: #0D6EFD;
  color: white;
  cursor: pointer; 
}

.pagination button:hover {
  background-color: #0f52b8;
}
</style>