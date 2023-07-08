<template>
  <div style="padding: 170px 0 170px 0;">
    <div class="shadow p-4 pb-5 mb-5 bg-body rnd-075">
      <div class="container pt-4">
        <div class="row">
          <div class="col-4 d-flex justify-content-center">
            <div class="mt-3">
              <img src="https://loremflickr.com/250/250" class="rounded-circle" width="250">
                <div style="text-align:center" class="mt-3"><h5>Nama</h5><h6>email@gmail.com</h6></div>
            </div>
          </div>
          <div class="col-8">
            <h2>Profile Saya</h2>
            <h6>Kelola informasi profil Anda untuk mengontrol, melindungi dan mengamankan akun</h6>
            <form>
              <div class="row mb-3 pt-5">
                <label for="inputEmail3" class="col-sm-3 col-form-label">Username</label>
                <div class="col-sm-8 pt-1 text-black-50">
                  Echo2411
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputNama" class="col-sm-3 col-form-label">Nama</label>
                <div class="col-sm-8">
                  <input type="email" class="form-control" id="inputNama" placeholder="Nama">
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputNoTelepon" class="col-sm-3 col-form-label">Nomor Telepon</label>
                <div class="col-sm-8">
                  <input type="email" class="form-control" id="inputNoTelepon" placeholder="Nomor Telepon">
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputEmail" class="col-sm-3 col-form-label">Email</label>
                <div class="col-sm-8">
                  <input type="email" class="form-control" id="inputEmail" placeholder="Email">
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputNamaToko" class="col-sm-3 col-form-label">Nama Toko</label>
                <div class="col-sm-8">
                  <input type="email" class="form-control" id="inputNamaToko" placeholder="Nama Toko">
                </div>
              </div>
              <fieldset class="row mb-3">
                <legend class="col-form-label col-sm-3 pt-0">Jenis Kelamin</legend>
                <div class="col-sm-8 d-flex">
                  <div class="form-check pe-3">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                    <label class="form-check-label" for="gridRadios1">
                      Laki-laki
                    </label>
                  </div>
                  <div class="form-check ps-3">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                    <label class="form-check-label" for="gridRadios2">
                      Perempuan
                    </label>
                  </div>
                </div>
              </fieldset>
              <div class="row mb-3">
                <label for="inputTanggalLahir" class="col-sm-3 col-form-label">Tanggal Lahir</label>
                <div class="col-sm-8">
                  <input type="date" id="inputTanggalLahir" class="form-control">
                </div>
              </div>
              <button type="submit" class="btn btn-primary mt-5">Simpan</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileView'
}
</script>
<style scoped>

</style>