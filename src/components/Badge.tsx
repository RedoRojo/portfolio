interface BadgeProps {
  children: React.ReactNode;
  variant?: "black" | "red" | "white" | "green";
}

export default function Badge({ children, variant = "black" }: BadgeProps) {
  const variantClasses = {
    black: "text-[var(--text-primary)] border-[var(--border-subtle)]",
    red: "text-[var(--accent)] border-[var(--accent-border)] bg-[var(--accent-subtle)]",
    white: "text-[var(--text-secondary)] border-[var(--border-subtle)]",
    green: "text-[var(--accent-green)] border-[var(--accent-green-border)] bg-[var(--accent-green-bg)]",
  };

  return (
    <span
      className={`font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 border inline-flex items-center ${variantClasses[variant]}`}
    >
      {children}
    </span>
  );
}
