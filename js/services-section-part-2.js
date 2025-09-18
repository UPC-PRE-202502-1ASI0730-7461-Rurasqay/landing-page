import { animate, inView } from "./lib/motion.js";

inView(".meditrack-device-image", (element) => {
  animate(
    element,
    { opacity: 1 },
    {
      duration: 0.9,
      easing: [0.17, 0.55, 0.55, 1],
    },
  );

  return () => animate(element, { opacity: 0 });
});

inView(".meditrack-device-feature-container", () => {
  const elements = document.querySelectorAll(".meditrack-device-feature");
  elements.forEach((el) => {
    animate(
      el,
      { opacity: 1, x: [50, 0] },
      {
        duration: 1,
        easing: [0.17, 0.55, 0.55, 1],
      },
    );
  });

  return () => {
    elements.forEach((el) => animate(el, { opacity: 0, x: 50 }));
  };
});
