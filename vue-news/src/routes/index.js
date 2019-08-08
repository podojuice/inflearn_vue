import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import createListView from '../views/CreateListView.js';
import bus from '../utils/bus.js'
import { store } from '../store/index.js'

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
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(res => {
                        next();
                    })
                    .catch(err => console.log(err))

            }

        },
        {
            path: '/ask',
            // component: AskView,
            component: createListView('AskView'),
            name: 'ask',
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(res => {
                        next();
                    })
                    .catch(err => console.log(err))

            }

        },
        {
            path: '/jobs',
            // component: JobsView,
            component: createListView('JobsView'),
            name: 'jobs',
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(res => {
                        next();
                    })
                    .catch(err => console.log(err))

            }
        },
        {
            path: '/user/:id',
            component: UserView,
            name: 'user',
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                // console.log(to.params)
                store.dispatch('FETCH_USER', to.params.id)
                    .then(res => {
                        // bus.$emit('end:spinner');
                        next();
                    })
                    .catch(err => console.log(err))

            }

        },
        {
            path: '/item/:id',
            component: ItemView,
            name: 'item',
            beforeEnter: (to, from, next) => {
                bus.$emit("start:spinner");
                next();
            }

        },



    ]
});