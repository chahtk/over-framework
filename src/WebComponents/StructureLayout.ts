import { replaceStyleObject2String } from "@/util/replace";

class StructureLayout extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const STYLE = {
      display: "block",
      width: "600px",
      margin: "0 auto",
      "background-color": "#333",
      color: "white",
      padding: "4px",
      "text-align": "center",
    };

    const style = replaceStyleObject2String(STYLE);
    this.setAttribute("style", style);
  }

  onClick() {
    console.log("clicked router!", this.childNodes);
  }
}

customElements.define("structure-layout", StructureLayout);
