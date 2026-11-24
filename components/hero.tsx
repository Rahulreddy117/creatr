import Image from "next/image";
import Reveal from "./reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/40" />
      <div className="pointer-events-none absolute -left-32 top-64 h-64 w-64 rounded-full bg-coral/20" />

      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 text-center sm:pt-28">
        <Reveal>
          <p className="mx-auto mb-6 inline-block -rotate-2 border-2 border-ink bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cream shadow-brutal-sm">
            Launching soon
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mx-auto max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl">
            Your Content.
            <br />
            <span className="bg-accent px-3 inline-block shadow-brutal-sm -rotate-1">
              Your Price.
            </span>{" "}
            Your Platform.
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mx-auto mt-8 max-w-2xl text-base font-medium leading-relaxed text-ink">
            A platform where every creator earns directly from their content.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#preview"
              className="brutal-press w-full rounded-none border-2 border-ink bg-ink px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-cream shadow-brutal sm:w-auto"
            >
              Explore the Platform
            </a>
            <a
              href="#coming-soon"
              className="brutal-press w-full rounded-none border-2 border-ink bg-accent px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-ink shadow-brutal sm:w-auto"
            >
              Coming Soon
            </a>
          </div>
        </Reveal>
      </div>

      {/* Screenshot slots */}
      <Reveal delay={200} className="relative mx-auto max-w-6xl px-6 pb-24">
        <div id="preview" className="grid scroll-mt-24 gap-8 md:grid-cols-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-2 border-ink bg-paper shadow-brutal-lg md:col-span-3">
            <Image
              src="/img/screenshot-2.png"
              alt="Creatr app"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="relative aspect-[4/5] md:col-span-2">
            <div className="relative h-full overflow-hidden rounded-3xl border-2 border-ink bg-paper shadow-brutal-lg">
              <Image
                src="/img/screenshot-1.png"
                alt="0% commission"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <span className="absolute -right-3 -top-5 rotate-6 border-2 border-ink bg-coral px-3 py-1.5 text-sm font-black uppercase tracking-wide text-cream shadow-brutal-sm">
              0% commission
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
