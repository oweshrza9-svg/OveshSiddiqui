"use client";

import type { ElementType, ReactNode } from "react";
import { useRef } from "react";
import { gsap, motion, useGSAP } from "@/lib/gsap";

type RevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function Reveal({ as = "div", children, className, delay = 0 }: RevealProps) {
  const elementRef = useRef<HTMLElement | null>(null);
  const Tag = as;

  useGSAP(() => {
    const element = elementRef.current;
    if (!element) return;

    const media = gsap.matchMedia();
    media.add(
      {
        desktop: "(min-width: 781px) and (hover: hover)",
        touch: "(max-width: 780px), (hover: none)",
        reduced: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        if (context.conditions?.reduced) return;

        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 16 },
          {
            autoAlpha: 1,
            y: 0,
            duration: motion.duration.reveal,
            delay,
            ease: motion.ease.standard,
            clearProps: "opacity,visibility,transform",
            scrollTrigger: { trigger: element, start: "top 94%", once: true },
          },
        );
      },
    );

    return () => media.revert();
  }, { scope: elementRef, dependencies: [delay], revertOnUpdate: true });

  return <Tag ref={elementRef as never} className={className}>{children}</Tag>;
}
