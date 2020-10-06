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

Vue.mixin({
  data: function() {
    return {
      MasterEnabled: false
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
