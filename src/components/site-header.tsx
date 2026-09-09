"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { Container } from "@/components/ui";
import { nav } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 shadow-[0_1px_4px_rgb(11_46_107/0.18)]">
      <div className="bg-[#050d19] text-white">
        <Container size="wide">
          <div className="flex h-8 items-center justify-between text-[0.6875rem] font-semibold tracking-wide">
            <span>NYC BUILDING COMPLIANCE</span>
            <a
              href="https://a810-dobnow.nyc.gov/publish/Index.html#!/"
              target="_blank"
              rel="noreferrer"
              className="text-dim transition-colors hover:text-white"
            >
              NYC DOB NOW ↗
            </a>
          </div>
        </Container>
      </div>
      <div
        className={`border-b transition-colors duration-300 ${
          scrolled || open
            ? "border-ink-700 bg-ink/95 backdrop-blur-md"
            : "border-ink-700 bg-ink"
        }`}
      >
      <Container size="wide">
        <div className="flex h-[72px] items-center justify-between gap-6">
          <Link
            href="/"
            className="shrink-0"
            aria-label="Canto Violation Solutions — home"
          >
            <Logo tone="light" />
          </Link>

          <nav
            className="hidden items-center gap-9 md:flex"
            aria-label="Primary"
          >
            {nav.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative text-[0.9375rem] font-medium transition-colors ${
                    active ? "text-white" : "text-dim hover:text-white"
                  }`}
                >
                  {item.label}
                  {active ? (
                    <span
                      className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-accent-300"
                      aria-hidden="true"
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/lookup"
              className="hidden rounded-[3px] bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-mist sm:inline-flex"
            >
              Public records
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="-mr-2 flex h-11 w-11 items-center justify-center text-white md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span className="relative block h-3.5 w-5">
                <span
                  className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </Container>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-ink-700 bg-ink md:hidden"
      >
        <Container size="wide">
          <nav className="flex flex-col py-3" aria-label="Primary, mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink-700 py-4 text-lg font-medium text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/lookup"
              onClick={() => setOpen(false)}
              className="mt-5 mb-4 inline-flex items-center justify-center rounded-[3px] bg-white px-5 py-4 text-base font-semibold text-ink"
            >
              Public records
            </Link>
          </nav>
        </Container>
      </div>
    </header>
  );
}
