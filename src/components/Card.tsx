"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  accent?: boolean;
  className?: string;
  delay?: number;
}

export default function Card({
  children,
  accent = false,
  className = "",
  delay = 0,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`
        bg-[var(--bg-card)] border border-[var(--border-control)] rounded-[2px] text-[var(--text-primary)] p-6
        hover:border-[var(--border-hover)] transition-colors duration-200
        ${accent ? "border-l-2 border-l-[var(--accent)]" : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
