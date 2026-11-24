"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const shots = [
  {
    src: "/img/screenshot-2.png",
    alt: "Creatr app",
    className: "md:col-span-3",
    priority: true,
  },
  {
    src: "/img/screenshot-1.png",
    alt: "0% commission",
    className: "md:col-span-2",
    priority: false,
  },
];

export default function ScreenshotShowcase() {
  const [active, setActive] = useState<(typeof shots)[number] | null>(null);

  const close = useCallback(() => {
    if (window.history.state?.shot) window.history.back();
    else setActive(null);
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    if (!active) return;
    if (!window.history.state?.shot) {
      window.history.pushState({ shot: true }, "");
    }
    document.addEventListener("keydown", handleKey);
    const onPop = () => setActive(null);
    window.addEventListener("popstate", onPop);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      window.removeEventListener("popstate", onPop);
      document.body.style.overflow = "";
    };
  }, [active, close]);

  return (
    <>
      <div id="preview" className="relative grid scroll-mt-24 gap-8 md:grid-cols-5">
        {shots.map((shot) => (
          <button
            key={shot.src}
            onClick={() => setActive(shot)}
            className={`group relative block aspect-[4/5] cursor-zoom-in overflow-hidden rounded-3xl border-2 border-ink bg-paper text-left shadow-brutal-lg transition-transform duration-200 hover:-translate-y-1 ${shot.className}`}
            aria-label={`View ${shot.alt} fullscreen`}
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              priority={shot.priority}
            />
            <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center border-2 border-ink bg-cream text-ink opacity-0 shadow-brutal-sm transition-opacity duration-200 group-hover:opacity-100">
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 6V2h4M10 2h4v4M14 10v4h-4M6 14H2v-4" />
              </svg>
            </span>
          </button>
        ))}

        {/* 0% commission sticker on second shot */}
        <span className="pointer-events-none absolute -right-3 top-8 hidden rotate-6 border-2 border-ink bg-coral px-3 py-1.5 text-sm font-black uppercase tracking-wide text-cream shadow-brutal-sm md:block lg:-right-6">
          0% commission
        </span>
      </div>

      {active &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex flex-col bg-ink/95"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
          >
            <div className="flex items-center justify-between px-5 py-4 sm:px-8">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-cream/60">
                {active.alt}
              </p>
              <button
                onClick={close}
                aria-label="Close"
                className="flex h-10 w-10 items-center justify-center border-2 border-cream/40 text-cream transition-colors hover:border-cream hover:bg-cream/10"
              >
                <svg viewBox="0 0 12 12" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M2 2l8 8M10 2l-8 8" />
                </svg>
              </button>
            </div>
            <div
              className="relative flex-1"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <p className="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-widest text-cream/40 sm:px-8">
              Click anywhere or press ESC to close
            </p>
          </div>,
          document.body,
        )}
    </>
  );
}
