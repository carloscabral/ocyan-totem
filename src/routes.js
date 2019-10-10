import Home from './components/Home.vue';
import Dashboard from './components/Dashboard.vue'
import News from './components/News.vue'
import Politics from './components/Politics.vue'
import NewsDetail from './components/NewsDetail.vue'
import VueRouter from '../node_modules/vue-router';


export const routes = [
    { path: '/', component: Home, children: [
        { path: '', component: Dashboard, name: 'dashboard' },
        { path: '/noticias', component: News, name: 'news' },
        { path: '/politicas', component: Politics, name: 'politics' },
        { path: '/noticias/:id', component: NewsDetail, name: 'newsDetail' },
        { path: '*', redirect: '/'}
    ]}
]