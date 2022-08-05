import { replaceStyleObject2String } from "@/util/replace";

class CustomButton extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerText = "I'm Custom button";
    const BUTTON_STYLE = {
      border: "1px solid gray",
      padding: "4px",
      cursor: "pointer",
    };
    const styled = replaceStyleObject2String(BUTTON_STYLE);
    this.setAttribute("style", styled);
    this.addEventListener("click", () => alert("wow"));
  }
}

customElements.define("custom-button", CustomButton);
