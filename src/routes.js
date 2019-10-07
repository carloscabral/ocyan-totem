import Home from './components/Home.vue';
import Dashboard from './components/Dashboard.vue'
import News from './components/News.vue'
import NewsDetail from './components/NewsDetail.vue'


export const routes = [
    { path: '/', component: Home, children: [
        { path: '', component: Dashboard },
        { path: '/noticias', component: News },
        { path: '/noticias/:id', component: NewsDetail },
    ]}
]