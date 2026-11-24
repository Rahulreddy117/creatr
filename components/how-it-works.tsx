import Reveal from "./reveal";

const steps = [
  {
    number: "01",
    title: "Creators upload their content",
    description:
      "Filmmakers, educators, performers and creators publish videos in the formats they create.",
  },
  {
    number: "02",
    title: "Choose purchases or subscriptions",
    description:
      "Set your own pricing — sell videos individually or offer recurring monthly access.",
  },
  {
    number: "03",
    title: "Viewers pay to access premium content",
    description:
      "Audiences purchase the content they want, directly from the creators they support.",
  },
  {
    number: "04",
    title: "Creators earn from their content",
    description:
      "Revenue goes to the people making the work — not to middlemen and ad networks.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-b-2 border-ink">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="inline-block rotate-1 border-2 border-ink bg-peach px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] shadow-brutal-sm">
              How it works
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
              From upload to{" "}
              <span className="bg-mint px-2 inline-block">earning.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 max-w-3xl border-2 border-ink bg-white shadow-brutal">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 60}>
              <div
                className={`group flex gap-6 p-7 sm:gap-10 sm:p-9 ${i > 0 ? "border-t-2 border-ink" : ""}`}
              >
                <span className="font-black text-4xl tracking-tighter text-accent transition-colors duration-200 group-hover:text-ink sm:text-5xl" style={{ WebkitTextStroke: "1.5px #111" }}>
                  {step.number}
                </span>
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tight sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-md text-base font-bold leading-relaxed">
                    <span className="marker">{step.description}</span>
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
