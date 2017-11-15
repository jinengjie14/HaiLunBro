import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        auth: false
    },
    mutations: {
        authLogin (state) {
            state.auth = true;
        },
        authLogout (state) {
            state.auth = false;
        }
    },
    getters: {
        getAuthState: state => {
            return state.auth;
        }
    }
});