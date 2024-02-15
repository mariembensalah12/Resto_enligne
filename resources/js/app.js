import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-green/theme.css'
import App from './App.vue'
import store from "./store"
import "@fortawesome/fontawesome-free/css/all.css";

const app = createApp(App);

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
router.beforeEach(async (to, from, next) => {
    if (to.matched.some(record => record.meta.isAuth)) {
    let token = localStorage.getItem('token');
    if (!token) {
    next("/login");
    } else {
    console.log(token);
    next(); // Mettre next() ici après avoir vérifié
    
   
    }
    } else {
    next(); // Mettre next() ici si la route n'a pas besoin
    
    }
    });
   


app.use(router);
app.use(store);
app.use(PrimeVue);

app.mount("#app");
