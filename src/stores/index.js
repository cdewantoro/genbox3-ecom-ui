import { createStore } from "vuex";
import axios from "axios";

export const store = createStore({
  state() {
    return {
      isAuth: typeof localStorage.tokenAccess !== "undefined",
      token: localStorage.tokenAccess,
      authMessage: ''
    };
  },
  mutations: {
    login(state, token) {
      state.isAuth = true;
      localStorage.setItem("tokenAccess", token);
    },
    logout(state) {
      state.isAuth = false;
      localStorage.removeItem("tokenAccess");
    },
  },
  actions: {
    async regis(context, data) {
      await axios
        .post("/register", data)
        .then((response) => {
          context.state.authMessage = response.data.message;
        })
        .catch((e) => {
          context.state.authMessage = e.response.data.message;
        });
    },
    async login({ commit }, credentials) {
      await axios
        .post("/login", credentials)
        .then((response) => {
          const token = response.data.token;
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          commit("login", token);
          this.state.authMessage = response.data.status;
        })
        .catch((e) => {
          this.state.authMessage = e.response.data.message;
        });
    },
    async logout({ commit }) {
        await axios
          .post("/logout")
          .then((response) => {
            const token = response.data.token;
            commit("logout", token);
            this.state.authMessage = response.data.message;
          })
          .catch((error) => {
            console.error(error);
          });
    },
  },
});
