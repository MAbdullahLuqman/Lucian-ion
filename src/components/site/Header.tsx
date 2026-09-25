"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Container } from "./primitives";
import { nav, utilityNav, practice } from "@/content/site";
import { img } from "@/lib/images";

export function Header() {
  const [open, setOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const primaryPhone = practice.phones[0] ?? "";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 rule-b bg-background/92 backdrop-blur-sm">
        <Container>
          <div className="flex h-16 items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
              <img
                src={img("logo-li.svg")}
                alt=""
                width={36}
                height={36}
                className="h-8 w-8"
                aria-hidden="true"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-base tracking-tight">
                  {practice.surgeon}{" "}
                  <span className="text-muted-foreground">{practice.credentials}</span>
                </span>
                <span className="label mt-1 hidden sm:block">Upper Wimpole Street, London</span>
              </span>
            </Link>

            <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
              {nav.map((section) => (
                <div key={section.to} className="group relative">
                  <Link
                    href={section.to}
                    className="py-2 text-sm text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {section.label}
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 border border-rule bg-card p-2 opacity-0 shadow-sm transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    {section.children.map((child) => (
                      <Link
                        key={child.to}
                        href={child.to}
                        className="block px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <span className="h-4 w-px bg-rule" aria-hidden="true" />
              {utilityNav.map((item) => (
                <Link
                  key={item.to}
                  href={item.to}
                  className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={`tel:${primaryPhone.replace(/\s/g, "")}`}
                className="border border-rule px-4 py-2 text-sm transition-colors hover:bg-secondary"
              >
                {primaryPhone}
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="inline-flex h-10 w-10 items-center justify-center border border-rule lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </Container>
      </header>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-background lg:hidden"
        >
          <Container>
            <nav aria-label="Mobile" className="py-4">
              {nav.map((section) => {
                const expanded = openSection === section.to;
                return (
                  <div key={section.to} className="rule-b">
                    <div className="flex items-center justify-between">
                      <Link
                        href={section.to}
                        onClick={() => setOpen(false)}
                        className="flex-1 py-4 font-display text-lg"
                      >
                        {section.label}
                      </Link>
                      <button
                        type="button"
                        aria-expanded={expanded}
                        onClick={() => setOpenSection(expanded ? null : section.to)}
                        className="label px-3 py-4"
                      >
                        {expanded ? "Less" : "More"}
                      </button>
                    </div>
                    {expanded ? (
                      <ul className="pb-3">
                        {section.children.map((child) => (
                          <li key={child.to}>
                            <Link
                              href={child.to}
                              onClick={() => setOpen(false)}
                              className="block py-2 text-[0.95rem] text-muted-foreground"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                );
              })}
              {utilityNav.map((item) => (
                <Link
                  key={item.to}
                  href={item.to}
                  onClick={() => setOpen(false)}
                  className="rule-b block py-4 font-display text-lg"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={`tel:${primaryPhone.replace(/\s/g, "")}`}
                className="mt-6 inline-flex w-full items-center justify-center bg-primary px-5 py-3 text-sm text-primary-foreground"
              >
                Call {primaryPhone}
              </a>
            </nav>
          </Container>
        </div>
      ) : null}
    </>
  );
}
