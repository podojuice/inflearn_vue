import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/news',

        },
        {
            // url 주소
            path: '/news',
            // url 주소에 접근했을 때 보여줄 컴포넌트
            component: NewsView,

        },
        {
            path: '/ask',
            component: AskView,

        },
        {
            path: '/jobs',
            component: JobsView,

        },


    ]
});