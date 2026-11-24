import Image from "next/image";
import Reveal from "./reveal";

const categories = [
  {
    title: "Movies & Independent Films",
    tagline: "Cinema, uncompromised",
    src: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=900&q=80",
    rotate: "-rotate-1",
  },
  {
    title: "Comedy & Entertainment",
    tagline: "Stories worth laughing at",
    src: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&w=900&q=80",
    rotate: "rotate-1",
  },
  {
    title: "Education & Courses",
    tagline: "Learn from the best",
    src: "https://images.unsplash.com/photo-1588702547954-4800ead296ef?auto=format&fit=crop&w=900&q=80",
    rotate: "-rotate-1",
  },
  {
    title: "Fitness & Lifestyle",
    tagline: "Train with purpose",
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
    rotate: "rotate-1",
  },
  {
    title: "Music & Performances",
    tagline: "Sound, up close",
    src: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=900&q=80",
    rotate: "-rotate-1",
  },
  {
    title: "Exclusive Creator Content",
    tagline: "Direct from the source",
    src: "https://images.unsplash.com/photo-1695408247109-3bf125ad0538?auto=format&fit=crop&w=900&q=80",
    rotate: "rotate-1",
  },
];

export default function Categories() {
  return (
    <section id="categories" className="border-b-2 border-ink bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="inline-block -rotate-1 border-2 border-ink bg-lilac px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] shadow-brutal-sm">
              Content categories
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
              Not just videos.{" "}
              <span className="bg-sky px-2 inline-block">An entire world of content.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <Reveal key={category.title} delay={(i % 3) * 80}>
              <a
                href="#coming-soon"
                className={`group relative flex aspect-[5/4] flex-col justify-between overflow-hidden border-2 border-ink p-6 shadow-brutal transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg ${category.rotate}`}
              >
                <Image
                  src={category.src}
                  alt={category.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

                <span className="relative self-start border-2 border-ink bg-accent px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-ink">
                  0% fees
                </span>
                <div className="relative">
                  <h3 className="text-xl font-black uppercase leading-tight tracking-tight text-white">
                    {category.title}
                  </h3>
                  <p className="mt-1.5 text-sm font-bold text-white/70">
                    {category.tagline}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
