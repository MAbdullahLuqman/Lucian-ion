"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { CaseFigure } from "@/components/cases/CaseFigure";
import { ButtonLink, Container, Crumbs, Eyebrow, PageHero } from "@/components/site/primitives";
import { PrintButton, ToolNote, ToolShell } from "@/components/tools/ToolShell";
import { patientCases } from "@/content/cases";
import { externalGalleries } from "@/content/site";
import { img } from "@/lib/images";

const preparationLinks = [
  {
    to: "/tools/patient-cases",
    name: "Patient case explorer",
    blurb:
      "Browse published before and after cases by area and procedure. Only cases with confirmed written consent appear.",
  },
  {
    to: "/tools/consultation-questions",
    name: "Consultation question builder",
    blurb: "Choose from a library of questions, add your own, and print a list.",
  },
  {
    to: "/tools/rhinoplasty-comparison",
    name: "Rhinoplasty comparison",
    blurb: "Compare the five categories of nose surgery side by side.",
  },
  {
    to: "/tools/consultation-planner",
    name: "Consultation preparation planner",
    blurb: "Work through practical preparation before an appointment.",
  },
  {
    to: "/tools/recovery-checklist",
    name: "Recovery planning checklist",
    blurb: "Questions and arrangements to settle before a date is agreed. No dates are predicted.",
  },
];

export function ToolsIndexPage() {
  return (
    <div>
      <Crumbs items={[{ label: "Home", to: "/" }, { label: "Preparation" }]} />
      <PageHero
        eyebrow="Free to use"
        title="Planning pages"
        standfirst="Five preparation pages for questions, comparisons and checklists. No email address, nothing stored, and nothing here suggests a diagnosis or recommends a procedure."
      />
      <Container>
        <ul className="grid gap-px bg-rule sm:grid-cols-2">
          {preparationLinks.map((t) => (
            <li key={t.to} className="bg-background">
              <Link href={t.to} className="flex h-full flex-col p-7 hover:bg-secondary">
                <span className="font-display text-2xl leading-snug">{t.name}</span>
                <span className="measure mt-3 text-[0.975rem] leading-relaxed text-muted-foreground">
                  {t.blurb}
                </span>
                <span className="label mt-6">Open →</span>
              </Link>
            </li>
          ))}
        </ul>
        <section className="rule-t py-10">
          <Eyebrow>How these work</Eyebrow>
          <p className="measure mt-5 leading-relaxed text-muted-foreground">
            Everything runs in your browser. Your answers are not sent anywhere, are not seen by the
            practice and are gone when you close the tab.
          </p>
        </section>
      </Container>
    </div>
  );
}

