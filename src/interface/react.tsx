import React from "react";
import ReactDom from "react-dom/client";

const reactInstance = (App: () => JSX.Element, rootId: string, router: any) => {
  const rootElement = document.getElementById(rootId);
  let instance: any;
  const create = () => {
    instance = ReactDom.createRoot(rootElement!);
  };
  create();

  return {
    mount: function () {
      create();
      instance!.render(<App />);
    },
    unmount: function () {
      instance.unmount();
    },
  };
};

export default reactInstance;
