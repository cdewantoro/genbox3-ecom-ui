<template>
  <div class=" d-flex flex-column justify-content-center align-items-center" style="height: 100vh;">
    <div class="position-absolute top-0 start-0 py-4 px-5">
      <router-link to="/" class="d-flex align-items-center gap-2 text-primary" style="text-decoration: none;" id="back">
        <span id="icon" class="material-symbols-outlined">keyboard_backspace</span> <span class="fw-bold">Kembali</span>
      </router-link>
    </div>
    <form @submit.prevent="actionLogin" class="d-flex justify-content-center" style="width: 100%;">
      <div class="login py-3">
        <div class="d-flex gap-2 align-items-center text-primary fs-2 fw-bold mx-5 my-3">
          <span class="material-symbols-outlined fs-2 fw-bold">login</span> <span>Login</span>
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center h-75 mt-3">
          <input class="fs-3 text-center text-secondary border-0" style="height: 50px; width: 80%;" type="email"
            placeholder="Email" v-model="email">
          <hr>
          <input class="fs-3 text-center text-secondary border-0" style="height: 50px; width: 80%;" type="password"
            placeholder="Password" v-model="password">
          <button v-if="!isLoad" type="submit" class="bg-primary text-light fs-4 border-0">Login</button>
          <button v-else class="btn btn-primary py-3" type="button" disabled>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
          </button>
        </div>
      </div>
    </form>
    <div class="mt-5">
      Belum punya akun? <span class="text-primary fw-bold"><router-link to="/register"
          style="text-decoration: none;">Daftar</router-link></span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'LoginView',
  data() {
    return {
      isLoad: false,
      email: '',
      password: '',
    }
  },
  methods: {
    ...mapActions(['login']),
    actionLogin() {
      const credentials = {
        email: this.email,
        password: this.password
      };
      this.isLoad = true;
      console.log(this.isLoad);
      this.login(credentials).then(() => {
        if (this.isAuth) {
          this.$root.showToast('success', 'Berhasil Login!');
          this.$router.push('/');
        } else {
          this.$root.showToast('error', this.authMessage);
        }
        this.isLoad = false;
      });
    }
  },
  computed: {
    ...mapState({
      isAuth: state => state.isAuth,
      authMessage: state => state.authMessage
    })
  }
}

</script>

<style scoped>
hr {
  border: 2px solid;
  width: 80%;
}

button {
  width: 80%;
  margin-top: 20px;
  padding: 10px;
  border-radius: 8px;
}

.login {
  width: 600px;
  height: 400px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 4px 24px 0px rgba(0, 4, 45, 0.15);
}

@media (max-width: 650px) {
  .login {
    width: 100%;
    height: 350px;
  }
}

input:focus {
  outline: none;
}

#back:hover #icon {
  transform: translateX(-10px);
}
</style>