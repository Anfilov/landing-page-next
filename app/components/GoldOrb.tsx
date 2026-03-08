"use client";

interface GoldOrbProps {
  className?: string;
  size?: number;
  delay?: number;
}

export default function GoldOrb({
  className = "",
  size = 400,
  delay = 0,
}: GoldOrbProps) {
  return (
    <div
      className={`gold-orb pointer-events-none absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        animationDelay: `${delay}s`,
      }}
    />
  );
}
