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
    <div className="space-y-3 mb-8 border-b-2 border-[var(--border-strong)] pb-5">
      <div className="flex items-center gap-2.5">
        <span aria-hidden="true" className="w-2.5 h-2.5 bg-[var(--accent)] inline-block shrink-0" />
        <span className="font-mono text-xs font-bold text-[var(--accent)] tracking-[0.16em] uppercase block">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-[var(--text-primary)] leading-none">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg font-serif text-[var(--text-secondary)] leading-relaxed max-w-[62ch] pt-1">
          {description}
        </p>
      )}
    </div>
  );
}
