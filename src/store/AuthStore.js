const authModule = {
    namespaced: true,
    state: () => ({
        user:{}
    }),
    mutations: {
        REGISTER_USER(state, user){
            state.user = user;
        },
    },
    actions: {
        registerUser({commit}, data){
            commit('REGISTER_USER', data);
        },
    }
}

export default authModule