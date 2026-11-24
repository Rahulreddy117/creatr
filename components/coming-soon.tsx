import Reveal from "./reveal";

export default function ComingSoon() {
  return (
    <section id="coming-soon" className="border-b-2 border-ink bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-6 py-28 sm:py-40">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="mx-auto mb-10 flex h-20 w-20 -rotate-6 items-center justify-center border-2 border-cream bg-accent text-ink shadow-brutal">
              <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3.5 2" />
              </svg>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl">
              Something new{" "}
              <span className="bg-accent px-2 inline-block text-ink">is coming.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-md text-base font-medium leading-relaxed text-cream/60">
              We&apos;re building a new destination for creators and audiences.
              The future of content monetization starts here.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-col items-center gap-6">
              <div className="inline-flex rotate-1 items-center gap-3 border-2 border-cream bg-cream px-6 py-3 text-ink">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink/40" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ink" />
                </span>
                <span className="text-sm font-black uppercase tracking-widest">
                  Launching Soon
                </span>
              </div>

              <div
                id="waitlist"
                className="relative -rotate-1 scroll-mt-24 border-2 border-ink bg-cream p-8 text-ink shadow-[10px_10px_0_0_#ffd400] sm:p-12"
              >
                {/* decorative corners */}
                <span className="absolute -left-3 -top-3 flex h-8 w-8 rotate-12 items-center justify-center border-2 border-ink bg-coral text-cream">
                  <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor">
                    <path d="M8 1l1.8 4.7L14.5 7l-4.7 1.8L8 13.5 6.2 8.8 1.5 7l4.7-1.3L8 1z" />
                  </svg>
                </span>
                <span className="absolute -bottom-3 -right-3 flex h-8 w-8 -rotate-12 items-center justify-center border-2 border-ink bg-sky">
                  <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor">
                    <path d="M8 1l1.8 4.7L14.5 7l-4.7 1.8L8 13.5 6.2 8.8 1.5 7l4.7-1.3L8 1z" />
                  </svg>
                </span>

                <p className="text-xs font-black uppercase tracking-[0.25em] text-ink/50">
                  Be the first to know
                </p>
                <p className="mt-3 text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-4xl">
                  Join the waitlist{" "}
                  <span className="marker">now!!</span>
                </p>
                <p className="mt-4 max-w-sm text-sm font-medium leading-relaxed text-ink/60">
                  Get early access, founding creator pricing, and launch updates —
                  straight to your inbox.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Early access", "Founding rate", "Launch updates"].map((perk) => (
                    <span
                      key={perk}
                      className="border border-ink/30 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-ink/70"
                    >
                      {perk}
                    </span>
                  ))}
                </div>

                <a
                  href="mailto:switon89@gmail.com?subject=Join%20the%20Creatr%20waitlist"
                  className="brutal-press mt-8 inline-block border-2 border-ink bg-ink px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-cream"
                >
                  Join the Waitlist →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
