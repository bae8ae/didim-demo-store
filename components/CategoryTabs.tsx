"use client";

import { categories } from "@/data/products";

type CategoryTabsProps = {
  selected: string;
  onSelect: (category: string) => void;
};

export default function CategoryTabs({ selected, onSelect }: CategoryTabsProps) {
  return (
    <div className="scrollbar-none flex gap-2 overflow-x-auto py-5" role="tablist">
      {categories.map((category) => {
        const active = selected === category;

        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onSelect(category)}
            className={`shrink-0 rounded-lg border px-4 py-2 text-sm font-bold transition ${
              active
                ? "border-didim-ink bg-didim-ink text-white"
                : "border-[#ead8ba] bg-white text-didim-brown hover:bg-didim-cream"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
