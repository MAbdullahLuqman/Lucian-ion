import Link from "next/link";

import {
  ButtonLink,
  Container,
  ConfirmNote,
  Crumbs,
  Eyebrow,
  PageHero,
  Prose,
  Reveal,
  RuledList,
  SectionBlock,
} from "./primitives";
import { CaseStrip } from "@/components/cases/CaseStrip";
import type { Procedure } from "@/content/procedures";
import { procedureBySlug, sectionBySlug } from "@/content/procedures";
import { img } from "@/lib/images";

export function ProcedureArticle({ procedure }: { procedure: Procedure }) {
  const section = sectionBySlug(procedure.section)!;
  const related = procedure.related
    .map((slug) => procedureBySlug(slug))
    .filter((p): p is Procedure => Boolean(p));

  return (
    <article>
      <Crumbs
        items={[
          { label: "Home", to: "/" },
          { label: section.title, to: `/${section.slug}` },
          { label: procedure.nav },
        ]}
      />

      <PageHero
        eyebrow={section.title}
        title={procedure.title}
        standfirst={procedure.standfirst}
        image={img(procedure.image)}
        imageAlt={procedure.imageAlt}
        actions={
          <>
            <ButtonLink to="/contact-us">Book a consultation</ButtonLink>
            <ButtonLink href="#cases" variant="outline">
              View case studies
            </ButtonLink>
          </>
        }
      />

      <Container>
        <Reveal>
          <SectionBlock index="01" title="The concern" id="concern">
            <Prose paragraphs={procedure.concern} />
          </SectionBlock>
        </Reveal>

        <Reveal>
          <SectionBlock index="02" title="Lucian's approach" id="approach">
            <Prose paragraphs={procedure.approach} />
          </SectionBlock>
        </Reveal>

        <Reveal>
          <SectionBlock index="03" title="The consultation" id="consultation">
            <Prose paragraphs={procedure.consultation} />
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink to="/contact-us" variant="outline">
                Contact the practice
              </ButtonLink>
            </div>
          </SectionBlock>
        </Reveal>

        <Reveal>
          <SectionBlock index="04" title="Limitations" id="limitations">
            <RuledList items={procedure.limitations} />
          </SectionBlock>
        </Reveal>

        <Reveal>
          <SectionBlock index="05" title="Alternatives" id="alternatives">
            <ul className="rule-t">
              {procedure.alternatives.map((alt) => (
                <li key={alt.label} className="rule-b py-3">
                  {alt.to ? (
                    <Link
                      href={alt.to}
                      className="text-[1.0625rem] leading-relaxed text-foreground/85 underline decoration-rule underline-offset-4 hover:decoration-foreground"
                    >
                      {alt.label}
                    </Link>
                  ) : (
                    <span className="text-[1.0625rem] leading-relaxed">{alt.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </SectionBlock>
        </Reveal>

        <Reveal>
          <SectionBlock index="06" title="Risks and complications" id="risks">
            <p className="measure mb-5 text-muted-foreground">
              Every operation carries risk. This list is a starting point for the conversation, not
              a complete account; the risks that matter for you depend on your health and your
              anatomy and are discussed at consultation.
            </p>
            <RuledList items={procedure.risks} />
          </SectionBlock>
        </Reveal>

        <Reveal>
          <SectionBlock index="07" title="Recovery considerations" id="recovery">
            <p className="measure mb-5 text-muted-foreground">
              No timescales are given here. How long any individual takes to recover depends on the
              operation performed and on the person, and only Lucian can give you that guidance.
            </p>
            <RuledList items={procedure.recovery} />
            <div className="mt-6">
              <ButtonLink to="/tools/recovery-checklist" variant="outline">
                Questions to consider about recovery
              </ButtonLink>
            </div>
          </SectionBlock>
        </Reveal>

        <Reveal>
          <SectionBlock index="08" title="Questions worth asking" id="questions">
            <RuledList items={procedure.questions} />
          </SectionBlock>
        </Reveal>

        {procedure.confirm.length ? (
          <section className="rule-t py-10 lg:py-14">
            <Eyebrow>Awaiting approval</Eyebrow>
            <div className="mt-4 grid gap-3 lg:max-w-3xl">
              {procedure.confirm.map((c) => (
                <ConfirmNote key={c}>{c}</ConfirmNote>
              ))}
            </div>
          </section>
        ) : null}
      </Container>

      <CaseStrip procedureSlug={procedure.slug} procedureLabel={procedure.nav} />

      <Container>
        <section className="rule-t py-10 lg:py-14">
          <Eyebrow>Related pages</Eyebrow>
          <ul className="mt-6 grid gap-px bg-rule sm:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug} className="bg-background">
                <Link href={`/${r.slug}`} className="group block h-full p-6 hover:bg-secondary">
                  <span className="label">{sectionBySlug(r.section)?.title}</span>
                  <span className="mt-3 block font-display text-xl leading-snug">{r.title}</span>
                  <span className="mt-2 block text-sm text-muted-foreground">{r.standfirst}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </article>
  );
}
