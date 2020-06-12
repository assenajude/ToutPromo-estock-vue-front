import Vue from 'vue'
import {BootstrapVue, IconsPlugin} from "bootstrap-vue";
import App from './App.vue'
import router from './router'
import store from './store'
import PortalVue from 'portal-vue'
import Vuelidate from 'vuelidate'
import 'bootstrap'
import jQuery from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import datePicker from 'vue-bootstrap-datetimepicker'
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css'
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/regular.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faPrint, faAngleDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

jQuery.extend(true, jQuery.fn.datetimepicker.defaults, {
  icons: {
    time: 'far fa-clock',
    date: 'far fa-calendar',
    up: 'fas fa-arrow-up',
    down: 'fas fa-arrow-down',
    previous: 'fas fa-chevron-left',
    next: 'fas fa-chevron-right',
    today: 'fas fa-calendar-check',
    clear: 'far fa-trash-alt',
    close: 'far fa-times-circle'
  }
});

library.add(faPrint, faAngleDown)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(PortalVue)
Vue.use(Vuelidate)
Vue.use(require('vue-moment'))
Vue.use(datePicker)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
