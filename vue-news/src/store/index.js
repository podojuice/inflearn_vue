import Vuex from 'vuex';
import Vue from 'vue';
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

export const store = new Vuex.Store({
    // vuex life cycle 봐야함. action -> mutaion -> state. 이렇게 가는거임. acion을 하면, mutaion에서 commit하고, state 설정.

    actions,

    mutations: mutations,
    // 그냥 축약형으로 mutations만 써줘도 동작함

    state: {
        user: {},
        item: {},
        list: [],
    },


    getters: {
        // computed와 동일한 속성, store에 있는것. 이렇게 해서 값을 넘길 수도 있다. view로
        fetchedAsk: state => state.ask,

        fetchedItem(state) {
            return state.item;
        }
    },

})