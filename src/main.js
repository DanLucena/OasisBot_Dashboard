import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import './assets/css/main.css';

Vue.use(Vuetify);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
