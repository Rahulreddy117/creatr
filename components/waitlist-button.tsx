"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

// Google Form endpoint — paste the form's /formResponse URL and entry IDs here.
// entry IDs come from the form's "Get pre-filled link" URL (entry.XXXX params).
const FORM_RESPONSE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScrHldNgblOfnHT3dLJJrjj5H0-T3TbLzoqegkmh_oDpqesJw/formResponse";
const ENTRY = {
  name: "entry.490759692",
  email: "entry.1228496545",
  socials: "entry.1928379341",
};

export default function WaitlistButton() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", socials: "" });

  const close = useCallback(() => {
    if (window.history.state?.waitlist) window.history.back();
    else {
      setOpen(false);
      setSent(false);
      setError("");
    }
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    if (!open) return;
    if (!window.history.state?.waitlist) {
      window.history.pushState({ waitlist: true }, "");
    }
    document.addEventListener("keydown", handleKey);
    const onPop = () => {
      setOpen(false);
      setSent(false);
      setError("");
    };
    window.addEventListener("popstate", onPop);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      window.removeEventListener("popstate", onPop);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim()) {
      setError("Please fill in your name and email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!FORM_RESPONSE_URL || !ENTRY.name || !ENTRY.email) {
      setError("Waitlist is not configured yet — please email switon89@gmail.com directly.");
      return;
    }

    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.set(ENTRY.name, form.name);
      params.set(ENTRY.email, form.email);
      if (ENTRY.socials) params.set(ENTRY.socials, form.socials || "—");
      // no-cors: Google Forms doesn't support CORS, but the submission still lands.
      await fetch(FORM_RESPONSE_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      setSent(true);
    } catch {
      setError("Something went wrong. Please try again or email switon89@gmail.com.");
    } finally {
      setLoading(false);
    }
  }

  const inputCls =
    "w-full border-2 border-ink bg-white px-4 py-3.5 text-base font-medium text-ink placeholder:text-ink/35 focus:outline-none focus:bg-accent/20 transition-colors";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="brutal-press mt-14 inline-block border-2 border-ink bg-ink px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-cream"
      >
        Join the Waitlist →
      </button>

      {open &&
        createPortal(
          <div className="fixed inset-0 z-[100] flex flex-col bg-cream">
            <header className="flex items-center justify-between border-b-2 border-ink bg-ink px-5 py-4 sm:px-8">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center border-2 border-cream bg-accent text-sm font-black text-ink">
                  C
                </span>
                <div>
                  <p className="text-sm font-black uppercase tracking-wide text-cream">
                    Creatr
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-cream/50">
                    Join the waitlist
                  </p>
                </div>
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

            <div className="flex-1 overflow-y-auto">
              <div className="mx-auto flex w-full max-w-xl flex-col px-5 py-10 sm:px-8 sm:py-14">
                {sent ? (
                  <div className="relative border-2 border-ink bg-white p-8 text-center shadow-brutal sm:p-12">
                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 rotate-3 border-2 border-ink bg-mint px-3 py-1 text-xs font-black uppercase tracking-widest">
                      Confirmed
                    </span>
                    <span className="mx-auto mt-2 flex h-16 w-16 items-center justify-center border-2 border-ink bg-mint">
                      <svg viewBox="0 0 16 16" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8.5l3.2 3.2L13 5" />
                      </svg>
                    </span>
                    <h3 className="mt-6 text-3xl font-black uppercase tracking-tight sm:text-4xl">
                      You&apos;re on the list!
                    </h3>
                    <p className="mx-auto mt-3 max-w-sm text-base font-medium text-ink/60">
                      Thanks for joining — we&apos;ll reach out when Creatr launches.
                    </p>
                    <button
                      onClick={close}
                      className="brutal-press mt-8 border-2 border-ink bg-accent px-10 py-3.5 text-base font-bold uppercase tracking-wide text-ink"
                    >
                      Done
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative border-2 border-ink bg-white p-6 shadow-brutal sm:p-10">
                    <h3 className="text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-4xl">
                      Join the{" "}
                      <span className="whitespace-nowrap">
                        waitlist <span className="marker">now!!</span>
                      </span>
                    </h3>
                    <p className="mt-3 text-base font-medium text-ink/60">
                      Get early access and launch updates.
                    </p>

                    <div className="mt-8 grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="wl-name" className="mb-2 block text-xs font-black uppercase tracking-widest text-ink">
                          Name *
                        </label>
                        <input
                          id="wl-name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Your name"
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label htmlFor="wl-email" className="mb-2 block text-xs font-black uppercase tracking-widest text-ink">
                          Email *
                        </label>
                        <input
                          id="wl-email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="you@example.com"
                          className={inputCls}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="wl-socials" className="mb-2 block text-xs font-black uppercase tracking-widest text-ink">
                          Social media channels
                        </label>
                        <input
                          id="wl-socials"
                          type="text"
                          value={form.socials}
                          onChange={(e) => setForm({ ...form, socials: e.target.value })}
                          placeholder="@you on X, IG, YouTube..."
                          className={inputCls}
                        />
                      </div>
                    </div>

                    {error && (
                      <p className="mt-5 border-2 border-ink bg-coral/20 px-4 py-3 text-sm font-bold text-ink">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="brutal-press mt-8 w-full border-2 border-ink bg-ink px-6 py-4 text-base font-bold uppercase tracking-wide text-cream disabled:opacity-50"
                    >
                      {loading ? "Joining..." : "Join the Waitlist →"}
                    </button>
                  </form>
                )}
              </div>
            </div>

            <footer className="border-t-2 border-ink bg-white px-5 py-3.5 sm:px-8">
              <p className="mx-auto max-w-md text-center text-[11px] font-bold uppercase tracking-widest text-ink/50">
                Press ESC or click X to close
              </p>
            </footer>
          </div>,
          document.body,
        )}
    </>
  );
}
