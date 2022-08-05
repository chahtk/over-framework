import { replaceStyleObject2String } from "@/util/replace";

class NodeComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const STYLE = {
      "background-color": "orange",
      color: "white",
      padding: "4px",
      width: "60px",
      cursor: "pointer",
    };

    const style = replaceStyleObject2String(STYLE);
    this.setAttribute("style", style);
    this.addEventListener("click", this.addPages);
  }
  disconnectedCallback() {
    // DOM에서 제거되었다. 엘리먼트를 정리하는 일을 하자.
    this.removeEventListener("click", this.addPages);
  }

  addPages() {
    console.log("clicked router!");
  }
}

customElements.define("node-component", NodeComponent);
