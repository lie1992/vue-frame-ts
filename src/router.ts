import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        }, {
            path: '/login',
            name: 'login',
            component: () => import('./views/page/login.vue'),
        }, {
            path: '/store',
            name: 'storeTest',
            component: () => import('./views/page/store-test.vue'),
        },
    ],
});
