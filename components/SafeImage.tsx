"use client";

import { useState } from "react";

type SafeImageProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
  fallbackLabel?: string;
};

export default function SafeImage({
  src,
  alt,
  className = "",
  fallbackClassName = "",
  fallbackLabel = "DIDIM"
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-end overflow-hidden bg-gradient-to-br from-[#3a2b21] via-[#c9852e] to-[#fff1c2] ${className} ${fallbackClassName}`}
      >
        <div className="w-full bg-black/20 p-4 text-white backdrop-blur-sm">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/76">
            Image Placeholder
          </p>
          <p className="mt-1 text-lg font-black">{fallbackLabel}</p>
        </div>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}
