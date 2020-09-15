export const state = () => ({
    mainPosts:[],
})

export const mutations = {
    addMainPosts(state,payload){
        state.mainPosts.unshift(payload)
    },
    removeMainPosts(state, payload){
        const index = state.mainPosts.findIndex(v => v.id === payload.id)
        state.mainPosts.splice(index , 1) 
    },
    addComment(state , payload){
        console.log(`뮤테이션 에드 커맨트`);
        const index = state.mainPosts.findIndex(v => v.id === payload.postId)
        state.mainPosts[index].Comments.unshift(payload)
        console.log(`state.mainPosts ${state.mainPosts}`);
    }
}

export const actions = {
    add({commit} , payload){
        commit('addMainPosts',payload)
    },
    remove({commit} , payload){
        commit('removeMainPosts',payload)
    },
    addComment({commit} , payload){
        console.log(`addComment !!! ${payload}`)
        commit('addComment',payload)
    }
}