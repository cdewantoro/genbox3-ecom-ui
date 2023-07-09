import { createStore } from "vuex";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const store = createStore({
    state () {
        return {
            isAuth: typeof localStorage.tokenAccess !== 'undefined',
            // token: localStorage.tokenAccess
        }
    },
    mutations: {
        login(state, token) {
            state.isAuth = true
            localStorage.setItem('tokenAccess', token);
        },
        logout(state) {
            state.isAuth = false
            localStorage.removeItem('tokenAccess');
        }
    },
    actions: {
        async login({ commit }, creadential) {
            await sleep(2000);
            if (creadential.username === 'admin' && creadential.pass === '123') {
                commit('login', 'xyz123');
                console.log('login berhasil');
            } else {
                console.log('login gagal');
            }
        },
        async logout({ commit }) {
            await sleep(2000);
            if (this.state.isAuth) {
                commit('logout');
                console.log('logout berhasil');
            } else {
                console.log('logout gagal');
            }
        }
    }
})
