interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export default function Tag({ children, variant = "default" }: TagProps) {
  return (
    <span
      className={`
        px-2.5 py-1 text-[11px] font-mono font-medium tracking-wider inline-block transition-colors
        ${
          variant === "accent"
            ? "bg-[var(--accent)] text-[var(--on-accent)] border border-[var(--accent)]"
            : "bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
        }
      `}
    >
      {children}
    </span>
  );
}
