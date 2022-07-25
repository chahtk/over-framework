export type InstanceReturnType = {
  mount: () => void;
  unmount: () => void;
};

export declare global {
  var reactInstance: InstanceReturnType;
  var vueInstance: InstanceReturnType;
  var svelteInstance: InstanceReturnType;

  namespace JSX {
    interface IntrinsicElements {
      "custom-button": any;
    }
  }
}
