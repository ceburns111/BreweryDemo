import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Menubar from "primevue/menubar";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import Card from "primevue/card";
import Message from "primevue/message";
import Dropdown from "primevue/dropdown";
import "primevue/resources/themes/arya-blue/theme.css";
import "./assets/main.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import VueGoogleMaps from '@fawmi/vue-google-maps'

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.component("InputText", InputText);
app.component("PvButton", Button);
app.component("PvMenubar", Menubar);
app.component("PvColumn", Column);
app.component("PvDataTable", DataTable);
app.component("PvCard", Card);
app.component("PvMessage", Message);
app.component("PvDropdown", Dropdown);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBiW6JjserHXkmD27zDB8eRB-DP_X44Gfo",
  },
});
app.mount("#app");
