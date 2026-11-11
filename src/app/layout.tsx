import type { Metadata } from "next";
import { Source_Serif_4, Oswald, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import HeaderNav from "@/components/HeaderNav";
import FooterContent from "@/components/FooterContent";
import BackToTop from "@/components/BackToTop";
import { LanguageProvider } from "@/context/LanguageContext";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const SITE_URL = "https://redoportfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cristhian Victor Rojas Marquez | Software Engineer",
    template: "%s | Cristhian Victor Rojas Marquez",
  },
  description:
    "Systems Engineering Honors graduate & ICPC national finalist. Full-Stack & AI-Assisted Software Engineer specializing in React, Next.js, NestJS, FastAPI, and dynamic code analysis.",
  keywords: [
    "Cristhian Victor Rojas Marquez",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "NestJS",
    "FastAPI",
    "AI-Assisted Development",
    "Bolivia",
  ],
  authors: [{ name: "Cristhian Victor Rojas Marquez", url: SITE_URL }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Cristhian Victor Rojas Marquez — Portfolio",
    title: "Cristhian Victor Rojas Marquez | Software Engineer",
    description:
      "Full-Stack & AI-Assisted Software Engineer. React, Next.js, NestJS, FastAPI, PostgreSQL & dynamic code analysis.",
  },
  twitter: {
    card: "summary",
    title: "Cristhian Victor Rojas Marquez | Software Engineer",
    description:
      "Full-Stack & AI-Assisted Software Engineer. React, Next.js, NestJS, FastAPI, PostgreSQL & dynamic code analysis.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cristhian Victor Rojas Marquez",
  jobTitle: "Software Engineer",
  url: SITE_URL,
  email: "mailto:cristhiabnvictorrm@gmail.com",
  sameAs: [
    "https://github.com/RedoRojo",
    "https://linkedin.com/in/rojasredo",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: 'Universidad Católica Boliviana "San Pablo"',
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cochabamba",
    addressCountry: "BO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sourceSerif.variable} ${oswald.variable} ${jetbrainsMono.variable} h-full`}
    >
      <head>
        <meta name="color-scheme" content="light dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var resolved = stored === 'dark' || stored === 'light' ? stored : (prefersDark ? 'dark' : 'light');
                  var meta = document.querySelector('meta[name="color-scheme"]');
                  if (meta) {
                    meta.setAttribute('content', stored === 'dark' || stored === 'light' ? stored : 'light dark');
                  }
                  if (resolved === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-200">
        <a
          href="#main-content"
          className="skip-link visually-hidden print:hidden"
        >
          Skip to main content
        </a>
        <LanguageProvider>
          <HeaderNav />

          <div id="scroll-sentinel" aria-hidden="true" className="h-px w-full pointer-events-none" />

          <main
            id="main-content"
            tabIndex={-1}
            className="flex-1 w-full focus:outline-none"
          >
            <PageTransition>{children}</PageTransition>
          </main>

          <FooterContent />
          <BackToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
