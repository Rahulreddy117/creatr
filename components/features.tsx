import Reveal from "./reveal";

const features = [
  {
    title: "Pay Per View",
    description:
      "Viewers can purchase individual videos instead of needing a subscription.",
    color: "bg-accent",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2.5" y="5" width="19" height="14" rx="2" />
        <path d="M10 9.5v5l4.5-2.5L10 9.5z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Creator Subscriptions",
    description:
      "Creators can offer monthly access to their exclusive content.",
    color: "bg-coral",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.3l6.1-.7L12 3z" />
      </svg>
    ),
  },
  {
    title: "Creator-Controlled Pricing",
    description:
      "Creators can decide how they want to monetize their content.",
    color: "bg-sky",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5v9M9.2 9.8c.3-1 1.4-1.6 2.8-1.6 1.6 0 2.7.8 2.7 2 0 2.9-5.6 1.7-5.6 4.6 0 1.2 1.2 2 2.9 2 1.5 0 2.6-.6 2.9-1.6" />
      </svg>
    ),
  },
  {
    title: "A Platform for Every Creator",
    description:
      "Support independent films, comedy, education, entertainment, fitness, music and more.",
    color: "bg-mint",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 20.5c1.4-3.4 4.2-5 7.5-5s6.1 1.6 7.5 5" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="border-b-2 border-ink">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="inline-block rotate-1 border-2 border-ink bg-mint px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] shadow-brutal-sm">
              Key features
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
              Built for creators,{" "}
              <span className="bg-coral px-2 inline-block text-cream">powered by you.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 80}>
              <div className="group h-full border-2 border-ink bg-white p-7 shadow-brutal transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg">
                <span
                  className={`flex h-12 w-12 items-center justify-center border-2 border-ink ${feature.color} text-ink transition-transform duration-200 group-hover:-rotate-6`}
                >
                  {feature.icon}
                </span>
                <h3 className="mt-5 text-xl font-black uppercase tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-3 text-base font-bold leading-relaxed">
                  <span className="marker">{feature.description}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
