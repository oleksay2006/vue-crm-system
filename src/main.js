import Vue from 'vue';
import Vuelidate from 'vuelidate';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import App from './App.vue';
import Loader from './components/app/Loader.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'materialize-css/dist/js/materialize.min';
import dateFilter from '@/filters/date.filter';
import currencyFilter from '@/filters/currency.filter';
import 'materialize-css';

// import messagePlugin from ' @/utils/message.plugin.js'

Vue.config.productionTip = false;
Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.use(Vuelidate);
Vue.component('Loader', Loader);

const firebaseConfig = {
  apiKey: 'AIzaSyDB7X4d1b79obqPlnrgkuzSh0hKtiQ8xYw',
  authDomain: 'vue-crm-d0d2b.firebaseapp.com',
  projectId: 'vue-crm-d0d2b',
  storageBucket: 'vue-crm-d0d2b.appspot.com',
  messagingSenderId: '49982493637',
  appId: '1:49982493637:web:548e992e70a5ea892db1ac',
};

// const firebaseApp = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
