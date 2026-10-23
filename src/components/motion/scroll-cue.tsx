"use client";

import { useRef } from "react";
import { gsap, motion, useGSAP } from "@/lib/gsap";

export default function ScrollCue() {
  const cueRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const cue = cueRef.current;
    if (!cue) return;

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.to(cue, {
        y: 5,
        duration: motion.duration.reveal,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });
    return () => media.revert();
  }, { scope: cueRef });

  return <span ref={cueRef} className="scroll-cue" aria-hidden="true">↓</span>;
}
