import type { MetadataRoute } from "next";
import prisma from "@/lib/db";

const BASE_URL = "https://redoportfolio.vercel.app";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/resume`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  try {
    const [projects, posts] = await Promise.all([
      prisma.project.findMany({
        select: { id: true, slug: true, updatedAt: true },
        orderBy: { updatedAt: "desc" },
      }),
      prisma.post.findMany({
        where: { published: true },
        select: { slug: true, updatedAt: true },
        orderBy: { updatedAt: "desc" },
      }),
    ]);

    const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
      url: `${BASE_URL}/projects/${project.slug || project.id}`,
      lastModified: project.updatedAt,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

    const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

    return [...staticRoutes, ...projectRoutes, ...postRoutes];
  } catch {
    return staticRoutes;
  }
}
