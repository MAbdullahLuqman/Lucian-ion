import Link from "next/link";

import { CaseFigure } from "./CaseFigure";
import { Container, Eyebrow } from "@/components/site/primitives";
import { patientCases } from "@/content/cases";
import { externalGalleries } from "@/content/site";

export function CaseStrip({
  procedureSlug,
  procedureLabel,
}: {
  procedureSlug: string;
  procedureLabel: string;
}) {
  const all = patientCases.filter((c) => c.procedureSlug === procedureSlug);
  const approved = all.filter((c) => c.consent === "confirmed").slice(0, 3);
  const awaiting = all.length - all.filter((c) => c.consent === "confirmed").length;

  return (
    <Container>
      <section className="rule-t py-10 lg:py-14" id="cases">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <Eyebrow>Patient cases</Eyebrow>
          <Link href="/patient-cases" className="text-sm underline underline-offset-4">
            All published cases
          </Link>
        </div>

        {approved.length ? (
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {approved.map((c) => (
              <CaseFigure key={c.id} patientCase={c} />
            ))}
          </div>
        ) : (
          <div className="mt-6 max-w-2xl">
            <p className="font-display text-xl leading-snug">
              No {procedureLabel.toLowerCase()} cases are published here yet.
            </p>
            <p className="mt-3 text-muted-foreground">
              {awaiting > 0
                ? `${awaiting} ${awaiting === 1 ? "case is" : "cases are"} held in the practice archive for this procedure. They appear here only once written consent for publication on this website has been confirmed for each patient.`
                : "Cases appear here once written consent for publication on this website has been confirmed for each patient."}
            </p>
            {externalGalleries.length ? (
              <p className="mt-3 text-sm text-muted-foreground">
                Further galleries are published on the practice's sister site,{" "}
                {externalGalleries[0] ? (
                  <a
                    href={externalGalleries[0].href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                  >
                    All About Cosmetic Surgery
                  </a>
                ) : null}
                .
              </p>
            ) : null}
          </div>
        )}
      </section>
    </Container>
  );
}
