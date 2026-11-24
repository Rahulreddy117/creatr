"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

function AssistantBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center border-2 border-ink bg-ink text-xs font-black text-accent">
        C
      </span>
      <div className="border-2 border-ink bg-white px-4 py-3 text-[15px] font-medium leading-relaxed text-ink shadow-brutal-sm">
        {children}
      </div>
    </div>
  );
}

export default function ExplainButton() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => {
    if (window.history.state?.explain) window.history.back();
    else setOpen(false);
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [close]);

  useEffect(() => {
    if (!open) return;
    if (!window.history.state?.explain) {
      window.history.pushState({ explain: true }, "");
    }
    const onPop = () => setOpen(false);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-expanded={open}
        className="brutal-press flex items-center gap-1 border-2 border-ink bg-accent px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wide text-ink shadow-brutal-sm sm:px-3 sm:text-xs"
      >
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor">
          <path d="M2 2.5A1.5 1.5 0 013.5 1h9A1.5 1.5 0 0114 2.5v7a1.5 1.5 0 01-1.5 1.5H6l-3.5 3v-3H3.5A1.5 1.5 0 012 9.5v-7z" />
        </svg>
        <span>Explain</span>
      </button>

      {open &&
        createPortal(
          <div className="fixed inset-0 z-[100] flex flex-col bg-cream">
          {/* header */}
          <header className="flex items-center justify-between border-b-2 border-ink bg-ink px-5 py-4 sm:px-8">
            <div className="flex items-center gap-3">
              <a
                href="#top"
                onClick={close}
                className="flex items-center gap-2.5"
              >
                <span className="flex h-8 w-8 items-center justify-center border-2 border-cream bg-accent text-sm font-black text-ink">
                  C
                </span>
                <span className="text-lg font-black tracking-tight text-cream">
                  Creatr
                </span>
              </a>
              <span className="hidden border border-cream/30 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-cream/60 sm:inline-block">
                Explain me in short
              </span>
            </div>
            <button
              onClick={close}
              aria-label="Close"
              className="flex h-10 w-10 items-center justify-center border-2 border-cream/30 text-cream transition-colors hover:border-cream hover:bg-cream/10"
            >
              <svg viewBox="0 0 12 12" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M2 2l8 8M10 2l-8 8" />
              </svg>
            </button>
          </header>

          {/* chat body */}
          <div className="flex-1 overflow-y-auto">
            <div className="mx-auto flex max-w-2xl flex-col gap-6 px-5 py-8 sm:px-8 sm:py-12">
              {/* user message */}
              <div className="flex justify-end">
                <div className="max-w-[85%] border-2 border-ink bg-ink px-5 py-3 text-[15px] font-medium text-cream shadow-brutal-sm">
                  Explain Creatr in short.
                </div>
              </div>

              <AssistantBubble>
                <p>
                  <b>Creatr</b> is a new platform where creators sell content
                  directly to their audience — no ads, no algorithms deciding who
                  gets paid.
                </p>
              </AssistantBubble>

              <AssistantBubble>
                <p className="mb-2 text-[11px] font-black uppercase tracking-[0.2em] text-ink/40">
                  How it works
                </p>
                <ol className="list-decimal space-y-1.5 pl-5">
                  <li>Creators upload videos, courses, live events and more.</li>
                  <li>They set their own prices — per video or monthly subscription.</li>
                  <li>Viewers pay to unlock content. Creators get paid.</li>
                </ol>
              </AssistantBubble>

              <AssistantBubble>
                <p className="mb-2 text-[11px] font-black uppercase tracking-[0.2em] text-ink/40">
                  Why it&apos;s different
                </p>
                <ul className="space-y-2.5">
                  {[
                    ["Pay-per-view", "Buy single videos without subscribing."],
                    ["Subscriptions", "Monthly access to a creator's exclusive content."],
                    ["Your price", "Creators control exactly how they monetize."],
                    ["0% commission", "Creators keep 100% of what they earn."],
                  ].map(([title, desc]) => (
                    <li key={title} className="flex gap-2.5">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent"
                        style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
                      />
                      <span>
                        <b>{title}</b> — {desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </AssistantBubble>

              <AssistantBubble>
                <p className="mb-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-ink/40">
                  Who it&apos;s for
                </p>
                <p>
                  Independent filmmakers, comedians, educators, musicians,
                  fitness coaches — any creator who wants to earn directly from
                  their audience.
                </p>
              </AssistantBubble>

              <AssistantBubble>
                <p className="border-t-2 border-dashed border-ink/20 pt-3 text-xs font-bold uppercase tracking-widest text-ink">
                  Launching soon — join the waitlist below.
                </p>
              </AssistantBubble>
            </div>
          </div>

          {/* footer */}
          <footer className="border-t-2 border-ink bg-white px-5 py-4 sm:px-8">
            <div className="mx-auto flex max-w-2xl items-center justify-between gap-4">
              <p className="hidden text-xs font-bold uppercase tracking-widest text-ink/50 sm:block">
                Press ESC or click X to close
              </p>
              <button
                onClick={() => {
                  close();
                  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="brutal-press flex-1 border-2 border-ink bg-accent px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-ink sm:flex-none sm:px-10"
              >
                Join the Waitlist →
              </button>
            </div>
          </footer>
        </div>,
          document.body,
        )}
    </>
  );
}
