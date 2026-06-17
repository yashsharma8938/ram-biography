"use client";
export default function GlassCard({ children, className = "", hover = true }: { children: React.ReactNode; className?: string; hover?: boolean }) {
  return (
    <div className={`museum-card rounded-lg p-8 ${hover ? "" : "hover:transform-none"} ${className}`}>
      {children}
    </div>
  );
}
