import Reveal from "./reveal";

export default function About() {
  return (
    <section id="about">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="relative border-2 border-ink bg-white p-8 shadow-brutal sm:p-14">
          {/* decorative stickers */}
          <span className="absolute -top-4 right-8 rotate-3 border-2 border-ink bg-coral px-3 py-1 text-xs font-black uppercase tracking-widest text-cream shadow-brutal-sm">
            Why we built this
          </span>
          <span className="absolute -bottom-4 left-8 -rotate-2 border-2 border-ink bg-mint px-3 py-1 text-xs font-black uppercase tracking-widest text-ink shadow-brutal-sm">
            0% commission
          </span>

          <Reveal>
            <h2 className="text-lg font-black uppercase tracking-[0.3em] text-ink">
              About
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <h3 className="mt-3 max-w-2xl text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
              Redefining how digital content{" "}
              <span className="bg-accent px-2 inline-block">is monetized.</span>
            </h3>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <p className="text-base font-bold leading-relaxed">
                <span className="marker">
                  For years, creators have depended on advertising-based
                  platforms — earning pennies per view while algorithms decide
                  who sees their work. We believe there&apos;s a better way.
                </span>
              </p>
              <p className="text-base font-bold leading-relaxed">
                <span className="marker">
                  Creatr gives creators a direct line to their audience. Sell
                  individual videos, publish exclusive content, or offer
                  recurring subscriptions — and keep the revenue your work
                  actually earns.
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
