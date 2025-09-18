import { animate, inView } from "./lib/motion.js";

inView(".plan-section-container", () => {
  const elements = document.querySelectorAll(".plan-section-plan");
  elements.forEach((el) => {
    animate(
      el,
      { opacity: 1, y: [50, 0] },
      {
        duration: 1,
        easing: [0.17, 0.55, 0.55, 1],
      },
    );
  });

  return () => {
    elements.forEach((el) => animate(el, { opacity: 0, y: 50 }));
  };
});
