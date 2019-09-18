const state = {
    name:'ght'
};

const getters = {
    getName:(state)=>{
        return state.name;
    }
}

const mutations = {
    SET_NAME:(state,payload)=>{
        state.name = payload;
    }
}

const actions = {
    updateName:({commit},payload)=>{
        commit('SET_NAME',payload)
    }
}

const userModule = {
    state,
    getters,
    mutations,
    actions
}

export default userModule;