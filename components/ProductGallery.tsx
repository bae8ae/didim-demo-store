"use client";

import { useEffect, useState } from "react";
import ImageFrame from "./ImageFrame";

export type ProductImage = {
  src: string;
  alt: string;
  label: string;
};

type ProductGalleryProps = {
  images: ProductImage[];
};

type GalleryThumbnailProps = {
  image: ProductImage;
  isSelected: boolean;
  onSelect: () => void;
};

function GalleryThumbnail({ image, isSelected, onSelect }: GalleryThumbnailProps) {
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setImageFailed(false);
  }, [image.src]);

  return (
    <button
      type="button"
      aria-label={`${image.label} 이미지 보기`}
      aria-pressed={isSelected}
      onClick={onSelect}
      className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border bg-white transition sm:h-24 sm:w-24 ${
        isSelected
          ? "border-didim-amber ring-2 ring-didim-glow/45"
          : "border-[#e5d7c2] hover:border-didim-moss"
      }`}
    >
      {!imageFailed ? (
        <img
          src={image.src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center bg-didim-ivory px-2 text-center text-[11px] font-semibold leading-tight text-didim-brown">
          {image.label}
        </span>
      )}
    </button>
  );
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = images[selectedIndex];

  return (
    <section aria-label="상품 이미지 갤러리" className="space-y-3">
      <ImageFrame
        src={selected.src}
        alt={selected.alt}
        label={selected.label}
        ratio="aspect-[4/5] lg:aspect-square"
        className="shadow-soft"
      />

      <div className="scrollbar-none flex gap-2 overflow-x-auto pb-1" role="list">
        {images.map((image, index) => (
          <GalleryThumbnail
            key={image.src}
            image={image}
            isSelected={index === selectedIndex}
            onSelect={() => setSelectedIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
