
let state={
    name:"",
    pwd:""
}

let actions={
    handleUser({commit},params){
        commit("handleMutationsUser",params)
    }
}

let mutations={
    handleMutationsUser(state,params){
        state.name=params.name,
        state.pwd=params.pwd
    }
}

export default{
    state,
    actions,
    mutations,
    namespaced:true
}