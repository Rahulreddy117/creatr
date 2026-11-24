import ExplainButton from "./explain-button";

const links = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Categories", href: "#categories" },
  { label: "Coming Soon", href: "#coming-soon" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-cream/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center border-2 border-ink bg-accent text-base font-black shadow-brutal-sm">
            C
          </span>
          <span className="text-lg font-black tracking-tight">Creatr</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-accent"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ExplainButton />
          <a
            href="#waitlist"
            className="brutal-press rounded-none border-2 border-ink bg-ink px-3 py-2 text-xs font-bold uppercase tracking-wide text-cream shadow-brutal-sm sm:px-4 sm:text-sm"
          >
            Join now
          </a>
        </div>
      </nav>
    </header>
  );
}
