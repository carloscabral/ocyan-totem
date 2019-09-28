import Home from './components/Home.vue';
// import Users from './components/Users.vue'
import Dashboard from './components/Dashboard.vue'


export const routes = [
    { path: '/', component: Home, children: [
        { path: '', component: Dashboard }
        // { path: '/usuarios', component: Users }
    ]}
]