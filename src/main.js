import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VeeValidate from "vee-validate";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

import axios from "axios";
// const API_URL = "https://absen-unp.000webhostapp.com/api/";
const API_URL = "http://localhost/laravel/absen-unp/public/api/";

axios.defaults.baseURL = API_URL;

Vue.config.productionTip = false;

// Import and use vue-toasted
import Toasted from "vue-toasted";
import titleMixin from "./mixins/titleMixin";

Vue.mixin(titleMixin);
Vue.use(Toasted);
Vue.use(VeeValidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
