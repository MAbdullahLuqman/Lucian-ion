import Link from "next/link";

import { ButtonLink, Container, Crumbs, Eyebrow, PageHero, Prose, Reveal } from "./primitives";
import type { Section } from "@/content/procedures";
import { proceduresInSection } from "@/content/procedures";
import { externalGalleries } from "@/content/site";
import { img } from "@/lib/images";

export function SectionOverview({ section }: { section: Section }) {
  const items = proceduresInSection(section.slug);
  const galleryKey = section.slug.split("-")[0] ?? section.slug;
  const gallery = externalGalleries.find((g) => g.label.toLowerCase().includes(galleryKey));

  return (
    <div>
      <Crumbs items={[{ label: "Home", to: "/" }, { label: section.title }]} />

      <PageHero
        eyebrow="Procedures"
        title={section.title}
        standfirst={section.standfirst}
        image={img(section.image)}
        imageAlt={section.imageAlt}
      />

      <Container>
        <Reveal>
          <section className="py-10 lg:py-14">
            <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <Eyebrow>Overview</Eyebrow>
              </div>
              <div className="lg:col-span-8">
                <Prose paragraphs={section.intro} />
              </div>
            </div>
          </section>
        </Reveal>

        {section.slug === "rhinoplasty" ? (
          <section className="rule-t py-10 lg:py-14">
            <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <Eyebrow>Compare</Eyebrow>
              </div>
              <div className="lg:col-span-8">
                <p className="measure text-[1.0625rem] leading-relaxed text-muted-foreground">
                  Reduction, augmentation, crooked nose, secondary surgery and ultrasonic bone work
                  can overlap. A side-by-side comparison can help you understand the language before
                  a consultation.
                </p>
                <div className="mt-6">
                  <ButtonLink to="/tools/rhinoplasty-comparison" variant="outline">
                    Compare rhinoplasty approaches
                  </ButtonLink>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="rule-t py-10 lg:py-14">
          <Eyebrow>Procedures in this section</Eyebrow>
          <ul className="mt-8 grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p, i) => (
              <li key={p.slug} className="bg-background">
                <Link href={`/${p.slug}`} className="group flex h-full flex-col hover:bg-secondary">
                  <span className="relative block aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={img(p.image)}
                      alt={p.imageAlt}
                      loading={i < 3 ? "eager" : "lazy"}
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </span>
                  <span className="flex flex-1 flex-col p-6">
                    <span className="font-display text-xl leading-snug">{p.title}</span>
                    <span className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {p.standfirst}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="rule-t py-10 lg:py-14">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <Eyebrow>Next step</Eyebrow>
            </div>
            <div className="lg:col-span-8">
              <p className="measure font-display text-2xl leading-snug">
                Nothing on this page recommends a procedure. Which one suits you, if any, is decided
                with Lucian at a consultation.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink to="/contact-us">Contact the practice</ButtonLink>
                {gallery ? (
                  <ButtonLink href={gallery.href} variant="outline">
                    {gallery.label} (external)
                  </ButtonLink>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
