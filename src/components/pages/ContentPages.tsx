"use client";

import Link from "next/link";
import { useState } from "react";

import {
  ButtonLink,
  ConfirmNote,
  Container,
  Crumbs,
  Eyebrow,
  PageHero,
  Prose,
  Reveal,
  RuledList,
  SectionBlock,
} from "@/components/site/primitives";
import { CONFIRM, legalNav, nav, practice, utilityNav } from "@/content/site";
import { sections } from "@/content/procedures";
import { img } from "@/lib/images";

export function HomePage() {
  const primaryPhone = practice.phones[0] ?? "";
  return (
    <div>
      <section className="rule-b">
        <Container>
          <div className="grid gap-10 pb-14 pt-12 lg:grid-cols-12 lg:gap-12 lg:pb-20 lg:pt-16">
            <div className="lg:col-span-6">
              <Eyebrow>Aveling House · 1B Upper Wimpole Street · London</Eyebrow>
              <h1 className="mt-6 text-balance text-[2.6rem] leading-[1.03] sm:text-6xl lg:text-[4.4rem]">
                Lucian Ion <span className="text-muted-foreground">FRCS(Plast)</span>
              </h1>
              <p className="mt-4 font-display text-xl text-muted-foreground sm:text-2xl">
                Consultant plastic and cosmetic surgeon
              </p>
              <p className="measure mt-8 text-lg leading-relaxed">
                Facial surgery, with a particular focus on primary and secondary rhinoplasty and on
                rejuvenation of the face and neck. Planning is done with photography and 3D imaging,
                so a conversation about change can be specific rather than vague.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink to="/contact-us">Contact the practice</ButtonLink>
                <ButtonLink to="/lucian-ion" variant="outline">
                  About Lucian Ion
                </ButtonLink>
              </div>
              <p className="mt-8 text-sm text-muted-foreground">
                <a href={`tel:${primaryPhone.replace(/\s/g, "")}`} className="hover:underline">
                  {practice.phoneInternational}
                </a>
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-3">
                {["home-slide-2.jpg", "home-slide-4.jpg", "home-slide-5.jpg"].map((image, i) => (
                  <figure
                    key={image}
                    className={`${i === 0 ? "col-span-2 aspect-[16/10]" : "aspect-[3/4]"} overflow-hidden bg-muted`}
                  >
                    <img
                      src={img(image)}
                      alt="Black and white editorial portrait study"
                      loading={i === 0 ? "eager" : "lazy"}
                      className="h-full w-full object-cover"
                    />
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Reveal>
        <section className="rule-b bg-paper">
          <Container>
            <div className="grid gap-6 py-14 lg:grid-cols-12 lg:gap-12 lg:py-20">
              <div className="lg:col-span-4">
                <Eyebrow>The practice</Eyebrow>
              </div>
              <div className="lg:col-span-8">
                <p className="font-display text-2xl leading-snug sm:text-[2rem] sm:leading-[1.25]">
                  Changing how you look is only worth doing if it changes how you feel about
                  yourself. The work of the consultation is to find out whether surgery is the right
                  answer at all.
                </p>
                <p className="measure mt-7 leading-relaxed text-muted-foreground">
                  Surgery is offered alongside non-surgical options, and sometimes the honest
                  recommendation is to do nothing for now. Where an operation is right, planning
                  uses standard photography and 3D imaging so that the intended change can be
                  described precisely and reviewed afterwards against the same measurements.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </Reveal>

      <Container>
        <section className="py-12 lg:py-16">
          <Eyebrow>Areas of practice</Eyebrow>
          <ul className="mt-8 grid gap-px bg-rule sm:grid-cols-2">
            {sections.map((s, i) => (
              <li key={s.slug} className="bg-background">
                <Link href={`/${s.slug}`} className="group flex h-full flex-col hover:bg-secondary">
                  <span className="relative block aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={img(s.image)}
                      alt={s.imageAlt}
                      loading={i < 2 ? "eager" : "lazy"}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </span>
                  <span className="flex flex-1 flex-col p-7">
                    <span className="font-display text-2xl leading-snug">{s.title}</span>
                    <span className="measure mt-3 text-[0.975rem] leading-relaxed text-muted-foreground">
                      {s.standfirst}
                    </span>
                    <span className="label mt-6">View section →</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Container>

      <Container>
        <section className="rule-t py-14">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow>Getting in touch</Eyebrow>
            </div>
            <div className="lg:col-span-8">
              <p className="font-display text-2xl leading-snug">
                {practice.addressLines.join(", ")}
              </p>
              <p className="mt-4 text-lg">
                {practice.phones.map((p, i) => (
                  <span key={p}>
                    {i > 0 ? <span className="px-2 text-muted-foreground">/</span> : null}
                    <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:underline">
                      {p}
                    </a>
                  </span>
                ))}
              </p>
              <div className="mt-7">
                <ButtonLink to="/contact-us" variant="outline">
                  Contact Us
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

export function ConsultationPage() {
  return (
    <div>
      <Crumbs items={[{ label: "Home", to: "/" }, { label: "Consultation" }]} />
      <PageHero
        eyebrow="Before anything is decided"
        title="The consultation"
        standfirst="You will have many questions before deciding anything, and you will want to meet the surgeon. Trust matters here more than in almost any other transaction."
        image={img("rejuvenation-09.jpg")}
        imageAlt="Black and white portrait study in natural light"
      />
      <Container>
        <SectionBlock index="01" title="What it is for">
          <Prose
            paragraphs={[
              "A consultation is an assessment, not a sales appointment. Its purpose is to work out what is actually bothering you, whether an operation would address it, and whether this is the right time.",
              "Sometimes the answer is that surgery is not the right route, or not yet. That is a legitimate outcome of a consultation rather than a failure of one.",
            ]}
          />
        </SectionBlock>
        <SectionBlock index="02" title="What happens">
          <RuledList
            items={[
              "You describe what you have noticed and what you would like to be different, in your own words.",
              "Relevant medical history, medication, previous surgery and general health are discussed.",
              "An examination of the area concerned, including function where that is relevant.",
              "Standard photographs, and 3D imaging where it is useful, so the plan can be described in specific terms.",
              "A discussion of what is achievable, what is not, and which alternatives are worth considering.",
              "Risks and recovery, and the chance to ask everything you came with.",
            ]}
          />
        </SectionBlock>
        <SectionBlock index="03" title="What to bring">
          <RuledList
            items={[
              "A written list of your own questions.",
              "A list of medication, supplements and allergies.",
              "Details of previous surgery, and operation notes or pre-operative photographs if you have them.",
              "Photographs of results you like, and of results you dislike.",
              "Anyone you would like with you.",
            ]}
          />
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink to="/tools/consultation-questions">Build your question list</ButtonLink>
            <ButtonLink to="/tools/consultation-planner" variant="outline">
              Consultation preparation planner
            </ButtonLink>
          </div>
        </SectionBlock>
        <SectionBlock index="04" title="Deciding">
          <Prose
            paragraphs={[
              "There is no advantage to deciding quickly. Time between a consultation and a decision is part of the process.",
              "If you feel rushed by anyone at any clinic, that is information worth acting on.",
            ]}
          />
        </SectionBlock>
        <section className="rule-t py-10 lg:py-14">
          <Eyebrow>Awaiting approval</Eyebrow>
          <div className="mt-4 grid gap-3 lg:max-w-3xl">
            <ConfirmNote>
              {CONFIRM} consultation fee, length of appointment, remote consultation policy and
              cooling-off period.
            </ConfirmNote>
          </div>
        </section>
      </Container>
    </div>
  );
}

export function ContactPage() {
  const [selectedDay, setSelectedDay] = useState(17);
  const [selectedTime, setSelectedTime] = useState("Afternoon");
  const [prepared, setPrepared] = useState(false);
  const days = [
    30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 1, 2, 3,
  ];
  const preferenceSlots = ["Morning", "Lunch time", "Afternoon", "After work", "No preference"];

  return (
    <div>
      <Crumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />

      <section className="rule-b bg-paper py-10 lg:py-16">
        <Container width="wide">
          <div className="overflow-hidden rounded-[1.75rem] bg-background shadow-sm ring-1 ring-rule">
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="px-6 py-10 text-center sm:px-10 lg:px-14 lg:py-14">
                <h1 className="text-4xl leading-tight sm:text-5xl">Contact Us</h1>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  Ask about arranging a consultation with Lucian Ion at Aveling House. Nothing here
                  commits you to surgery.
                </p>

                <div className="mx-auto mt-14 max-w-2xl">
                  <div className="mb-8 flex items-center justify-between">
                    <button
                      type="button"
                      aria-label="Previous month"
                      className="text-4xl leading-none"
                    >
                      ‹
                    </button>
                    <h2 className="font-sans text-2xl font-semibold">Preferred day</h2>
                    <button type="button" aria-label="Next month" className="text-4xl leading-none">
                      ›
                    </button>
                  </div>
                  <div className="grid grid-cols-7 gap-y-7 text-center text-lg">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                      <span key={day} className="font-medium text-muted-foreground">
                        {day}
                      </span>
                    ))}
                    {days.map((day, i) => {
                      const muted = i < 2 || i > 31;
                      const active = day === selectedDay && !muted;
                      return (
                        <button
                          key={`${day}-${i}`}
                          type="button"
                          onClick={() => !muted && setSelectedDay(day)}
                          className={`mx-auto flex h-11 w-11 items-center justify-center rounded-xl text-lg ${
                            active
                              ? "bg-[#214b3f] text-white"
                              : muted
                                ? "text-muted-foreground/55"
                                : "hover:bg-secondary"
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="border-t border-rule px-6 py-10 sm:px-10 lg:border-l lg:border-t-0 lg:px-14 lg:py-14">
                <h2 className="text-center text-4xl leading-tight sm:text-5xl">
                  Request a consultation
                </h2>
                <p className="mt-6 text-center text-lg">What time works best?</p>
                <p className="mt-2 text-center text-sm text-muted-foreground">London, UK</p>
                <div className="mt-10 grid max-h-[19rem] gap-4 overflow-y-auto pr-2">
                  {preferenceSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`rounded-md border px-5 py-4 text-lg transition-colors ${
                        selectedTime === slot
                          ? "border-[#214b3f] bg-[#214b3f] text-white"
                          : "border-rule bg-background hover:bg-secondary"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>

                <form
                  className="mt-9 grid gap-4"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setPrepared(true);
                  }}
                >
                  <label className="grid gap-2">
                    <span className="label">Name</span>
                    <input
                      className="rounded-md border border-rule bg-background px-4 py-3"
                      required
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="label">Telephone or email</span>
                    <input
                      className="rounded-md border border-rule bg-background px-4 py-3"
                      required
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="label">What would you like to discuss?</span>
                    <textarea className="min-h-28 rounded-md border border-rule bg-background px-4 py-3" />
                  </label>
                  <button
                    type="submit"
                    className="rounded-md bg-[#214b3f] px-5 py-4 text-sm font-medium text-white hover:bg-[#18382f]"
                  >
                    Prepare enquiry
                  </button>
                  {prepared ? (
                    <p className="text-sm leading-relaxed text-muted-foreground" aria-live="polite">
                      Your enquiry notes are ready in this browser. The practice contact details are
                      below; online sending needs the practice email or form endpoint to be
                      confirmed.
                    </p>
                  ) : null}
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <SectionBlock index="01" title="What to expect">
          <Prose
            paragraphs={[
              "When someone enquires, the first step is a practical conversation with the practice. You can ask what a consultation involves, what information to bring and whether your concern is something Lucian assesses.",
              "A consultation is an assessment, not a commitment to surgery. It is also a place to ask what surgery would not change, what alternatives exist and whether doing nothing for now is reasonable.",
            ]}
          />
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <Link
              href="/tools/consultation-questions"
              className="border border-rule p-5 hover:bg-secondary"
            >
              <span className="font-display text-xl">Prepare questions for your consultation</span>
              <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                Choose questions and print a personal list. No email address required.
              </span>
            </Link>
            <Link
              href="/tools/consultation-planner"
              className="border border-rule p-5 hover:bg-secondary"
            >
              <span className="font-display text-xl">Consultation preparation checklist</span>
              <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                Work through what to bring and what to think about before you call.
              </span>
            </Link>
          </div>
        </SectionBlock>

        <SectionBlock index="02" title="Where we are">
          <address className="not-italic">
            <p className="font-display text-2xl leading-snug">
              {practice.addressLines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
          </address>
          <p className="mt-6 text-lg">
            {practice.phones.map((p, i) => (
              <span key={p}>
                {i > 0 ? <span className="px-2 text-muted-foreground">/</span> : null}
                <a href={`tel:${p.replace(/\s/g, "")}`} className="underline underline-offset-4">
                  {p}
                </a>
              </span>
            ))}
          </p>
          <p className="mt-4">
            <a
              href={practice.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              Open in Google Maps
            </a>
          </p>
          <div className="mt-6 max-w-2xl">
            <ConfirmNote>
              {CONFIRM} the practice email address or secure enquiry form endpoint. It has not been
              guessed here.
            </ConfirmNote>
          </div>
        </SectionBlock>
        <SectionBlock index="03" title="Regulated practice">
          <p className="measure text-[1.0625rem] leading-relaxed text-foreground/85">
            {practice.company}
          </p>
        </SectionBlock>
      </Container>
    </div>
  );
}

export function LucianIonPage() {
  return (
    <div>
      <Crumbs items={[{ label: "Home", to: "/" }, { label: "Lucian Ion" }]} />
      <PageHero
        eyebrow="The surgeon"
        title="Lucian Ion FRCS(Plast)"
        standfirst="Consultant plastic and cosmetic surgeon, practising at Aveling House, Upper Wimpole Street, London."
        image={img("home-slide-3.jpg")}
        imageAlt="Black and white editorial portrait photographed in natural light"
      />
      <Container>
        <SectionBlock index="01" title="Training and practice">
          <Prose
            paragraphs={[
              "Lucian Ion gained his specialist degree through training in plastic surgery at central London teaching hospitals, and worked at the Chelsea and Westminster Hospital alongside private practice.",
              "Since 2012 he has worked entirely in private practice, based at Aveling House on Upper Wimpole Street.",
            ]}
          />
        </SectionBlock>
        <SectionBlock index="02" title="Rhinoplasty and technology">
          <Prose
            paragraphs={[
              "Much of the practice is nose surgery, both first operations and revision work.",
              "As president of the British Society of Rhinoplasty Surgeons he established a training course in technology-assisted rhinoplasty for other surgeons.",
            ]}
          />
          <div className="mt-6">
            <ConfirmNote>
              {CONFIRM} current status of the British Society of Rhinoplasty Surgeons presidency.
            </ConfirmNote>
          </div>
        </SectionBlock>
        <SectionBlock index="03" title="How he works">
          <Prose
            paragraphs={[
              "At the centre of the practice is fitting the treatment to what the patient actually wants, keeping them safe, and aiming for results that last and sit naturally with the rest of their features.",
              "In practice that means saying when an operation is not the right answer, and being clear about what any operation will leave unchanged.",
            ]}
          />
          <img
            src={img("li-signature.png")}
            alt="Signature of Lucian Ion"
            className="mt-8 h-14 w-auto dark:invert"
            loading="lazy"
          />
        </SectionBlock>
      </Container>
    </div>
  );
}

export function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      standfirst="How personal information is handled by the practice and by this website."
      note={`${CONFIRM} This page is a structural placeholder. The practice's approved privacy notice must be supplied before launch.`}
      sections={[
        [
          "What this site collects today",
          "This website has no account system and no newsletter sign-up. The preparation pages run entirely in your browser.",
        ],
        ["Who the controller is", practice.company],
        [
          "Patient photographs",
          "Photographs of patients are published only where written consent for publication on this website has been confirmed.",
        ],
        [
          "Your rights",
          "Under UK data protection law you have rights over the personal information an organisation holds about you.",
        ],
      ]}
    />
  );
}

export function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie policy"
      standfirst="What this website stores on your device, and what it does not."
      sections={[
        [
          "As the site is built today",
          "This site sets no advertising cookies, no analytics cookies and no third-party tracking.",
        ],
        [
          "Preparation pages",
          "The preparation pages keep your answers in your browser while you use the page, so you can print your list.",
        ],
        [
          "If analytics are added later",
          `${CONFIRM} a consent banner and updated cookie list are required before analytics go live.`,
        ],
      ]}
    />
  );
}

function LegalPage({
  title,
  standfirst,
  note,
  sections: items,
}: {
  title: string;
  standfirst: string;
  note?: string;
  sections: [string, string][];
}) {
  return (
    <div>
      <Crumbs items={[{ label: "Home", to: "/" }, { label: title }]} />
      <PageHero eyebrow="Legal" title={title} standfirst={standfirst} />
      <Container>
        {note ? (
          <div className="pb-6 pt-10">
            <ConfirmNote>{note}</ConfirmNote>
          </div>
        ) : null}
        {items.map(([heading, body], i) => (
          <SectionBlock key={heading} index={String(i + 1).padStart(2, "0")} title={heading}>
            {body.startsWith(CONFIRM) ? (
              <ConfirmNote>{body}</ConfirmNote>
            ) : (
              <Prose paragraphs={[body]} />
            )}
          </SectionBlock>
        ))}
      </Container>
    </div>
  );
}

const preparationPages = [
  { label: "Patient case explorer", to: "/tools/patient-cases" },
  { label: "Consultation question builder", to: "/tools/consultation-questions" },
  { label: "Rhinoplasty comparison", to: "/tools/rhinoplasty-comparison" },
  { label: "Consultation preparation planner", to: "/tools/consultation-planner" },
  { label: "Recovery planning checklist", to: "/tools/recovery-checklist" },
];

function Column({ title, items }: { title: string; items: { label: string; to: string }[] }) {
  return (
    <div>
      <h2 className="label">{title}</h2>
      <ul className="rule-t mt-4">
        {items.map((i) => (
          <li key={i.to} className="rule-b">
            <Link href={i.to} className="block py-3 text-[1.0625rem] hover:underline">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteMapPage() {
  return (
    <div>
      <Crumbs items={[{ label: "Home", to: "/" }, { label: "Site map" }]} />
      <PageHero
        eyebrow="Index"
        title="Site map"
        standfirst="Every page on this site, in one list."
      />
      <Container>
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
          <Column title="Main" items={[{ label: "Home", to: "/" }, ...utilityNav]} />
          {nav.map((section) => (
            <Column
              key={section.to}
              title={section.label}
              items={[{ label: `${section.label} overview`, to: section.to }, ...section.children]}
            />
          ))}
          <Column title="Preparation" items={preparationPages} />
          <Column title="Legal" items={legalNav} />
        </div>
      </Container>
    </div>
  );
}

export function InternalToolReviewPage() {
  const rows = [
    ["Patient case explorer", "Filter approved cases", "Consent confirmation and image audit"],
    ["Question builder", "Printable personal question list", "Clinical wording sign-off"],
    ["Rhinoplasty comparison", "Compare nose surgery categories", "Surgeon review of wording"],
    ["Consultation planner", "Prepare notes and documents", "Practice policy details"],
    ["Recovery checklist", "Discuss home arrangements", "Procedure-specific aftercare policy"],
  ];
  return (
    <Container>
      <section className="py-12">
        <Eyebrow>Internal</Eyebrow>
        <h1 className="mt-4 text-4xl">Tool review</h1>
        <table className="mt-8 w-full border-collapse text-left">
          <thead>
            <tr className="rule-b">
              <th className="py-3 pr-4 label">Tool</th>
              <th className="py-3 pr-4 label">Purpose</th>
              <th className="py-3 pr-4 label">Approval need</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([tool, purpose, approval]) => (
              <tr key={tool} className="rule-b">
                <td className="py-4 pr-4">{tool}</td>
                <td className="py-4 pr-4 text-muted-foreground">{purpose}</td>
                <td className="py-4 pr-4 text-muted-foreground">{approval}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Container>
  );
}
