import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectByIdOrSlug } from "../../admin/actions";
import ProjectDetailContent from "@/components/ProjectDetailContent";

interface PageProps {
  params: Promise<{ id: string }>;
}

export const revalidate = 0;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = await getProjectByIdOrSlug(id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const canonicalPath = `/projects/${project.slug || project.id}`;

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${project.title} | Cristhian Victor Rojas Marquez`,
      description: project.description,
      url: canonicalPath,
      type: "website",
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = await getProjectByIdOrSlug(id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailContent project={project} />;
}
