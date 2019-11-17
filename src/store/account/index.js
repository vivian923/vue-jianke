
let state={
    name:sessionStorage.getItem("username")||"",
    
}

let actions={
    handleUser({commit},params){
        commit("handleMutationsUser",params)
    }
}

let mutations={
    handleMutationsUser(state,params){
        state.name=params
        sessionStorage.setItem("username",params)
    }
}

export default{
    state,
    actions,
    mutations,
    namespaced:true
}