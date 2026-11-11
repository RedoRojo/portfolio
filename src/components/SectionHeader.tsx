interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="space-y-2 mb-8 border-b border-[var(--border-subtle)] pb-4">
      <span className="font-serif italic text-sm text-[var(--accent)] block">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-serif font-normal tracking-tight text-[var(--text-primary)]">
        {title}
      </h2>
      {description && (
        <p className="text-base font-serif text-[var(--text-secondary)] leading-relaxed max-w-[60ch]">
          {description}
        </p>
      )}
    </div>
  );
}
