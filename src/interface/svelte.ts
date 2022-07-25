const svelteInstance = (App: any, rootId: string) => {
  const rootElement = document.getElementById(rootId);

  let instance: any;

  return {
    mount: function () {
      if (!rootElement) {
        console.error("there is no root for vue App");
        return;
      }
      instance = new App({
        target: rootElement,
      });
    },
    unmount: function () {
      if (instance) {
        instance.$destroy();
      }
    },
  };
};

export default svelteInstance;
