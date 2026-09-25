"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  width = "default",
}: {
  children: ReactNode;
  className?: string;
  width?: "default" | "wide" | "narrow";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8",
        width === "wide" && "max-w-[100rem]",
        width === "default" && "max-w-[82rem]",
        width === "narrow" && "max-w-[52rem]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("label", className)}>{children}</p>;
}

/** Restrained entrance. Disabled entirely when the user prefers reduced motion. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function PageHero({
  eyebrow,
  title,
  standfirst,
  image,
  imageAlt,
  actions,
}: {
  eyebrow: string;
  title: string;
  standfirst?: string;
  image?: string;
  imageAlt?: string;
  actions?: ReactNode;
}) {
  return (
    <header className="rule-b">
      <Container>
        <div className="grid gap-10 pb-12 pt-10 sm:pt-14 lg:grid-cols-12 lg:gap-12 lg:pb-16">
          <div className="lg:col-span-7">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-5 text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-[3.9rem]">
              {title}
            </h1>
            {standfirst ? (
              <p className="measure mt-6 text-lg leading-relaxed text-muted-foreground">
                {standfirst}
              </p>
            ) : null}
            {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
          </div>
          {image ? (
            <div className="lg:col-span-5">
              <figure className="relative aspect-[4/5] overflow-hidden bg-muted sm:aspect-[3/2] lg:aspect-[4/5]">
                <img
                  src={image}
                  alt={imageAlt ?? ""}
                  width={1200}
                  height={1500}
                  loading="eager"
                  className="h-full w-full object-cover"
                />
              </figure>
            </div>
          ) : null}
        </div>
      </Container>
    </header>
  );
}

export function Crumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="rule-b">
      <Container>
        <ol className="label flex flex-wrap items-center gap-x-2 gap-y-1 py-3">
          {items.map((item, i) => (
            <li key={item.label} className="flex items-center gap-2">
              {i > 0 ? <span aria-hidden="true">/</span> : null}
              {item.to ? (
                <Link href={item.to} className="transition-colors hover:text-foreground">
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}

export function SectionBlock({
  index,
  title,
  children,
  id,
}: {
  index?: string;
  title: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="rule-t py-10 lg:py-14">
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-2xl leading-tight sm:text-[1.75rem]">
            {index ? <span className="label mr-3 align-middle">{index}</span> : null}
            {title}
          </h2>
        </div>
        <div className="lg:col-span-8">{children}</div>
      </div>
    </section>
  );
}

export function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-4 text-[1.0625rem] leading-relaxed text-foreground/85">
      {paragraphs.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  );
}

export function RuledList({ items }: { items: string[] }) {
  return (
    <ul className="rule-t">
      {items.map((item) => (
        <li key={item} className="rule-b py-3 text-[1.0625rem] leading-relaxed text-foreground/85">
          {item}
        </li>
      ))}
    </ul>
  );
}

/**
 * Visible annotation for anything Lucian has not yet signed off. Deliberately
 * not hidden: an unverified detail should look unverified on the page.
 */
export function ConfirmNote({ children }: { children: ReactNode }) {
  return (
    <p className="border-l-2 border-flag-foreground/40 bg-flag/60 px-4 py-3 text-sm leading-relaxed text-flag-foreground">
      {children}
    </p>
  );
}

export function ButtonLink({
  to,
  href,
  children,
  variant = "solid",
  className,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium tracking-wide transition-colors",
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:bg-primary/90"
      : "border border-rule text-foreground hover:bg-secondary",
    className,
  );
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={to!} className={classes}>
      {children}
    </Link>
  );
}
