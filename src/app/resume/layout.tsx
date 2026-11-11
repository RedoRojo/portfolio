import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Resume / CV",
  description:
    "Curriculum Vitae of Cristhian Victor Rojas Marquez — Systems Engineering Honors graduate, ICPC national finalist, Full-Stack & AI-Assisted Software Engineer.",
  alternates: {
    canonical: "/resume",
  },
};

export default function ResumeLayout({ children }: { children: ReactNode }) {
  return children;
}
