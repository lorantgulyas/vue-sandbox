import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import AuthHandler from './components/AuthHandler';
import store from './store';

Vue.use(VueRouter);

const router = new VueRouter({
  // NOTE: To use BrowserRouter. By defaults it's HashRouter
  mode: 'history',
  routes: [
    {
      path: '/oauth2/callback',
      component: AuthHandler
    }
  ]
});

new Vue({
  store: store,
  router: router,
  render: h => h(App)
}).$mount('#app');
