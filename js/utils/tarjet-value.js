import { animate } from "../lib/motion.js";

export default class TargetValue {
  constructor(htmlElement, initialValue, finalValue, duration = 4) {
    this.htmlElement = htmlElement;
    this.initialValue = initialValue;
    this.finalValue = finalValue;
    this.duration = duration; // seconds
  }
  animateValueNumber() {
    animate(this.initialValue, this.finalValue, {
      duration: this.duration,
      ease: "circOut",
      onUpdate: (latest) => (this.htmlElement.innerHTML = Math.round(latest)),
    });
  }
}
