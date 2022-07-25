import { InstanceReturnType } from "types/global";
import VueRouter from "vue-router";
import reactInstance from "./react";
import vueInstance from "./vue";
import svelteInstance from "./svelte";
import Vue, { VueConstructor } from "vue";

function instance(framework: "react", App: () => JSX.Element, rootId: string): InstanceReturnType;
function instance(
  framework: "vue",
  App: () => Promise<typeof import("*.vue")>,
  rootId: string,
  router?: VueRouter
): InstanceReturnType;
function instance(framework: "vue", App: VueConstructor<Vue>, rootId: string, router?: VueRouter): InstanceReturnType;
function instance(framework: "svelte", App: any, rootId: string, router?: any): InstanceReturnType;

function instance(
  framework: "react" | "vue" | "svelte",
  App: any,
  rootId: string,
  router?: VueRouter
): InstanceReturnType {
  if (framework === "react") {
    return reactInstance(App, rootId, router);
  } else if (framework === "vue") {
    return vueInstance(App, rootId, router);
  } else if (framework === "svelte") {
    return svelteInstance(App, rootId);
  }

  return {
    mount: function () {
      console.error("can't rendering. choose wrong framework.");
    },
    unmount: function () {
      console.error("can't unmount. choose wrong framework.");
    },
  };
}

export default instance;
