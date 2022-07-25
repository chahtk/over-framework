import Vue from "vue";
import instance from "@/interface";
import App from "../components/index.vue";

Vue.config.productionTip = false;

globalThis.vueInstance = instance("vue", App, "main");
