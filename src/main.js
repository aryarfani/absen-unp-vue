import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VeeValidate from "vee-validate";
import store from "./store";
import VueTimepicker from "vue2-timepicker/src/vue-timepicker.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

import axios from "axios";
const API_URL = "https://absen-unp.herokuapp.com/api/";
// const API_URL = "http://localhost/laravel/absen-heroku/public/api/";

axios.defaults.baseURL = API_URL;

Vue.config.productionTip = false;

// Import and use vue-toasted
import Toasted from "vue-toasted";
import titleMixin from "./mixins/titleMixin";

Vue.mixin(titleMixin);
Vue.use(Toasted);
Vue.use(VeeValidate);

new Vue({
  components: { VueTimepicker },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
