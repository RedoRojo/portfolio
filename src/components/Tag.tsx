interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export default function Tag({ children, variant = "default" }: TagProps) {
  return (
    <span
      className={`
        px-2.5 py-1 text-xs font-mono font-semibold tracking-tight inline-block transition-colors
        ${
          variant === "accent"
            ? "bg-[var(--accent)] text-[var(--on-accent)]"
            : "bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-control)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
        }
      `}
    >
      {children}
    </span>
  );
}
