export const state = () => ({
    me : null
})

export const mutations = {
    setMe(state , payload){
        state.me = payload
    },
    changeNickname(state,payload){
        state.me.nickname = payload.nickname
    }
}

export const actions = {
    logIn({commit},payload){
        commit('setMe',payload)
    },
    logOut({commit},payload){ 
        commit('setMe',null)
    },
    signUp({commit},payload){
        commit('setMe',payload)
    },
    changeNickname({commit},payload){
        commit('changeNickname',payload)
    }
}