export function PatientCasesPage({ toolsCrumb = false }: { toolsCrumb?: boolean }) {
  const approved = useMemo(() => patientCases.filter((c) => c.consent === "confirmed"), []);
  const withheld = patientCases.length - approved.length;
  const categories = useMemo(
    () => ["All areas", ...Array.from(new Set(approved.map((c) => c.category)))],
    [approved],
  );
  const [category, setCategory] = useState("All areas");
  const procedures = useMemo(() => {
    const pool =
      category === "All areas" ? approved : approved.filter((c) => c.category === category);
    return ["All procedures", ...Array.from(new Set(pool.map((c) => c.procedure)))];
  }, [approved, category]);
  const [procedure, setProcedure] = useState("All procedures");
  const visible = approved.filter(
    (c) =>
      (category === "All areas" || c.category === category) &&
      (procedure === "All procedures" || c.procedure === procedure),
  );

  return (
    <div>
      <Crumbs
        items={
          toolsCrumb
            ? [{ label: "Home", to: "/" }, { label: "Patient cases" }]
            : [{ label: "Home", to: "/" }, { label: "Patient cases" }]
        }
      />
      <PageHero
        eyebrow="Case explorer"
        title="Patient cases"
        standfirst="Photographs of real patients, published only where that patient's written consent for use on this website has been confirmed."
        image={img("nose-06.jpg")}
        imageAlt="Black and white profile study"
      />
      <Container>
        <section className="rule-b py-6" id="case-explorer">
          <Eyebrow>Explore patient cases</Eyebrow>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row">
              <label className="flex flex-col gap-2">
                <span className="label">Area</span>
                <select
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    setProcedure("All procedures");
                  }}
                  className="min-w-52 border border-rule bg-background px-3 py-2 text-sm"
                >
                  {categories.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-2">
                <span className="label">Procedure</span>
                <select
                  value={procedure}
                  onChange={(e) => setProcedure(e.target.value)}
                  className="min-w-52 border border-rule bg-background px-3 py-2 text-sm"
                >
                  {procedures.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </label>
            </div>
            <p aria-live="polite" className="text-sm text-muted-foreground">
              {visible.length} published {visible.length === 1 ? "case" : "cases"}
            </p>
          </div>
        </section>

        {visible.length ? (
          <section className="py-10">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((c) => (
                <CaseFigure key={c.id} patientCase={c} />
              ))}
            </div>
          </section>
        ) : (
          <section className="py-14">
            <div className="measure">
              <h2 className="font-display text-2xl leading-snug">
                {approved.length === 0
                  ? "No cases are published on this site yet."
                  : "No published cases match that filter yet."}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                The practice archive holds {withheld} further {withheld === 1 ? "case" : "cases"}{" "}
                that are not shown. A case appears here only once written consent has been
                confirmed.
              </p>
              <ul className="mt-6 grid gap-px bg-rule">
                {externalGalleries.map((g) => (
                  <li key={g.href} className="bg-background">
                    <a
                      href={g.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block px-4 py-4 text-sm hover:bg-secondary"
                    >
                      {g.label} <span className="text-muted-foreground">— external</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </Container>
    </div>
  );
}

const questionLibrary = [
  [
    "About the surgeon",
    "How often do you perform this operation?",
    "Are you on the GMC specialist register for plastic surgery?",
    "Who will actually perform my operation?",
  ],
  [
    "About my case",
    "Am I a good candidate for this operation, and what makes you say so?",
    "What would this change, and what would it leave unchanged?",
    "Is there anything about my anatomy that makes this harder than usual?",
  ],
  [
    "Risks",
    "Which complications are most likely in my case?",
    "What is the most serious thing that could go wrong?",
    "What would happen if I needed urgent care afterwards?",
  ],
  [
    "Recovery",
    "What should I arrange at home before the operation?",
    "When would I be seen again, and how often?",
    "Who do I contact out of hours?",
  ],
  [
    "Practical matters",
    "What is the total cost, and what does it include?",
    "What happens financially if a revision is needed?",
    "Where would the operation take place?",
  ],
];

export function ConsultationQuestionsPage() {
  return (
    <ChecklistTool
      title="Consultation question builder"
      standfirst="Tick the questions you want answered, add any of your own, then print the list and take it with you. Nothing is sent anywhere."
      groups={questionLibrary}
      ownLabel="Your own questions"
      ownPlaceholder="Type a question and press Enter"
      printLabel="Print your list"
      empty="Nothing chosen yet. Tick a question on the left, or write your own."
    />
  );
}

export function ConsultationPlannerPage() {
  return (
    <ChecklistTool
      title="Consultation preparation planner"
      standfirst="Work through the practical things worth preparing before an appointment. It is a checklist, not medical advice."
      groups={[
        [
          "Before booking",
          "Write down what bothers you in your own words.",
          "List any previous procedures, injuries or treatments.",
          "Gather medication, supplement and allergy details.",
        ],
        [
          "What to bring",
          "Bring photographs of results you like and dislike.",
          "Bring operation notes or old photographs if you have had surgery before.",
          "Bring someone with you if that would help you listen and decide.",
        ],
        [
          "What to ask",
          "Ask what surgery would change and what it would leave unchanged.",
          "Ask which alternatives are reasonable, including doing nothing for now.",
          "Ask what follow-up involves and who to contact if worried.",
        ],
        [
          "After the appointment",
          "Leave time to think before deciding.",
          "Write down anything you did not understand.",
          "Book a second conversation if important questions remain.",
        ],
      ]}
      ownLabel="Notes for my consultation"
      ownPlaceholder="Add a note and press Enter"
      printLabel="Print planner"
      empty="Nothing selected yet. Tick anything useful or add your own note."
    />
  );
}

export function RecoveryChecklistPage() {
  return (
    <ChecklistTool
      title="Recovery planning checklist"
      standfirst="Questions and arrangements to settle with Lucian before a date is agreed. This page does not predict recovery times."
      groups={[
        [
          "Home",
          "Who will take me home after surgery?",
          "Who will stay with me at first?",
          "What should I prepare at home before the operation?",
        ],
        [
          "Work and responsibilities",
          "What should I tell work before committing to a date?",
          "What childcare, caring duties or pet care do I need to arrange?",
          "When should I avoid driving, heavy lifting or exercise?",
        ],
        [
          "Follow-up",
          "When will I be seen again?",
          "Will dressings or sutures need changing?",
          "Who do I contact out of hours if I am worried?",
        ],
        [
          "Warning signs",
          "What is normal swelling, bruising or discomfort?",
          "Which symptoms should prompt an urgent call?",
          "Which medicines or supplements should I stop or avoid?",
        ],
      ]}
      ownLabel="Personal arrangements"
      ownPlaceholder="Add an arrangement or question and press Enter"
      printLabel="Print checklist"
      empty="Nothing selected yet. Tick arrangements to discuss or add your own."
    />
  );
}

type ChecklistToolProps = {
  title: string;
  standfirst: string;
  groups: string[][];
  ownLabel: string;
  ownPlaceholder: string;
  printLabel: string;
  empty: string;
};

function ChecklistTool({
  title,
  standfirst,
  groups,
  ownLabel,
  ownPlaceholder,
  printLabel,
  empty,
}: ChecklistToolProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [own, setOwn] = useState<string[]>([]);
  const [draft, setDraft] = useState("");
  const toggle = (item: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(item)) next.delete(item);
      else next.add(item);
      return next;
    });
  const addOwn = () => {
    const value = draft.trim();
    if (!value) return;
    setOwn((prev) => [...prev, value]);
    setDraft("");
  };
  const items = [...selected, ...own];

  return (
    <ToolShell title={title} standfirst={standfirst}>
      <div className="grid gap-12 py-10 lg:grid-cols-12 lg:gap-14">
        <div className="no-print lg:col-span-7">
          {groups.map(([topic, ...checks]) => (
            <fieldset key={topic} className="rule-t mt-6 pt-5">
              <legend className="font-display text-xl">{topic}</legend>
              <ul className="mt-3">
                {checks.map((check) => (
                  <li key={check}>
                    <label className="flex cursor-pointer items-start gap-3 py-2.5 text-[1.0625rem] leading-snug">
                      <input
                        type="checkbox"
                        checked={selected.has(check)}
                        onChange={() => toggle(check)}
                        className="mt-1.5 h-4 w-4 shrink-0 accent-[var(--color-primary)]"
                      />
                      <span>{check}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </fieldset>
          ))}
          <div className="rule-t mt-8 pt-6">
            <h2 className="font-display text-xl">{ownLabel}</h2>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addOwn();
                  }
                }}
                placeholder={ownPlaceholder}
                className="w-full border border-rule bg-background px-4 py-3 text-[1rem]"
              />
              <button
                type="button"
                onClick={addOwn}
                className="border border-rule px-5 py-3 text-sm hover:bg-secondary"
              >
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <div className="rule-t rule-b py-5">
              <Eyebrow>Your list</Eyebrow>
              <p className="mt-2 font-display text-2xl">
                {items.length} {items.length === 1 ? "item" : "items"}
              </p>
            </div>
            {items.length === 0 ? (
              <p className="py-6 text-muted-foreground">{empty}</p>
            ) : (
              <ol className="py-6">
                {items.map((item, i) => (
                  <li key={`${item}-${i}`} className="rule-b py-3">
                    <span className="label mr-2">{String(i + 1).padStart(2, "0")}</span>
                    {item}
                  </li>
                ))}
              </ol>
            )}
            <div className="no-print flex flex-wrap gap-3">
              <PrintButton label={printLabel} />
              {items.length ? (
                <button
                  type="button"
                  onClick={() => {
                    setSelected(new Set());
                    setOwn([]);
                  }}
                  className="border border-rule px-5 py-3 text-sm hover:bg-secondary"
                >
                  Clear
                </button>
              ) : null}
            </div>
            <div className="no-print mt-6">
              <ToolNote>
                This page does not assess you and does not suggest a procedure. Your answers stay in
                this browser tab and are gone when you close it.
              </ToolNote>
            </div>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}

const rhinoplastyRows: [string, string, string, string][] = [
  [
    "Reduction",
    "/rhinoplasty/reduction",
    "A nose that reads as too projecting, too long, too wide, or with a profile hump.",
    "Reduces size while rebuilding support.",
  ],
  [
    "Augmentation",
    "/rhinoplasty/augmentation",
    "A flat bridge or under-projected tip.",
    "Adds structure and height.",
  ],
  [
    "Deviated / crooked",
    "/rhinoplasty/deviated-crooked",
    "A nose off the midline, often with blocked breathing.",
    "Releases and re-supports the framework.",
  ],
  [
    "Secondary",
    "/rhinoplasty/secondary",
    "Unsatisfactory shape or breathing after previous nose surgery.",
    "Restores missing support before refining shape.",
  ],
  [
    "Ultrasonic",
    "/rhinoplasty/ultrasonic",
    "Work on the nasal bones.",
    "A precise bone-shaping technique used within rhinoplasty.",
  ],
];

export function RhinoplastyComparisonPage() {
  return (
    <ToolShell
      title="Rhinoplasty comparison"
      standfirst="The five categories of nose surgery set out side by side. They overlap, and most operations draw on more than one."
    >
      <div className="overflow-x-auto py-8">
        <table className="w-full min-w-[52rem] border-collapse text-left">
          <thead>
            <tr>
              <th className="rule-b py-4 pr-6 label">Category</th>
              <th className="rule-b py-4 pr-6 label">What it addresses</th>
              <th className="rule-b py-4 pr-6 label">Worth knowing</th>
            </tr>
          </thead>
          <tbody>
            {rhinoplastyRows.map(([name, href, addresses, nature]) => (
              <tr key={href}>
                <td className="rule-b py-5 pr-6 align-top">
                  <Link href={href} className="font-display text-xl hover:underline">
                    {name}
                  </Link>
                </td>
                <td className="rule-b py-5 pr-6 align-top">{addresses}</td>
                <td className="rule-b py-5 pr-6 align-top">{nature}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="no-print mt-8 flex flex-wrap gap-3">
          <ButtonLink to="/rhinoplasty">Rhinoplasty overview</ButtonLink>
          <ButtonLink to="/tools/consultation-questions" variant="outline">
            Prepare questions for your consultation
          </ButtonLink>
        </div>
      </div>
    </ToolShell>
  );
}
