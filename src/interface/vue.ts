import Vue, { VueConstructor } from "vue";
import VueRouter from "vue-router";
import { CombinedVueInstance } from "vue/types/vue";
import VueYoutube from "vue-youtube";

function vueInstance(App: () => Promise<typeof import("*.vue")>, rootId: string, router?: VueRouter): any;
function vueInstance(App: VueConstructor<Vue>, rootId: string, router?: VueRouter): any;

function vueInstance(App: any, rootId: string, router?: VueRouter) {
  const VUE_ROOT_ID = "vue" + rootId;
  const rootElement = document.getElementById(rootId);

  let vueInstance: undefined | CombinedVueInstance<Vue, object, object, object, Record<never, any>>;

  Vue.use(VueYoutube);
  Vue.config.ignoredElements = ["custom-button"];

  return {
    mount: function () {
      if (!rootElement) {
        console.error("there is no root for vue App");
        return;
      }
      const vueRootElement = document.createElement("div");
      vueRootElement.setAttribute("id", VUE_ROOT_ID);
      rootElement.appendChild(vueRootElement);
      vueInstance = new Vue({
        router,
        render: (h) => h(App),
      }).$mount(vueRootElement);
    },
    unmount: function () {
      if (vueInstance) {
        vueInstance.$destroy();
      }
    },
  };
}

export default vueInstance;
