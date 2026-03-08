"use client";

interface MarqueeStripProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
}

export default function MarqueeStrip({
  items,
  direction = "left",
  speed = 30,
}: MarqueeStripProps) {
  const content = [...items, ...items, ...items, ...items];

  return (
    <div className="marquee-strip overflow-hidden">
      <div
        className={`marquee-track ${direction === "right" ? "marquee-reverse" : ""}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {content.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
