"use client";

export default function SacredGeometry({ className = "", size = 400 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 400 400" className={`opacity-[0.03] ${className}`} style={{ animation: "float-gentle 40s ease-in-out infinite" }}>
      {/* Outer circles */}
      <circle cx="200" cy="200" r="180" fill="none" stroke="#a0845c" strokeWidth="0.4" />
      <circle cx="200" cy="200" r="150" fill="none" stroke="#a0845c" strokeWidth="0.25" />
      <circle cx="200" cy="200" r="120" fill="none" stroke="#a0845c" strokeWidth="0.25" />
      {/* Golden triangles — trinity */}
      <polygon points="200,40 340,280 60,280" fill="none" stroke="#a0845c" strokeWidth="0.4" />
      <polygon points="200,360 60,120 340,120" fill="none" stroke="#a0845c" strokeWidth="0.4" />
      {/* Cross lines */}
      <line x1="200" y1="20" x2="200" y2="380" stroke="#a0845c" strokeWidth="0.15" />
      <line x1="20" y1="200" x2="380" y2="200" stroke="#a0845c" strokeWidth="0.15" />
      <circle cx="200" cy="200" r="60" fill="none" stroke="#a0845c" strokeWidth="0.3" />
      {/* Flower of life */}
      <circle cx="290" cy="200" r="90" fill="none" stroke="#a0845c" strokeWidth="0.12" />
      <circle cx="245" cy="277.94" r="90" fill="none" stroke="#a0845c" strokeWidth="0.12" />
      <circle cx="155" cy="277.94" r="90" fill="none" stroke="#a0845c" strokeWidth="0.12" />
      <circle cx="110" cy="200" r="90" fill="none" stroke="#a0845c" strokeWidth="0.12" />
      <circle cx="155" cy="122.06" r="90" fill="none" stroke="#a0845c" strokeWidth="0.12" />
      <circle cx="245" cy="122.06" r="90" fill="none" stroke="#a0845c" strokeWidth="0.12" />
    </svg>
  );
}
