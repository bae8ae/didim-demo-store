"use client";

import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

type ImageFrameProps = {
  src: string;
  alt: string;
  label: string;
  ratio?: string;
  className?: string;
};

export default function ImageFrame({
  src,
  alt,
  label,
  ratio = "aspect-[4/5]",
  className = ""
}: ImageFrameProps) {
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setImageFailed(false);
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-white/70 bg-gradient-to-br from-white via-didim-cream to-[#ead8ba] ${ratio} ${className}`}
    >
      {!imageFailed ? (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 z-10 h-full w-full object-cover"
          onError={() => setImageFailed(true)}
        />
      ) : null}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(255,248,236,0.78)_44%,rgba(242,176,75,0.18))]" />
        <div className="relative flex h-40 w-40 items-center justify-center sm:h-52 sm:w-52">
          <span className="absolute h-28 w-14 rotate-0 rounded-full border border-white/70 bg-white/35 shadow-glow backdrop-blur-sm sm:h-36 sm:w-16" />
          <span className="absolute h-28 w-14 rotate-60 rounded-full border border-white/70 bg-white/35 shadow-glow backdrop-blur-sm sm:h-36 sm:w-16" />
          <span className="absolute h-28 w-14 -rotate-60 rounded-full border border-white/70 bg-white/35 shadow-glow backdrop-blur-sm sm:h-36 sm:w-16" />
          <span className="absolute h-16 w-16 rounded-full border border-didim-glow/50 bg-didim-glow/20 blur-[1px]" />
          <Sparkles className="relative h-9 w-9 text-didim-amber" aria-hidden="true" />
        </div>
      </div>
      <div className="absolute inset-x-4 bottom-4 z-20 rounded-lg border border-white/70 bg-white/75 px-4 py-3 text-sm font-semibold text-didim-brown shadow-soft backdrop-blur">
        {label}
      </div>
    </div>
  );
}
