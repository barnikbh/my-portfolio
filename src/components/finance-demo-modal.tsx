"use client";

import { useState } from "react";

type Page = "cashflow" | "networth" | "assets" | "stocks" | "guidance" | "history";

const NAV_ITEMS: { id: Page; label: string; icon: string }[] = [
  { id: "cashflow", label: "Cash Flow", icon: "↕" },
  { id: "networth", label: "Net Worth", icon: "◎" },
  { id: "assets", label: "Assets", icon: "🔒" },
  { id: "stocks", label: "Stocks", icon: "↗" },
  { id: "guidance", label: "Guidance", icon: "✦" },
  { id: "history", label: "History", icon: "◷" },
];

function Blurred({ children }: { children: React.ReactNode }) {
  return <span className="blur-sm select-none">{children}</span>;
}

function KpiCard({ label, value, sub, color }: { label: string; value: React.ReactNode; sub: string; color?: "green" | "red" }) {
  return (
    <div className="rounded-xl border bg-white dark:bg-[#161616] dark:border-[#222] p-4">
      <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1.5">{label}</div>
      <div className={`text-xl font-bold tabular-nums leading-none ${color === "green" ? "text-green-600" : color === "red" ? "text-red-500" : "text-gray-900 dark:text-gray-100"}`}>{value}</div>
      <div className="text-[11px] text-gray-400 mt-1">{sub}</div>
    </div>
  );
}

function BarChart({ bars }: { bars: { height: number; color: "green" | "red" }[] }) {
  return (
    <div className="h-36 bg-gray-50 dark:bg-[#1a1a1a] rounded-lg flex items-end gap-2 p-3 overflow-hidden">
      {bars.map((b, i) => (
        <div
          key={i}
          className={`flex-1 rounded-t ${b.color === "green" ? "bg-gradient-to-t from-green-300 to-green-400" : "bg-gradient-to-t from-red-200 to-red-300"}`}
          style={{ height: `${b.height}%` }}
        />
      ))}
    </div>
  );
}

function Disclaimer() {
  return (
    <div className="text-[11px] text-gray-400 text-center mt-3 p-3 bg-gray-50 dark:bg-[#161616] rounded-lg border border-gray-100 dark:border-[#222]">
      All figures are illustrative only. Real data is encrypted and password-protected.{" "}
      <a href="https://accounts.barnikbh.com" className="text-blue-500 font-semibold">Request access →</a>
    </div>
  );
}

