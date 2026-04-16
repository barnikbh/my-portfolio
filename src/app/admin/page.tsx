"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// ─── Types ─────────────────────────────────────────────────────────────────

interface Stats {
  total: number;
  today: number;
  daily: { date: string; count: number }[];
  topPages: { path: string; count: number }[];
}

// ─── Login Form ────────────────────────────────────────────────────────────

function LoginForm({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      onSuccess();
    } else {
      setError("Wrong password.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <h1 className="text-xl font-bold">Admin</h1>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-foreground"
          autoFocus
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-foreground text-background rounded-lg px-4 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {loading ? "Checking..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}

// ─── Dashboard ─────────────────────────────────────────────────────────────

function Dashboard({ stats }: { stats: Stats }) {
  const maxDaily = Math.max(...stats.daily.map((d) => d.count), 1);

  return (
    <div className="py-12 space-y-10">
      <div>
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="text-sm text-muted-foreground mt-1">barnikbh.com</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="border rounded-xl p-4">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-1">
            Total visits
          </div>
          <div className="text-3xl font-bold">{stats.total.toLocaleString()}</div>
        </div>
        <div className="border rounded-xl p-4">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-1">
            Today
          </div>
          <div className="text-3xl font-bold">{stats.today.toLocaleString()}</div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold">Last 14 days</h2>
        <div className="space-y-1.5">
          {stats.daily.map((d) => (
            <div key={d.date} className="flex items-center gap-3 text-xs">
              <span className="text-muted-foreground w-24 flex-shrink-0">{d.date}</span>
              <div className="flex-1 h-5 bg-muted rounded overflow-hidden">
                <div
                  className="h-full bg-foreground rounded transition-all"
                  style={{ width: `${(d.count / maxDaily) * 100}%` }}
                />
              </div>
              <span className="w-8 text-right font-medium">{d.count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold">Top pages</h2>
        <div className="border rounded-xl divide-y">
          {stats.topPages.length === 0 && (
            <p className="text-xs text-muted-foreground px-4 py-3">No data yet.</p>
          )}
          {stats.topPages.map((p) => (
            <div key={p.path} className="flex items-center justify-between px-4 py-2.5">
              <span className="text-sm font-mono text-muted-foreground">{p.path}</span>
              <span className="text-sm font-semibold">{p.count.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────

type View = "loading" | "login" | "dashboard";

export default function AdminPage() {
  const [view, setView] = useState<View>("loading");
  const [stats, setStats] = useState<Stats | null>(null);
  const router = useRouter();

  async function loadStats() {
    const res = await fetch("/api/admin-stats");
    if (res.status === 401) {
      setView("login");
      return;
    }
    const data = await res.json();
    setStats(data);
    setView("dashboard");
  }

  useEffect(() => {
    loadStats();
  }, []);

  if (view === "loading") return null;
  if (view === "login") return <LoginForm onSuccess={loadStats} />;
  if (view === "dashboard" && stats) return <Dashboard stats={stats} />;
  return null;
}
