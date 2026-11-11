import React from "react";

interface MarkdownProps {
  content: string;
}

export default function Markdown({ content }: MarkdownProps) {
  if (!content) return null;

  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inList = false;
  let listItems: React.ReactNode[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (inList && !line.startsWith("- ") && !line.startsWith("* ")) {
      elements.push(
        <ul
          key={`list-${i}`}
          className="list-[square] pl-6 my-5 font-serif text-[1.0625rem] space-y-2 text-[var(--text-secondary)]"
        >
          {listItems}
        </ul>
      );
      inList = false;
      listItems = [];
    }

    if (line === "") {
      continue;
    }

    if (line.startsWith("# ")) {
      elements.push(
        <h2
          key={i}
          className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight border-b-2 border-[var(--border-strong)] pb-2 mt-8 mb-4 text-[var(--text-primary)]"
        >
          {line.slice(2)}
        </h2>
      );
    } else if (line.startsWith("## ")) {
      elements.push(
        <h3
          key={i}
          className="text-xl sm:text-2xl font-serif font-bold tracking-tight mt-7 mb-3 text-[var(--text-primary)] flex items-center gap-2.5"
        >
          <span aria-hidden="true" className="w-2 h-2 bg-[var(--accent)] inline-block shrink-0" />
          <span>{line.slice(3)}</span>
        </h3>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h4
          key={i}
          className="text-sm font-mono font-bold mt-5 mb-2 text-[var(--accent)] uppercase tracking-[0.14em]"
        >
          {line.slice(4)}
        </h4>
      );
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote
          key={i}
          className="border-l-4 border-[var(--accent)] bg-[var(--bg-secondary)] px-5 py-4 italic text-base sm:text-lg text-[var(--text-primary)] my-6 font-serif leading-relaxed"
        >
          {parseInlineMarkdown(line.slice(2))}
        </blockquote>
      );
    } else if (line.startsWith("![") && line.includes("](")) {
      const altStart = 2;
      const altEnd = line.indexOf("](");
      const urlStart = altEnd + 2;
      const urlEnd = line.indexOf(")", urlStart);
      const alt = line.substring(altStart, altEnd);
      const url = line.substring(urlStart, urlEnd);
      elements.push(
        <figure
          key={i}
          className="border-2 border-[var(--border-strong)] bg-[var(--bg-secondary)] p-3 my-8"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={url}
            alt={alt}
            className="max-w-full h-auto grayscale contrast-125 object-cover mx-auto block"
          />
          <figcaption className="text-xs font-mono text-[var(--text-muted)] text-center block mt-2.5 pt-2 border-t border-[var(--border-subtle)] italic">
            {alt}
          </figcaption>
        </figure>
      );
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      inList = true;
      listItems.push(
        <li key={`li-${i}`} className="leading-[1.7] max-w-[64ch]">
          {parseInlineMarkdown(line.slice(2))}
        </li>
      );
    } else {
      elements.push(
        <p
          key={i}
          className="text-[1.0625rem] font-serif leading-[1.75] text-[var(--text-secondary)] my-4 max-w-[64ch]"
        >
          {parseInlineMarkdown(line)}
        </p>
      );
    }
  }

  if (inList) {
    elements.push(
      <ul
        key="list-end"
        className="list-[square] pl-6 my-5 font-serif text-[1.0625rem] space-y-2 text-[var(--text-secondary)]"
      >
        {listItems}
      </ul>
    );
  }

  return <div className="space-y-1">{elements}</div>;
}

function parseInlineMarkdown(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let currentText = text;
  let keyIdx = 0;

  while (currentText) {
    const boldMatch = currentText.match(/\*\*(.*?)\*\*/);
    const linkMatch = currentText.match(/\[(.*?)\]\((.*?)\)/);
    const codeMatch = currentText.match(/`([^`]+)`/);

    const boldIdx =
      boldMatch && boldMatch.index !== undefined ? boldMatch.index : Infinity;
    const linkIdx =
      linkMatch && linkMatch.index !== undefined ? linkMatch.index : Infinity;
    const codeIdx =
      codeMatch && codeMatch.index !== undefined ? codeMatch.index : Infinity;

    const minIdx = Math.min(boldIdx, linkIdx, codeIdx);

    if (minIdx === Infinity) {
      parts.push(currentText);
      break;
    }

    if (minIdx === boldIdx) {
      const before = currentText.substring(0, boldIdx);
      const matchText = boldMatch![1];
      if (before) parts.push(before);
      parts.push(
        <strong key={`b-${keyIdx++}`} className="font-bold text-[var(--text-primary)]">
          {matchText}
        </strong>
      );
      currentText = currentText.substring(boldIdx + boldMatch![0].length);
    } else if (minIdx === codeIdx) {
      const before = currentText.substring(0, codeIdx);
      const matchText = codeMatch![1];
      if (before) parts.push(before);
      parts.push(
        <code
          key={`c-${keyIdx++}`}
          className="font-mono text-[0.875em] px-1.5 py-0.5 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--accent)]"
        >
          {matchText}
        </code>
      );
      currentText = currentText.substring(codeIdx + codeMatch![0].length);
    } else {
      const before = currentText.substring(0, linkIdx);
      const linkText = linkMatch![1];
      const linkUrl = linkMatch![2];
      if (before) parts.push(before);
      parts.push(
        <a
          key={`a-${keyIdx++}`}
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent)] underline decoration-2 underline-offset-4 hover:text-[var(--text-primary)] font-medium"
        >
          {linkText}
        </a>
      );
      currentText = currentText.substring(linkIdx + linkMatch![0].length);
    }
  }

  return parts.length > 0 ? parts : text;
}
