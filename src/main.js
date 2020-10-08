import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTablerIcons from 'vue-tabler-icons';
import ToggleButton from 'vue-js-toggle-button'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.config.productionTip = false
Vue.use(VueTablerIcons);
Vue.use(ToggleButton);
Vue.use(VueAxios, axios);

const MasterEnabled = Vue.observable({
  locked: false,
  
  lock () {
    MasterEnabled.locked = !MasterEnabled.locked;
  },

});

Vue.prototype.$pluginLocker = MasterEnabled;

new Vue({
  router,
  watch: {
    '$pluginLocker.locked' () {
      return
    }
  },
  render: h => h(App)
}).$mount('#app')
