import { replaceStyleObject2String } from "@/util/replace";

class NodeRouter extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const STYLE = {
      "background-color": "pink",
      color: "white",
      padding: "4px",
      width: "60px",
      cursor: "pointer",
    };

    const style = replaceStyleObject2String(STYLE);
    this.innerText = "router";
    this.setAttribute("style", style);
    this.addEventListener("click", this.onClick);
  }
  disconnectedCallback() {
    // DOM에서 제거되었다. 엘리먼트를 정리하는 일을 하자.
    this.removeEventListener("click", this.onClick);
  }

  onClick() {
    this.innerHTML += "<node-component>new component</node-compnoent>";
  }
}

customElements.define("node-router", NodeRouter);
