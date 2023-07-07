<template>
  <div style="padding-top: 170px;padding-bottom:100px;">
  <div class="shadow px-3 py-5 mb-5 bg-body rnd-075">
    <div class="container">
      <div class="row">
        <div class="col-10">
            <div class="form-check">
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
                  <div class="col"><h4>Product</h4><p class="p-0">IDR 300.000<br>Qty : 5</p></div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div class="col d-flex flex-row-reverse">
            <div class="align-self-center">
              <a href="#">Hapus<span class="material-icons inline-icon">&#xe5cd;</span></a>
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
                  <div class="col"><h4>Product</h4><p class="p-0">IDR 300.000<br>Qty : 5</p></div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div class="col d-flex flex-row-reverse">
            <div class="align-self-center">
              <a href="#">Hapus<span class="material-icons inline-icon">&#xe5cd;</span></a>
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
                  <div class="col"><h4>Product</h4><p class="p-0">IDR 300.000<br>Qty : 5</p></div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div class="col d-flex flex-row-reverse">
            <div class="align-self-center">
              <a href="#">Hapus<span class="material-icons inline-icon">&#xe5cd;</span></a>
            </div>
          </div>
      </div>
      <div class="pt-4">
      <input class="btn btn-primary" type="submit" value="Check Out">
      <input class="btn btn btn-outline-danger mx-3" type="reset" value="Hapus">
      </div>
    </div>
  </div>
  <div class="WishlistCtn">
    <div class="d-flex mb-2">      
      <h1 class="">Wishlist</h1>
      <span class="material-symbols-outlined pt-3">fiber_manual_record</span>
      <span class="material-symbols-outlined pt-3">fiber_manual_record</span>
      <span class="material-symbols-outlined pt-3">fiber_manual_record</span>
    </div>
    <div class="d-flex">
      <div class="card rnd-075 me-3" style="width: 13rem;">
        <img src="https://picsum.photos/100" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Product</h5>
          <p class="card-text">Rp. 300.000,00</p>
          <a href="#" class="btn btn-primary px-5 me-3">Beli</a><span class="material-symbols-outlined inline-icon fs-2">favorite</span>
        </div>
      </div>
      <div class="card rnd-075 me-3" style="width: 13rem;">
        <img src="https://loremflickr.com/100/100" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Product</h5>
          <p class="card-text">Rp. 300.000,00</p>
          <a href="#" class="btn btn-primary px-5 me-3">Beli</a><span class="material-symbols-outlined inline-icon fs-2">favorite</span>
        </div>
      </div>
      <div class="card rnd-075 me-3" style="width: 13rem;">
        <img src="https://picsum.photos/100" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Product</h5>
          <p class="card-text">Rp. 300.000,00</p>
          <a href="#" class="btn btn-primary px-5 me-3">Beli</a><span class="material-symbols-outlined inline-icon fs-2">favorite</span>
        </div>
      </div>
      <div class="card rnd-075 me-3" style="width: 13rem;">
        <img src="https://loremflickr.com/100/100" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Product</h5>
          <p class="card-text">Rp. 300.000,00</p>
          <a href="#" class="btn btn-primary px-5 me-3">Beli</a><span class="material-symbols-outlined inline-icon fs-2">favorite</span>
        </div>
      </div>
      <div class="card rnd-075 me-3" style="width: 13rem;">
        <img src="https://picsum.photos/100" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Product</h5>
          <p class="card-text">Rp. 300.000,00</p>
          <a href="#" class="btn btn-primary px-5 me-3">Beli</a><span class="material-symbols-outlined inline-icon fs-2">favorite</span>
        </div>
      </div>

    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'CartView',
  data() {
    return {
      selectAll: false
    };
  },
  methods: {
    toggleAllCheckboxes() {
      const checkboxes = document.querySelectorAll('.check');
      checkboxes.forEach((checkbox) => {
        checkbox.checked = this.selectAll;
      });
    }
  }
}
</script>
<style scoped>
.inline-icon {
  display: inline-flex;
  vertical-align: top;
}
</style>