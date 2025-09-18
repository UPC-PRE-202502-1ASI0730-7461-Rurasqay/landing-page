import { inView } from "./lib/motion.js";
import TargetValue from "./utils/tarjet-value.js";

const targetValue1 = new TargetValue(
  document.querySelector(".impact-section-value-1"),
  0,
  85,
);
const targetValue2 = new TargetValue(
  document.querySelector(".impact-section-value-2"),
  0,
  95,
);
const targetValue3 = new TargetValue(
  document.querySelector(".impact-section-value-3"),
  0,
  60,
);

const targetValue4 = new TargetValue(
  document.querySelector(".impact-section-value-4"),
  0,
  24,
);

const targetValue5 = new TargetValue(
  document.querySelector(".impact-section-value-5"),
  0,
  7,
);

const targets = [
  targetValue1,
  targetValue2,
  targetValue3,
  targetValue4,
  targetValue5,
];

function animations() {
  targets.forEach((target) => target.animateValueNumber());
}
inView(".impact-section", () => {
  animations();
});
