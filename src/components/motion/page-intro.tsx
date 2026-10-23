"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, motion, useGSAP } from "@/lib/gsap";

export default function PageIntro() {
  const [visible, setVisible] = useState(false);
  const introRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setVisible(true);
  }, []);

  useGSAP(() => {
    if (!visible || !introRef.current || !markRef.current) return;

    const timeline = gsap.timeline({ onComplete: () => setVisible(false) });
    timeline.fromTo(markRef.current,
      { autoAlpha: 0, y: 18 },
      { autoAlpha: 1, y: 0, duration: motion.duration.intro * 0.6, ease: motion.ease.intro },
    );
    timeline.to(markRef.current, {
      autoAlpha: 0,
      y: -8,
      duration: motion.duration.intro * 0.4,
      delay: 0.12,
      ease: motion.ease.standard,
    });
  }, { scope: introRef, dependencies: [visible], revertOnUpdate: true });

  if (!visible) return null;

  return (
    <div ref={introRef} className="page-intro" aria-label="devOvi portfolio introduction">
      <div ref={markRef} className="page-intro__mark">
        <span className="wordmark">dev<span>Ovi</span><b>.</b></span>
        <span className="page-intro__counter">PORTFOLIO&nbsp; / &nbsp;2026</span>
      </div>
      <button className="page-intro__skip" type="button" onClick={() => setVisible(false)}>SKIP INTRO</button>
    </div>
  );
}
