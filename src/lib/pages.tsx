import type { Metadata } from "next";
import type { ReactElement } from "react";

import {
  ContactPage,
  CookiePolicyPage,
  HomePage,
  InternalToolReviewPage,
  LucianIonPage,
  PrivacyPolicyPage,
  SiteMapPage,
} from "@/components/pages/ContentPages";
import {
  ConsultationPlannerPage,
  ConsultationQuestionsPage,
  PatientCasesPage,
  RecoveryChecklistPage,
  RhinoplastyComparisonPage,
} from "@/components/pages/ToolPages";
import { ProcedureArticle } from "@/components/site/ProcedureArticle";
import { SectionOverview } from "@/components/site/SectionOverview";
import { procedures, procedureBySlug, sections, sectionBySlug } from "@/content/procedures";

type PageMeta = {
  title: string;
  description: string;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
};

const staticPages: Record<string, { meta: PageMeta; render: () => ReactElement }> = {
  "/": {
    meta: {
      title: "Lucian Ion FRCS(Plast) — Plastic and Cosmetic Surgeon, London",
      description:
        "Lucian Ion FRCS(Plast), consultant plastic and cosmetic surgeon at Aveling House, Upper Wimpole Street, London. Rhinoplasty, facial sculpting, face and neck rejuvenation, breast surgery.",
    },
    render: () => <HomePage />,
  },
  "/lucian-ion": {
    meta: {
      title: "Lucian Ion FRCS(Plast) — consultant plastic surgeon, London",
      description:
        "Lucian Ion FRCS(Plast) trained in plastic surgery at central London hospitals and practises at Upper Wimpole Street, with a focus on rhinoplasty and facial rejuvenation.",
      type: "profile",
    },
    render: () => <LucianIonPage />,
  },
  "/contact-us": {
    meta: {
      title: "Contact — Lucian Ion FRCS(Plast), Upper Wimpole Street, London",
      description:
        "Contact the practice of Lucian Ion FRCS(Plast) at Aveling House, 1B Upper Wimpole Street, London W1G 6AB. Telephone 0207 486 7757.",
    },
    render: () => <ContactPage />,
  },
  "/patient-cases": {
    meta: {
      title: "Patient cases — Lucian Ion FRCS(Plast), London",
      description:
        "Before and after photographs of surgery by Lucian Ion, published only where the patient has confirmed written consent. Filter by area and procedure.",
    },
    render: () => <PatientCasesPage />,
  },
  "/tools/patient-cases": {
    meta: {
      title: "Patient case explorer — Lucian Ion FRCS(Plast)",
      description: "Filter published patient cases by area and procedure.",
    },
    render: () => <PatientCasesPage toolsCrumb />,
  },
  "/tools/consultation-questions": {
    meta: {
      title: "Consultation question builder — Lucian Ion FRCS(Plast)",
      description:
        "Choose the questions that matter to you, add your own, and print a personal list to take to your surgical consultation.",
    },
    render: () => <ConsultationQuestionsPage />,
  },
  "/tools/rhinoplasty-comparison": {
    meta: {
      title: "Rhinoplasty comparison — Lucian Ion FRCS(Plast)",
      description: "Compare the five categories of nose surgery side by side, in plain English.",
    },
    render: () => <RhinoplastyComparisonPage />,
  },
  "/tools/consultation-planner": {
    meta: {
      title: "Consultation preparation planner — Lucian Ion FRCS(Plast)",
      description:
        "Work through preparation steps before a surgical consultation and print a checklist.",
    },
    render: () => <ConsultationPlannerPage />,
  },
  "/tools/recovery-checklist": {
    meta: {
      title: "Recovery planning checklist — Lucian Ion FRCS(Plast)",
      description:
        "Questions and arrangements to discuss before surgery. No recovery dates are predicted.",
    },
    render: () => <RecoveryChecklistPage />,
  },
  "/tools/recovery-planner": {
    meta: {
      title: "Recovery planning checklist — Lucian Ion FRCS(Plast)",
      description:
        "Questions and arrangements to discuss before surgery. No recovery dates are predicted.",
    },
    render: () => <RecoveryChecklistPage />,
  },
  "/privacy-policy": {
    meta: {
      title: "Privacy policy — Lucian Ion FRCS(Plast)",
      description:
        "How the practice of Lucian Ion FRCS(Plast) handles personal information collected through this website.",
      type: "article",
      noindex: true,
    },
    render: () => <PrivacyPolicyPage />,
  },
  "/cookie-policy": {
    meta: {
      title: "Cookie policy — Lucian Ion FRCS(Plast)",
      description: "How this website uses cookies and similar technologies.",
      type: "article",
      noindex: true,
    },
    render: () => <CookiePolicyPage />,
  },
  "/site-map": {
    meta: {
      title: "Site map — Lucian Ion FRCS(Plast)",
      description:
        "Every page on the website of Lucian Ion FRCS(Plast), consultant plastic and cosmetic surgeon in London.",
    },
    render: () => <SiteMapPage />,
  },
  "/internal/tool-review": {
    meta: {
      title: "Internal tool review — Lucian Ion FRCS(Plast)",
      description: "Private review of planning tools before launch.",
      noindex: true,
    },
    render: () => <InternalToolReviewPage />,
  },
};

export const allPaths = [
  ...Object.keys(staticPages),
  ...sections.map((section) => `/${section.slug}`),
  ...procedures.map((procedure) => `/${procedure.slug}`),
];

export function pageMeta(path: string): PageMeta | undefined {
  const staticPage = staticPages[path];
  if (staticPage) return staticPage.meta;
  const section = sectionBySlug(path.slice(1));
  if (section) return { title: section.metaTitle, description: section.metaDescription };
  const procedure = procedureBySlug(path.slice(1));
  if (procedure) {
    return {
      title: procedure.metaTitle,
      description: procedure.metaDescription,
      type: "article",
    };
  }
  return undefined;
}

export function renderPage(path: string): ReactElement | undefined {
  const staticPage = staticPages[path];
  if (staticPage) return staticPage.render();
  const section = sectionBySlug(path.slice(1));
  if (section) return <SectionOverview section={section} />;
  const procedure = procedureBySlug(path.slice(1));
  if (procedure) return <ProcedureArticle procedure={procedure} />;
  return undefined;
}
