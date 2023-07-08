import { createStore } from "vuex";

export const store = createStore({
    state () {
        return {
            isAuth: false,
            token: null
        }
    },
    mutations: {
        login(state, token) {
            state.isAuth = true
            localStorage.setItem('tokenAccess', token);
            state.token = token;
        }
    },
    actions: {
        login({ commit }, creadential) {
            if (creadential.username === 'admin' && creadential.pass === '123') {
                commit('login', 'xyz123');
                console.log('login berhasil');
            } else {
                console.log('login gagal');
            }
        }
    }
})
