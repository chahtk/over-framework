declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "*.svelte" {
  export { SvelteComponentDev as default } from "svelte/internal";
}

declare module "storybook-vue-router";
declare module "vue-youtube";
declare module "js-cookie";
