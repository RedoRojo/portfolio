interface BadgeProps {
  children: React.ReactNode;
  variant?: "black" | "red" | "white" | "green";
}

export default function Badge({ children, variant = "black" }: BadgeProps) {
  const variantClasses = {
    black:
      "bg-[var(--text-primary)] text-[var(--bg-primary)] border border-[var(--text-primary)]",
    red: "bg-[var(--accent)] text-[var(--on-accent)] border border-[var(--accent)]",
    white:
      "bg-[var(--bg-card)] text-[var(--accent)] border border-[var(--accent-border)]",
    green:
      "bg-[var(--accent-green-bg)] text-[var(--accent-green)] border border-[var(--accent-green-border)]",
  };

  return (
    <span
      className={`font-serif italic text-xs font-medium px-2.5 py-0.5 rounded-[2px] inline-flex items-center transition-colors ${variantClasses[variant]}`}
    >
      {children}
    </span>
  );
}
