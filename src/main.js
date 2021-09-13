import Vue from "vue";
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from "./App.vue";
import routes from './routes';
import './index.css'

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  routes:routes,
  mode:'history'
})

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
