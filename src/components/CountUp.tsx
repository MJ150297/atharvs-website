"use client";

import { useState, useEffect, useRef } from "react";

export default function CountUp({
  from = 0,
  to,
  duration = 2000,
}: {
  from?: number;
  to: number;
  duration?: number;
}) {
  const [count, setCount] = useState(from);
  const [started, setStarted] = useState(false);
  const startTime = useRef<number>(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    startTime.current = performance.now();
    const frame = (now: number) => {
      const elapsed = now - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(from + (to - from) * progress));
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [started, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}
