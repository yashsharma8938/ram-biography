"use client";
import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({ end, suffix = "", duration = 2000, label }: { end: number; suffix?: string; duration?: number; label: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="heading-cormorant text-5xl md:text-6xl font-light text-teal mb-2">
        {count}{suffix}
      </div>
      <div className="text-label">{label}</div>
    </div>
  );
}
