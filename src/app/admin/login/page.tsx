"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAdmin } from "../actions";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await loginAdmin(password);
      if (res.success) {
        router.push("/admin");
        router.refresh();
      } else {
        setError(res.error || "Authentication failed");
      }
    } catch {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto my-12 bg-[var(--bg-card)] border-2 border-[var(--border-strong)] p-8 space-y-6">
      <div className="space-y-2 border-b border-[var(--border-subtle)] pb-4">
        <h1 className="text-xl font-display font-bold uppercase tracking-tight text-[var(--text-primary)]">
          Access Restricted
        </h1>
        <p className="text-xs font-mono text-[var(--text-secondary)]">
          Administrator credentials required.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 font-mono">
        <div className="space-y-2">
          <label
            htmlFor="pass"
            className="text-xs font-bold uppercase tracking-wider block text-[var(--text-secondary)]"
          >
            Password
          </label>
          <input
            id="pass"
            name="password"
            type="password"
            autoComplete="current-password"
            spellCheck={false}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            required
            aria-invalid={error ? "true" : undefined}
            aria-describedby={error ? "login-error" : undefined}
            className="w-full px-3 py-2 border border-[var(--border-strong)] bg-[var(--bg-secondary)] focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:border-[var(--accent)] text-sm text-[var(--text-primary)]"
          />
        </div>

        {error && (
          <div
            id="login-error"
            role="alert"
            aria-live="polite"
            className="border border-[var(--accent-border)] bg-[var(--accent-subtle)] p-3 text-xs text-[var(--accent)] font-mono"
          >
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full btn-primary px-4 py-2.5 font-bold text-sm tracking-wide uppercase disabled:opacity-50"
        >
          {loading ? "Signing in…" : "Sign In"}
        </button>
      </form>
    </div>
  );
}
