import axios from 'axios';

// 기본 request & response에 대한 기본 설정을 먼저.


const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// 그리고 API 함수를 정리.

function fetchNewsList() {
    return axios.get(`${config.baseUrl}news/1.json`)
}

function fetchJobList() {
    return axios.get(`${config.baseUrl}jobs/1.json`)
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`)
}

function fetchList(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`)
}

function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`)
}

function fetchItem(askId) {
    return axios.get(`${config.baseUrl}item/${askId}.json`)
}



export {
    fetchNewsList,
    fetchAskList,
    fetchJobList,
    fetchUserInfo,
    fetchItem,
    fetchList
}