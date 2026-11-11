interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export default function Tag({ children, variant = "default" }: TagProps) {
  return (
    <span
      className={`
        px-2 py-0.5 text-[11px] font-mono inline-block border transition-colors
        ${
          variant === "accent"
            ? "border-[var(--accent)] text-[var(--accent)]"
            : "border-[var(--border-subtle)] text-[var(--text-secondary)]"
        }
      `}
    >
      {children}
    </span>
  );
}
