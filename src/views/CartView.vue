<template>
  <div>
    <h1>This is an cart page</h1>
    <div class="container">
      <div class="row">
        <div class="col-10">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" v-model="selectAll" @change="toggleAllCheckboxes" id="selectAll">
              <label class="form-check-label" for="selectAll">All Product</label>
            </div>
          </div>
        <div class="col"></div>
      </div>
      <div class="row mt-4">
        <div class="col-10">
            <div class="form-check">
              <input class="form-check-input check" type="checkbox" value="" id="1">
              <label class="form-check-label" for="1"><div class="row"><div class="col ps-2 pe-0"><img src="https://picsum.photos/100" width="100" height="100"></div>
                <div class="col ps-2"><h4>Product</h4><p class="p-0">IDR 300.000<br>Qty : 5</p></div></div></label>
            </div>
          </div>
          <div class="col d-flex flex-row-reverse"><div class="align-self-center"><a href="#">Hapus<span class="material-icons inline-icon">&#xe5cd;</span></a></div></div>
      </div>
      <div class="row mt-4">
        <div class="col-10">
            <div class="form-check">
              <input class="form-check-input check" type="checkbox" value="" id="2">
              <label class="form-check-label" for="2"><div class="row"><div class="col ps-2 pe-0"><img src="https://loremflickr.com/100/100" width="100" height="100"></div>
                <div class="col ps-2"><h4>Product</h4><p class="p-0">IDR 300.000<br>Qty : 5</p></div></div></label>
            </div>
          </div>
        <div class="col d-flex flex-row-reverse"><div class="align-self-center"><a href="#">Hapus<span class="material-icons inline-icon">&#xe5cd;</span></a></div></div>
      </div>
      <div class="row mt-4">
        <div class="col-10">
            <div class="form-check">
              <input class="form-check-input check" type="checkbox" value="" id="3">
              <label class="form-check-label" for="3"><div class="row"><div class="col ps-2 pe-0"><img src="https://i.pravatar.cc" width="100" height="100"></div>
                <div class="col ps-2"><h4>Product</h4><p class="p-0">IDR 300.000<br>Qty : 5</p></div></div></label>
            </div>
          </div>
          <div class="col d-flex flex-row-reverse"><div class="align-self-center"><a href="#">Hapus<span class="material-icons inline-icon">&#xe5cd;</span></a></div></div>
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
.ctnCart {
    border-radius: 0.75rem;
    margin-top: 170px;
}
.inline-icon {
  display: inline-flex;
  vertical-align: top;
}
</style>