import type { Metadata } from "next";
import { getPosts } from "../admin/actions";
import BlogListContent from "@/components/BlogListContent";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles, software architecture deep-dives, and engineering notes by Cristhian Victor Rojas Marquez.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogIndexPage() {
  const posts = await getPosts();

  return <BlogListContent posts={posts} />;
}
