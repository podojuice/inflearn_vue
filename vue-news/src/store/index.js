import Vuex from 'vuex';
import Vue from 'vue';

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: [],
    },
    mutations: mutations,
    // 그냥 축약형으로 mutations만 써줘도 동작함
    getters: {
        // computed와 동일한 속성, store에 있는것.
        fetchedAsk: state => state.ask
    },
    actions,

})