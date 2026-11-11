import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "monolith-primary" | "monolith-secondary";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
}: ButtonProps) {
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    "monolith-primary": "btn-monolith-primary",
    "monolith-secondary": "btn-monolith-secondary",
  };

  const baseClass = `
    font-mono text-xs uppercase tracking-[0.12em]
    ${variantClasses[variant]}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={baseClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
}
