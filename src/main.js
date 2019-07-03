import Vue from "vue";
import "./plugins/fontawesome";
import VueTypedJs from "vue-typed-js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import { fb } from "./firebase";

library.add(faUserSecret);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueTypedJs);

let app = "";

//this function work as when there is a user signed it, it will remember and will not redirect to main page /
fb.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
