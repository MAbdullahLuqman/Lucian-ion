import Link from "next/link";

import { Container } from "./primitives";
import { legalNav, nav, practice, utilityNav } from "@/content/site";
import { img } from "@/lib/images";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="rule-t mt-20 bg-paper no-print">
      <Container>
        <div className="grid gap-10 py-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <img src={img("logo-li.svg")} alt="" aria-hidden="true" className="h-9 w-9" />
            <p className="mt-5 font-display text-xl leading-snug">
              {practice.surgeon} {practice.credentials}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{practice.role}</p>

            <address className="mt-6 not-italic text-sm leading-relaxed text-muted-foreground">
              {practice.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>

            <p className="mt-4 text-sm">
              {practice.phones.map((phone, i) => (
                <span key={phone}>
                  {i > 0 ? <span className="px-2 text-muted-foreground">/</span> : null}
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:underline">
                    {phone}
                  </a>
                </span>
              ))}
            </p>
            <p className="mt-2 text-sm">
              <a
                href={practice.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                Open in Google Maps
              </a>
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            {nav.map((section) => (
              <div key={section.to}>
                <h2 className="label">{section.label}</h2>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link href={section.to} className="text-sm hover:underline">
                      Overview
                    </Link>
                  </li>
                  {section.children.map((child) => (
                    <li key={child.to}>
                      <Link
                        href={child.to}
                        className="text-sm text-muted-foreground hover:text-foreground hover:underline"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="rule-t flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {[...utilityNav, ...legalNav].map((item) => (
              <li key={item.to}>
                <Link
                  href={item.to}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground">
            © {year} {practice.surgeon}. All rights reserved.
          </p>
        </div>

        <p className="rule-t py-6 text-xs leading-relaxed text-muted-foreground">
          {practice.company} The information on this site is general and is not a substitute for a
          consultation. It does not recommend a procedure for any individual.
        </p>
      </Container>
    </footer>
  );
}
