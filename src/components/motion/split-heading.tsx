"use client";

import type { ElementType, ReactNode } from "react";
import { useRef } from "react";
import { gsap, motion, SplitText, useGSAP } from "@/lib/gsap";

type SplitHeadingProps = {
  as?: "h1" | "h2";
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "hero" | "section";
};

export default function SplitHeading({ as = "h2", children, className, id, variant = "section" }: SplitHeadingProps) {
  const headingRef = useRef<HTMLElement | null>(null);
  const Tag = as as ElementType;

  useGSAP(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const media = gsap.matchMedia();
    media.add(
      {
        desktop: "(min-width: 781px) and (hover: hover)",
        touch: "(max-width: 780px), (hover: none)",
        reduced: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        if (context.conditions?.reduced) return;

        const desktop = Boolean(context.conditions?.desktop);
        const split = SplitText.create(heading, {
          type: "lines",
          linesClass: "split-line++",
          mask: "lines",
          autoSplit: true,
          aria: "none",
          onSplit(self) {
            return gsap.from(self.lines, {
              autoAlpha: 0,
              yPercent: variant === "hero" ? 108 : 55,
              duration: variant === "hero" ? motion.duration.hero : motion.duration.heading,
              stagger: variant === "hero" ? motion.stagger.hero : motion.stagger.heading,
              ease: variant === "hero" ? motion.ease.intro : motion.ease.standard,
              clearProps: "opacity,visibility,transform",
              ...(variant === "section" ? {
                scrollTrigger: { trigger: heading, start: "top 88%", once: true },
              } : {}),
            });
          },
        });

        if (desktop && variant === "section") {
          gsap.to(heading, {
            yPercent: -5,
            ease: motion.ease.parallax,
            scrollTrigger: {
              trigger: heading,
              start: "top bottom",
              end: "bottom top",
              scrub: motion.duration.parallax,
            },
          });
        }

        return () => split.revert();
      },
    );

    return () => media.revert();
  }, { scope: headingRef, dependencies: [variant], revertOnUpdate: true });

  return <Tag ref={headingRef as never} className={className} id={id}>{children}</Tag>;
}
