<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
    <div class="container d-flex flex-column align-items-center">
      <div class="login container d-flex justify-content-center align-items-center">
        <form>
          <div class="mb-1">
            <input type="text" class="form-control border-0" id="username" required placeholder="Masukkan username">
          </div>
          <hr>
          <div class="mb-1">
            <input type="password" class="form-control border-0" id="password" required placeholder="Masukkan password">
          </div>
          <button type="submit" class="btn btn-primary w-100 mt-3">Login</button>
        </form>
      </div>
      <div class="mt-5">
        <span class="me-2">Belum punya akun?</span>
        <router-link to="/register" class="fw-bold">Daftar</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView'
}
</script>

<style scoped>
.login {
  width: 400px; 
  height: 400px; 
  background-color: white; 
  border-radius: 15px;
  box-shadow: 0px 4px 24px 0px rgba(0, 4, 45, 0.15);
  overflow: hidden;
}
hr {
  height: 2px;;
}
input {
  text-align: center;
}
input::placeholder {
  text-align: center;
}
</style>