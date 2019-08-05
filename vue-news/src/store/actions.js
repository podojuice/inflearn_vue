import { fetchNewsList, fetchAskList, fetchJobList, fetchItem, fetchUserInfo, fetchList } from '../api/index'

export default {

    FETCH_USER({ commit }, name) {
        return fetchUserInfo(name)
            .then(res => {
                commit('SET_USER', res.data);
            })
            .catch(err => console.log(err))
    },
    FETCH_ITEM({ commit }, askId) {
        return fetchItem(askId)
            .then(({ data }) => {
                commit('SET_ITEM', data);
            })
            .catch(err => console.log(err))
    },
    FETCH_LIST({ commit }, pageName) {
        return fetchList(pageName)
            .then(res => {
                commit('SET_LIST', res.data);
                return res;
            })


    }
}