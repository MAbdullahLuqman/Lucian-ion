import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-5">
      <div className="max-w-md text-center">
        <p className="label">Error 404</p>
        <h1 className="mt-4 font-display text-4xl">This page isn't here</h1>
        <p className="mt-3 text-muted-foreground">
          The page may have moved. The site map lists every page on this site.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="bg-primary px-5 py-3 text-sm text-primary-foreground">
            Go home
          </Link>
          <Link href="/site-map" className="border border-rule px-5 py-3 text-sm">
            Site map
          </Link>
        </div>
      </div>
    </div>
  );
}
