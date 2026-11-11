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
    <div className="space-y-2 mb-8 border-b-2 border-[var(--border-strong)] pb-4">
      <span className="font-mono text-xs font-bold text-[var(--accent)] tracking-widest uppercase block">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-serif font-bold tracking-tight text-[var(--text-primary)]">
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
