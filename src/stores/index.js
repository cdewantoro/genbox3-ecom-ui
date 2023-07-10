import { createStore } from "vuex";
import axios from "axios";

export const store = createStore({
  state() {
    return {
      isAuth: typeof localStorage.tokenAccess !== "undefined",
      token: localStorage.tokenAccess
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
    async login({ commit }, credentials) {
      await axios
        .post("http://127.0.0.1:8000/api/login", credentials)
        .then((response) => {
          const token = response.data.token;
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          commit("login", token);
          console.log(response.data.status);
        })
        .catch((e) => {
          console.log(e.response.data.message);
        });
    },
    async logout({ commit }) {
        axios
          .post("/logout")
          .then((response) => {
            const token = response.data.token;
            commit("logout", token);
          })
          .catch((error) => {
            console.error(error);
          });
    },
  },
});
