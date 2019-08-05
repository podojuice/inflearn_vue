import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import createListView from '../views/CreateListView.js';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/news'
        },

        {
            // url 주소
            path: '/news',
            // url 주소에 접근했을 때 보여줄 컴포넌트
            // component: NewsView,
            component: createListView('NewsView'),
            name: 'news',

        },
        {
            path: '/ask',
            // component: AskView,
            component: createListView('AskView'),
            name: 'ask',

        },
        {
            path: '/jobs',
            // component: JobsView,
            component: createListView('JobsView'),
            name: 'jobs',
        },
        {
            path: '/user/:id',
            component: UserView,
            name: 'user',

        },
        {
            path: '/item/:id',
            component: ItemView,
            name: 'item',

        },



    ]
});