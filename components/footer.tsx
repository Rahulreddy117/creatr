const socials = [
  {
    label: "X",
    href: "https://x.com/alexander_veyr",
    icon: (
      <svg viewBox="0 0 16 16" className="h-4 w-4 fill-current">
        <path d="M12.6 1h2.2L10 6.5 15.5 15h-4.4l-3.4-4.4L4 15H1.8l5-5.7L1.5 1h4.5l3.1 4.1L12.6 1zm-.8 12.6h1.2L4.7 2.3H3.4l8.4 11.3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ranganath-reddy-54a850332/",
    icon: (
      <svg viewBox="0 0 16 16" className="h-4 w-4 fill-current">
        <path d="M3.2 1.8a1.4 1.4 0 11.01 2.8 1.4 1.4 0 01-.01-2.8zM1.8 5.5h2.7v8.7H1.8V5.5zm4.2 0h2.6v1.2h.04c.36-.68 1.24-1.4 2.56-1.4 2.74 0 3.24 1.8 3.24 4.15v4.8h-2.7v-4.25c0-1-.02-2.3-1.4-2.3-1.4 0-1.62 1.1-1.62 2.23v4.32H6V5.5z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-coral">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 -rotate-3 items-center justify-center border-2 border-ink bg-ink text-base font-black text-accent shadow-brutal-sm">
                C
              </span>
              <span className="text-lg font-black tracking-tight">Creatr</span>
            </a>
            <p className="mt-4 text-sm font-medium leading-relaxed text-ink/60">
              A new way for creators to monetize their content — through
              individual purchases and exclusive subscriptions. 0% commission.
            </p>
            <a
              href="mailto:switon89@gmail.com"
              className="mt-4 inline-block border-b-2 border-ink text-sm font-bold transition-colors hover:bg-ink hover:text-coral"
            >
              switon89@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="brutal-press flex h-10 w-10 items-center justify-center border-2 border-ink bg-cream text-ink shadow-brutal-sm"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t-2 border-ink pt-8 sm:flex-row">
          <p className="text-xs font-bold uppercase tracking-widest text-ink/50">
            © 2026 Creatr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
