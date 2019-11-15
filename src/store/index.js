import Vue from "vue";
import Vuex from "vuex"
import classify from "./classify"
import city from "./city"
import car from "./car"
Vue.use(Vuex)


export default new Vuex.Store({
    modules:{
        classify,
        city,
        car,
    }
})
