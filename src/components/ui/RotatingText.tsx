"use client";
import { useEffect, useState } from "react";

export default function RotatingText({ texts, interval = 3500 }: { texts: string[]; interval?: number }) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setFade(true);
      }, 600);
    }, interval);
    return () => clearInterval(timer);
  }, [texts, interval]);

  return (
    <span
      className="inline-block transition-all duration-600"
      style={{ opacity: fade ? 1 : 0, transform: fade ? "translateY(0)" : "translateY(10px)" }}
    >
      {texts[index]}
    </span>
  );
}
