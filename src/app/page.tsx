import prisma from "@/lib/db";
import { Post, Project } from "@prisma/client";
import HomeContent from "@/components/HomeContent";

export const revalidate = 0;

export type RecentPostItem = Post & {
  project?: {
    id: string;
    title: string;
    titleEs?: string | null;
    slug: string;
  } | null;
};

async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const featured = await prisma.project.findMany({
      where: { featured: true },
      take: 3,
      orderBy: { createdAt: "desc" },
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
      take: 4,
      orderBy: { publishedAt: "desc" },
      include: {
        project: {
          select: {
            id: true,
            title: true,
            titleEs: true,
            slug: true,
          },
        },
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
