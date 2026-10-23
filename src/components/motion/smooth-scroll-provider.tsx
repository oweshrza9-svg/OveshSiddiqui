"use client";

import type { ReactNode } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add(
      {
        desktop: "(min-width: 781px) and (hover: hover)",
        touch: "(max-width: 780px), (hover: none)",
        reduced: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        if (context.conditions?.reduced) return;

        const isTouch = Boolean(context.conditions?.touch);
        const lenis = new Lenis({
          autoRaf: false,
          anchors: true,
          smoothWheel: !isTouch,
          syncTouch: false,
        });

        lenis.on("scroll", ScrollTrigger.update);
        const update = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(update);
        gsap.ticker.lagSmoothing(0);
        requestAnimationFrame(() => ScrollTrigger.refresh());

        return () => {
          gsap.ticker.remove(update);
          lenis.destroy();
        };
      },
    );

    return () => media.revert();
  });

  return <>{children}</>;
}
