import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { renderPage, pageMeta, allPaths } from "@/lib/pages";

type Params = { slug?: string[] };

const pathFrom = (params: Params) => `/${params.slug?.join("/") ?? ""}`.replace(/\/$/, "") || "/";

export function generateStaticParams() {
  return allPaths.map((path) => ({
    slug: path === "/" ? undefined : path.slice(1).split("/"),
  }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const path = pathFrom(await params);
  const meta = pageMeta(path);
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: path },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: path,
      type: meta.type ?? "website",
    },
    robots: meta.noindex ? { index: false, follow: true } : undefined,
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const path = pathFrom(await params);
  if (path === "/consultation" || path === "/tools") redirect("/contact-us");
  const page = renderPage(path);
  if (!page) notFound();
  return page;
}
