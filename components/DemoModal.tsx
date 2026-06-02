"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

type DemoModalProps = {
  open: boolean;
  actionLabel: string;
  onClose: () => void;
};

export default function DemoModal({ open, actionLabel, onClose }: DemoModalProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-didim-ink/55 px-4 py-4 backdrop-blur-sm sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
    >
      <div className="w-full max-w-md rounded-lg bg-white p-5 shadow-soft">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-didim-amber">
              Demo Notice
            </p>
            <h2 id="demo-modal-title" className="mt-2 text-xl font-black text-didim-ink">
              {actionLabel}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="데모 안내 모달 닫기"
            className="rounded-lg border border-[#ead8ba] p-2 text-didim-brown transition hover:bg-didim-ivory"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <p className="mt-5 rounded-lg bg-didim-cream p-4 text-sm font-bold leading-6 text-didim-brown">
          이 페이지는 학교 과제용입니다. 실제 결제는 진행되지 않습니다.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="mt-5 w-full rounded-lg bg-didim-ink px-4 py-3 text-sm font-black text-white transition hover:bg-didim-brown"
        >
          확인했습니다
        </button>
      </div>
    </div>
  );
}
