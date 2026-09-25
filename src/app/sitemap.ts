import type { MetadataRoute } from "next";

import { allPaths } from "@/lib/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  return allPaths
    .filter((path) => !path.startsWith("/internal") && path !== "/tools/recovery-planner")
    .map((url) => ({
      url,
      lastModified: new Date(),
    }));
}
