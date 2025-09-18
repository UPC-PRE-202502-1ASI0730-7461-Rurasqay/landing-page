import { animate, inView } from "./lib/motion.js";

inView(".hero-content-section-title", (element) => {
  animate(
    element,
    { opacity: 1, x: [-100, 0] },
    {
      duration: 0.9,
      easing: [0.17, 0.55, 0.55, 1],
    },
  );

  return () => animate(element, { opacity: 0, x: -100 });
});

inView(".hero-content-section-description", (element) => {
  animate(
    element,
    { opacity: 1, x: [-100, 0] },
    {
      duration: 0.9,
      easing: [0.17, 0.55, 0.55, 1],
    },
  );

  return () => animate(element, { opacity: 0, x: -100 });
});