function PageCashflow() {
  return (
    <div>
      <div className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">Cash Flow</div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        <KpiCard label="Monthly Income" value={<Blurred>₹1,85,000</Blurred>} sub="FY 2024-25" />
        <KpiCard label="Expenses" value={<Blurred>₹72,400</Blurred>} sub="This month" color="red" />
        <KpiCard label="Savings Rate" value="38%" sub="↑ 4% vs last month" color="green" />
        <KpiCard label="Net Worth" value={<Blurred>₹42.6L</Blurred>} sub="↑ ₹1.2L this month" color="green" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <div className="rounded-xl border bg-white dark:bg-[#161616] dark:border-[#222] p-4">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">Income vs Expenses</div>
          <BarChart bars={[{height:82,color:"green"},{height:40,color:"red"},{height:85,color:"green"},{height:38,color:"red"},{height:88,color:"green"},{height:42,color:"red"},{height:90,color:"green"},{height:39,color:"red"}]} />
        </div>
        <div className="rounded-xl border bg-white dark:bg-[#161616] dark:border-[#222] p-4">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">Asset Allocation</div>
          <div className="flex items-center justify-center gap-6 h-36">
            <div className="w-24 h-24 rounded-full relative flex-shrink-0" style={{background:"conic-gradient(#4ade80 0% 38%, #60a5fa 38% 62%, #fbbf24 62% 78%, #e5e7eb 78% 100%)"}}>
              <div className="absolute inset-6 bg-white dark:bg-[#161616] rounded-full" />
            </div>
            <div className="flex flex-col gap-2 text-xs text-gray-600 dark:text-gray-400">
              {[["#4ade80","Equity"],["#60a5fa","Debt"],["#fbbf24","Gold"],["#e5e7eb","Cash"]].map(([c,l])=>(
                <div key={l} className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{background:c}}/>{l}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="rounded-xl border bg-white dark:bg-[#161616] dark:border-[#222] p-4">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">FIRE Progress</div>
          <div className="flex flex-col items-center justify-center h-28">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">38%</div>
            <div className="w-full bg-gray-100 dark:bg-[#222] rounded-full h-2 mt-2">
              <div className="bg-green-400 h-2 rounded-full" style={{width:"38%"}} />
            </div>
            <div className="text-[11px] text-gray-400 mt-2">of FIRE number reached</div>
          </div>
        </div>
        <div className="rounded-xl border bg-white dark:bg-[#161616] dark:border-[#222] p-4">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">Savings Rate Trend</div>
          <BarChart bars={[{height:30,color:"green"},{height:35,color:"green"},{height:28,color:"green"},{height:40,color:"green"},{height:36,color:"green"},{height:42,color:"green"},{height:38,color:"green"},{height:45,color:"green"}]} />
        </div>
      </div>
      <Disclaimer />
    </div>
  );
}

function PageNetworth() {
  return (
    <div>
      <div className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">Net Worth</div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        <KpiCard label="Total Assets" value={<Blurred>₹68.4L</Blurred>} sub="Across all categories" />
        <KpiCard label="Liabilities" value={<Blurred>₹25.8L</Blurred>} sub="Home loan + credit" color="red" />
        <KpiCard label="Net Worth" value={<Blurred>₹42.6L</Blurred>} sub="↑ ₹1.2L this month" color="green" />
        <KpiCard label="Health Score" value="74/100" sub="Good" color="green" />
      </div>
      <div className="rounded-xl border bg-white dark:bg-[#161616] dark:border-[#222] p-4">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">Net Worth Over Time</div>
        <BarChart bars={[40,45,50,54,58,62,65,70,74,78,82,88].map(h=>({height:h,color:"green" as const}))} />
      </div>
      <Disclaimer />
    </div>
  );
}

function PageAssets() {
  const items = [
    { label: "Equity", pct: 38, value: "₹26.2L", color: "#4ade80" },
    { label: "Real Estate", pct: 24, value: "₹16.3L", color: "#60a5fa" },
    { label: "Debt / FD", pct: 24, value: "₹16.4L", color: "#a78bfa" },
    { label: "Gold", pct: 14, value: "₹9.5L", color: "#fbbf24" },
  ];
  return (
    <div>
      <div className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">Assets</div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        <KpiCard label="Equity" value={<Blurred>₹26.2L</Blurred>} sub="38% of portfolio" color="green" />
        <KpiCard label="Debt / FD" value={<Blurred>₹16.4L</Blurred>} sub="24% of portfolio" />
        <KpiCard label="Gold" value={<Blurred>₹9.5L</Blurred>} sub="14% of portfolio" />
        <KpiCard label="Real Estate" value={<Blurred>₹16.3L</Blurred>} sub="24% of portfolio" />
      </div>
      <div className="rounded-xl border bg-white dark:bg-[#161616] dark:border-[#222] p-4">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-4">Asset Breakdown</div>
        <div className="flex flex-col gap-3">
          {items.map(item => (
            <div key={item.label} className="flex items-center gap-3 text-sm">
              <div className="w-24 text-gray-500 dark:text-gray-400 text-xs">{item.label}</div>
              <div className="flex-1 h-2 bg-gray-100 dark:bg-[#222] rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{width:`${item.pct}%`, background: item.color}} />
              </div>
              <div className="w-16 text-right text-xs font-semibold text-gray-700 dark:text-gray-300"><Blurred>{item.value}</Blurred></div>
            </div>
          ))}
        </div>
      </div>
      <Disclaimer />
    </div>
  );
}

function PageStocks() {
  const holdings = [
    { name: "Nifty 50 Index Fund", value: "₹6.2L", ret: "+28%", weight: "33%", positive: true },
    { name: "Smallcap 250 Fund", value: "₹4.8L", ret: "+47%", weight: "26%", positive: true },
    { name: "HDFC Bank", value: "₹3.1L", ret: "-4%", weight: "17%", positive: false },
    { name: "US Tech ETF", value: "₹4.5L", ret: "+38%", weight: "24%", positive: true },
  ];
  return (
    <div>
      <div className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">Stocks & Mutual Funds</div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        <KpiCard label="Portfolio Value" value={<Blurred>₹18.6L</Blurred>} sub="Live prices" />
        <KpiCard label="Invested" value={<Blurred>₹14.2L</Blurred>} sub="Cost basis" />
        <KpiCard label="Total Return" value="+31%" sub="Since inception" color="green" />
        <KpiCard label="Today" value="+0.8%" sub="vs yesterday" color="green" />
      </div>
      <div className="rounded-xl border bg-white dark:bg-[#161616] dark:border-[#222] p-4">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">Holdings</div>
        <div className="grid grid-cols-4 gap-2 text-[10px] font-semibold text-gray-400 uppercase tracking-wider pb-2 border-b border-gray-100 dark:border-[#222]">
          <div>Name</div><div className="text-right">Value</div><div className="text-right">Return</div><div className="text-right">Weight</div>
        </div>
        {holdings.map(h => (
          <div key={h.name} className="grid grid-cols-4 gap-2 text-xs py-2.5 border-b border-gray-50 dark:border-[#1f1f1f] last:border-0">
            <div className="font-medium text-gray-800 dark:text-gray-200">{h.name}</div>
            <div className="text-right text-gray-700 dark:text-gray-300"><Blurred>{h.value}</Blurred></div>
            <div className={`text-right font-semibold ${h.positive ? "text-green-600" : "text-red-500"}`}>{h.ret}</div>
            <div className="text-right text-gray-400">{h.weight}</div>
          </div>
        ))}
      </div>
      <Disclaimer />
    </div>
  );
}

function PageGuidance() {
  return (
    <div>
      <div className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">Financial Guidance</div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        <KpiCard label="Health Score" value="74/100" sub="Good" color="green" />
        <KpiCard label="Emergency Fund" value="8.2 mo" sub="Target: 6 months ✓" color="green" />
        <KpiCard label="FIRE Number" value={<Blurred>₹2.4Cr</Blurred>} sub="25x annual expenses" />
        <KpiCard label="FIRE ETA" value="2038" sub="At current savings rate" />
      </div>
      <div className="rounded-xl border bg-white dark:bg-[#161616] dark:border-[#222] p-4">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-4">AI Guidance</div>
        <div className="flex flex-col gap-3">
          <div className="p-3.5 bg-green-50 dark:bg-green-950/30 rounded-xl border-l-2 border-green-400">
            <div className="text-xs font-semibold text-green-700 dark:text-green-400 mb-1">✓ Emergency fund is solid</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">You have 8.2 months of expenses covered. Consider putting excess into higher-yield instruments.</div>
          </div>
          <div className="p-3.5 bg-amber-50 dark:bg-amber-950/30 rounded-xl border-l-2 border-amber-400">
            <div className="text-xs font-semibold text-amber-700 dark:text-amber-400 mb-1">⚠ Equity allocation is below target</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">At 38%, consider increasing equity exposure by 7–10% to match your risk profile and FIRE timeline.</div>
          </div>
          <div className="p-3.5 bg-blue-50 dark:bg-blue-950/30 rounded-xl border-l-2 border-blue-400">
            <div className="text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">💡 Tax-loss harvesting opportunity</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">HDFC Bank is down 4%. Consider booking the loss before March 31 to offset LTCG from smallcap gains.</div>
          </div>
        </div>
      </div>
      <Disclaimer />
    </div>
  );
}

function PageHistory() {
  return (
    <div>
      <div className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">History</div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        <KpiCard label="1Y Growth" value="+22%" sub="Net worth" color="green" />
        <KpiCard label="3Y CAGR" value="+18%" sub="Portfolio" color="green" />
        <KpiCard label="Best Month" value={<Blurred>+₹3.4L</Blurred>} sub="Nov 2024" color="green" />
        <KpiCard label="Snapshots" value="36" sub="Monthly records" />
      </div>
      <div className="rounded-xl border bg-white dark:bg-[#161616] dark:border-[#222] p-4">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">Net Worth History — 3 Years</div>
        <BarChart bars={[35,38,36,42,44,40,48,52,50,58,62,60,66,70,68,74,78,82,80,85,88,86,90,95].map(h=>({height:h,color:"green" as const}))} />
      </div>
      <Disclaimer />
    </div>
  );
}

const PAGES: Record<Page, React.ReactNode> = {
  cashflow: <PageCashflow />,
  networth: <PageNetworth />,
  assets: <PageAssets />,
  stocks: <PageStocks />,
  guidance: <PageGuidance />,
  history: <PageHistory />,
};

export function FinanceDemoModal() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState<Page>("cashflow");

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-xs font-semibold px-3 py-1.5 rounded-md bg-foreground text-background hover:opacity-80 transition-opacity"
      >
        Load Demo
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div className="bg-background w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden flex flex-col shadow-2xl border">
            {/* Top demo banner */}
            <div className="bg-indigo-950 text-indigo-300 text-xs font-medium flex items-center justify-between px-4 py-2 flex-shrink-0">
              <span className="bg-amber-400 text-amber-950 text-[10px] font-bold px-2 py-0.5 rounded tracking-wider">DEMO</span>
              <span className="tracking-wide">Finance Dashboard — Demo Mode · All values are illustrative</span>
              <button onClick={() => setOpen(false)} className="text-indigo-300 hover:text-white text-lg leading-none">✕</button>
            </div>

            {/* Dashboard shell */}
            <div className="flex flex-1 overflow-hidden min-h-0">
              {/* Sidebar */}
              <div className="w-48 flex-shrink-0 bg-white dark:bg-[#111] border-r border-gray-100 dark:border-white/5 flex flex-col p-3 gap-1">
                <div className="text-[10px] font-bold tracking-widest text-gray-400 uppercase px-2 mb-4">Finance</div>
                {NAV_ITEMS.map(item => (
                  <button
                    key={item.id}
                    onClick={() => setPage(item.id)}
                    className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium transition-all text-left w-full ${
                      page === item.id
                        ? "text-gray-900 dark:text-white border-l-2 border-gray-900 dark:border-white rounded-l-none pl-2"
                        : "text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5"
                    }`}
                  >
                    <span className="w-4 text-center">{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 overflow-y-auto p-5 bg-gray-50 dark:bg-[#0f0f0f] relative">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                  <span className="text-7xl font-black text-black/[0.03] dark:text-white/[0.03] rotate-[-30deg] tracking-widest">DEMO</span>
                </div>
                {PAGES[page]}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
