<template>
  <div style="padding-top: 170px;padding-bottom:100px;">
  <div class="shadow px-3 py-5 mb-5 bg-body rnd-075">
    <div class="container">
      <div class="row">
        <div class="col-10">
            <div class="form-check text-black-50">
              <input class="form-check-input" type="checkbox" id="CheckAll" v-model="selectAll" @change="toggleAllCheckboxes">
              <label class="form-check-label" for="CheckAll">All Product</label>
            </div>
          </div>
        <div class="col"></div>
      </div>
      <div class="row mt-4">
        <div class="col-10">
            <div class="form-check">
              <div class="d-flex align-items-center">
                <input class="form-check-input check" type="checkbox" value="" id="1">
                <label class="form-check-label" for="1">
                  <div class="row ps-2">
                    <div class="col"><img src="https://picsum.photos/100" width="100" height="100"></div>
                  <div class="col"><h4 class="fw-bold">Product</h4><p class="p-0">IDR 300.000<br>Qty : 5</p></div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div class="col d-flex flex-row-reverse">
            <div class="align-self-center text-black-50">
              <span>Hapus</span> <span class="material-icons inline-icon">&#xe5cd;</span>
            </div>
          </div>
      </div>
      <div class="row mt-4">
        <div class="col-10">
            <div class="form-check">
              <div class="d-flex align-items-center">
                <input class="form-check-input check" type="checkbox" value="" id="2">
                <label class="form-check-label" for="2">
                  <div class="row ps-2">
                    <div class="col"><img src="https://loremflickr.com/100/100" width="100" height="100"></div>
                  <div class="col"><h4 class="fw-bold">Product</h4><p class="p-0">IDR 300.000<br>Qty : 5</p></div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div class="col d-flex flex-row-reverse">
            <div class="align-self-center text-black-50">
              <span>Hapus</span> <span class="material-icons inline-icon">&#xe5cd;</span>
            </div>
          </div>
      </div>
      <div class="row mt-4">
        <div class="col-10">
            <div class="form-check">
              <div class="d-flex align-items-center">
                <input class="form-check-input check" type="checkbox" value="" id="3">
                <label class="form-check-label" for="3">
                  <div class="row ps-2">
                    <div class="col"><img src="https://i.pravatar.cc" width="100" height="100"></div>
                  <div class="col"><h4 class="fw-bold">Product</h4><p class="p-0">IDR 300.000<br>Qty : 5</p></div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div class="col d-flex flex-row-reverse">
            <div class="align-self-center text-black-50">
              <span>Hapus</span> <span class="material-icons inline-icon">&#xe5cd;</span>
            </div>
          </div>
      </div>
      <div class="pt-4">
      <input class="btn btn-primary" type="submit" value="Check Out">
      <input class="btn btn btn-outline-danger mx-3" type="reset" value="Hapus">
      </div>
    </div>
  </div>
  <CartWishlistSection />
</div>

</template>

<script>

import CartWishlistSection from '@/components/CartWishlistSection.vue'

export default {
    name: "CartView",
    component: { CartWishlistSection },
    data() {
        return {
            selectAll: false
        };
    },
    methods: {
        toggleAllCheckboxes() {
            const checkboxes = document.querySelectorAll(".check");
            checkboxes.forEach((checkbox) => {
                checkbox.checked = this.selectAll;
            });
        }
    },
    components: { CartWishlistSection }
}
</script>
<style scoped>
@media (max-width: 766px) {
    .home {
        padding-top: 145px;
    }
}
.inline-icon {
  display: inline-flex;
  vertical-align: top;
}
.dot {
  width: 10px;
  height: 10px;
  background-color: gray;
  border-radius: 5px;
}

img.card-img-top {
    border-radius: 15px 15px 0 0;
}

.card {
    border-radius: 15px;
    width: 100%;
}

</style>