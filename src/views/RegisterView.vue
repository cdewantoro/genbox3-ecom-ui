<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
    <div class="container d-flex flex-column align-items-center">
      <div class="login container p-0">
        <div class="row">
            <div class="d-none d-md-block col">
              <img class="img-fluid" src="../assets/img/login-banner.png" alt="login-banner">
            </div>
            <div class="col py-3 ps-5 ps-md-3 pe-5">
              <form class="text-center text-md-start">
                <span class="fw-bold text-primary">Daftar</span>
                <div class="mb-1 mt-2">
                  <label for="username" class="form-label text-primary">Username</label>
                  <input type="text" class="form-control" id="username" required placeholder="Masukkan username">
                </div>
                <div class="mb-1">
                  <label for="email" class="form-label text-primary">Email</label>
                  <input type="email" class="form-control" id="email" required placeholder="Masukkan email">
                </div>
                <div class="mb-1">
                  <label for="password" class="form-label text-primary">Password</label>
                  <input type="password" class="form-control" id="password" required placeholder="Masukkan password">
                </div>
                <div class="mb-1">
                  <label for="konfirmasi" class="form-label text-primary">Konfirmasi</label>
                  <input type="password" class="form-control" id="konfirmasi" required placeholder="Konfirmasi password">
                </div>
                <div class="d-flex d-md-block justify-content-center gap-2 mb-2 pt-2 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1" required>
                  <label class="form-check-label" for="exampleCheck1">I agree</label>
                </div>
                <button type="submit" class="btn btn-primary w-100">Daftar</button>
              </form>
            </div>
          </div>
      </div>
      <div class="mt-3">
        <span class="me-2">Sudah punya akun?</span>
        <router-link to="/login" class="fw-bold">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterView'
}
</script>

<style scoped>
.login {
  height: 400px; 
  background-color: white; 
  border-radius: 15px;
  box-shadow: 0px 4px 24px 0px rgba(0, 4, 45, 0.15);
  overflow: hidden;
}
img {
 object-fit: cover;
}
.form-label {
  font-size: x-small;
}
.form-control {
  height: 30px;
}
input::placeholder {
  font-size: small;
}
.direct {
  top: 1rem;
}

@media screen and (max-width: 767px) {
  input::placeholder {
    text-align: center;
  }
  input {
    text-align: center;
  }
}
@media screen and (min-width: 768px) {
  .login {
    width: 625px;
  }
}
</style>

