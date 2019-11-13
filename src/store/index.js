import Vue from "vue";
import Vuex from "vuex"
import classify from "./classify"
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        classify
    }
})