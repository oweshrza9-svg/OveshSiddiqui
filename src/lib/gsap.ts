import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export const motion = {
  duration: {
    intro: 0.7,
    hero: 0.92,
    heading: 0.72,
    reveal: 0.58,
    parallax: 1,
    magnetic: 0.38,
  },
  ease: {
    standard: "power3.out",
    intro: "power4.out",
    parallax: "none",
  },
  stagger: {
    hero: 0.11,
    heading: 0.055,
    reveal: 0.07,
  },
} as const;

export { gsap, ScrollTrigger, SplitText, useGSAP };
