"use client";

import { useState } from "react";

import type { PatientCase } from "@/content/cases";

/**
 * A single approved case. Before and after are shown side by side and always
 * labelled; there is no slider or overlay that could mislead about what is
 * being compared. No timescales are stated because none have been verified.
 */
export function CaseFigure({ patientCase }: { patientCase: PatientCase }) {
  const [viewIndex, setViewIndex] = useState(0);
  const view = patientCase.views[viewIndex] ?? patientCase.views[0];
  if (!view) return null;

  return (
    <figure className="bg-background">
      <div className="grid grid-cols-2 gap-px bg-rule">
        <div className="relative bg-muted">
          <img
            src={view.before}
            alt={`${patientCase.procedure}, ${view.label.toLowerCase()}, before surgery`}
            loading="lazy"
            decoding="async"
            className="aspect-[3/4] w-full object-cover"
          />
          <span className="label absolute left-2 top-2 bg-background/85 px-2 py-1">Before</span>
        </div>
        <div className="relative bg-muted">
          <img
            src={view.after}
            alt={`${patientCase.procedure}, ${view.label.toLowerCase()}, after surgery`}
            loading="lazy"
            decoding="async"
            className="aspect-[3/4] w-full object-cover"
          />
          <span className="label absolute left-2 top-2 bg-background/85 px-2 py-1">After</span>
        </div>
      </div>

      <figcaption className="px-1 py-3">
        <p className="font-display text-lg leading-snug">{patientCase.procedure}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Surgery by Lucian Ion. Individual result; it is not a guide to what any other person would
          achieve.
        </p>

        {patientCase.views.length > 1 ? (
          <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Choose a view">
            {patientCase.views.map((v, i) => (
              <button
                key={v.label + i}
                type="button"
                onClick={() => setViewIndex(i)}
                aria-pressed={i === viewIndex}
                className={`border px-3 py-1.5 text-xs transition-colors ${
                  i === viewIndex
                    ? "border-foreground bg-foreground text-background"
                    : "border-rule hover:bg-secondary"
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        ) : null}
      </figcaption>
    </figure>
  );
}
