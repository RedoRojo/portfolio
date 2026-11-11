import prisma from "@/lib/db";
import { Project } from "@prisma/client";
import HomeContent from "@/components/HomeContent";

export const revalidate = 0;

export interface RecentPostItem {
  id: string;
  title: string;
  titleEs: string | null;
  slug: string;
  summary: string;
  summaryEs: string | null;
  publishedAt: Date;
}

async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const featured = await prisma.project.findMany({
      where: { featured: true },
      orderBy: { createdAt: "desc" },
      take: 3,
    });
    if (featured.length > 0) return featured;

    return await prisma.project.findMany({
      take: 3,
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Error fetching featured projects:", error);
    return [];
  }
}

async function getRecentPosts(): Promise<RecentPostItem[]> {
  try {
    return await prisma.post.findMany({
      where: { published: true },
      orderBy: { publishedAt: "desc" },
      take: 4,
      select: {
        id: true,
        title: true,
        titleEs: true,
        slug: true,
        summary: true,
        summaryEs: true,
        publishedAt: true,
      },
    });
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    return [];
  }
}

export default async function Home() {
  const [featuredProjects, recentPosts] = await Promise.all([
    getFeaturedProjects(),
    getRecentPosts(),
  ]);

  return (
    <HomeContent
      featuredProjects={featuredProjects}
      recentPosts={recentPosts}
    />
  );
}
