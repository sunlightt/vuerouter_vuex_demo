import Vue from 'vue';
import Vuex from 'vuex';
import userModule from './module/user.js';

Vue.use(Vuex);

const state = {
    theme:'light'
}

const getters = {
    getTheme:(state)=>{
        return state.theme;
    }
}

const mutations = {
    SET_THEME:(state,data)=>{
        state.theme = data;
    }
}

const actions = {
    changeTheme:({commit},data)=>{
        commit('SET_THEME',data)
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules:{
        userModule
    }
});

export default store;



