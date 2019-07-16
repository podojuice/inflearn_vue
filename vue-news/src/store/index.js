import Vuex from 'vuex';
import Vue from 'vue';
import { fetchNewsList, fetchAskList, fetchJobList } from '../api/index'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: [],
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_ASK(state, ask) {
            state.ask = ask;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        },

    },
    getters: {
        // computed와 동일한 속성, store에 있는것.
        fetchedAsk: state => state.ask
    },
    actions: {
        FETCH_NEWS(context) {
            fetchNewsList()
                .then(res => {
                    context.commit('SET_NEWS', res.data);
                })
                .catch(err => {
                    console.log(err)
                })
        },
        FETCH_ASK(context) {
            fetchAskList()
                .then(res => {
                    context.commit('SET_ASK', res.data);
                })
                .catch(err => {
                    console.log(err)
                })
        },
        FETCH_JOBS({ commit }) {
            fetchJobList()
                .then(res => {
                    commit('SET_JOBS', res.data);
                })
                .catch(err => {
                    console.log(err)
                })
        },

    }

})