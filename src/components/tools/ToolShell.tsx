"use client";

import type { ReactNode } from "react";

import { Container, Crumbs, PageHero } from "@/components/site/primitives";

export function ToolShell({
  title,
  standfirst,
  children,
}: {
  title: string;
  standfirst: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="no-print">
        <Crumbs items={[{ label: "Home", to: "/" }, { label: title }]} />
        <PageHero eyebrow="Free to use" title={title} standfirst={standfirst} />
      </div>
      <Container>{children}</Container>
    </div>
  );
}

export function PrintButton({ label = "Print your list" }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex items-center justify-center bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
    >
      {label}
    </button>
  );
}

export function ToolNote({ children }: { children: ReactNode }) {
  return <p className="measure text-sm leading-relaxed text-muted-foreground">{children}</p>;
}
