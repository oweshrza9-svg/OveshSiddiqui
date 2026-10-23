"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { gsap, motion, useGSAP } from "@/lib/gsap";

type MagneticProps = { children: ReactNode; strength?: number; enabled?: boolean };

// Prepared for later use; current portfolio actions remain standard links and buttons.
export default function Magnetic({ children, strength = 10, enabled = false }: MagneticProps) {
  const elementRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const element = elementRef.current;
    if (!element || !enabled) return;

    const media = gsap.matchMedia();
    media.add("(hover: hover) and (prefers-reduced-motion: no-preference)", () => {
      const moveX = gsap.quickTo(element, "x", { duration: motion.duration.magnetic, ease: motion.ease.standard });
      const moveY = gsap.quickTo(element, "y", { duration: motion.duration.magnetic, ease: motion.ease.standard });
      const move = (event: PointerEvent) => {
        const bounds = element.getBoundingClientRect();
        moveX(((event.clientX - bounds.left) / bounds.width - 0.5) * strength);
        moveY(((event.clientY - bounds.top) / bounds.height - 0.5) * strength);
      };
      const reset = () => { moveX(0); moveY(0); };

      element.addEventListener("pointermove", move);
      element.addEventListener("pointerleave", reset);
      return () => {
        element.removeEventListener("pointermove", move);
        element.removeEventListener("pointerleave", reset);
      };
    });

    return () => media.revert();
  }, { scope: elementRef, dependencies: [enabled, strength], revertOnUpdate: true });

  return <span ref={elementRef} className="magnetic-ready">{children}</span>;
}
