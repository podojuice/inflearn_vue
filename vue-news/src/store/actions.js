import { fetchNewsList, fetchAskList, fetchJobList, fetchItem, fetchUserInfo } from '../api/index'

export default {
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
    FETCH_USER({ commit }, name) {
        fetchUserInfo(name)
            .then(res => {
                commit('SET_USER', res.data);
            })
            .catch(err => console.log(err))
    },
    FETCH_ITEM({ commit }, askId) {
        fetchItem(askId)
            .then(res => {
                console.log(res.data);
                commit('SET_ITEM', res.data);
            })
            .catch(err => console.log(err))
    }
}