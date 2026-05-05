"use client";

import { useState } from "react";

export function Pledge({
  items,
  chosenLabel,
  resetLabel,
  perfectLabel,
}: {
  items: string[];
  chosenLabel: string;
  resetLabel: string;
  perfectLabel: string;
}) {
  const [picked, setPicked] = useState<Set<number>>(new Set());

  const toggle = (i: number) =>
    setPicked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  const reset = () => setPicked(new Set());
  const all = picked.size === items.length;

  return (
    <div data-testid="pledge">
      <div className="flex items-center justify-between mb-6">
        <div className="text-slate-900">
          <span
            data-testid="pledge-count"
            className="text-3xl font-semibold tracking-tight"
          >
            {picked.size}
          </span>{" "}
          <span className="text-xs uppercase tracking-eyebrow text-slate-500">
            / {items.length} {chosenLabel}
          </span>
        </div>
        <button
          type="button"
          onClick={reset}
          className="btn-outline text-sm"
          data-testid="pledge-reset"
        >
          {resetLabel}
        </button>
      </div>

      <ul className="grid sm:grid-cols-2 gap-3">
        {items.map((label, i) => {
          const on = picked.has(i);
          return (
            <li key={i}>
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-pressed={on}
                data-testid={`pledge-${i}`}
                className={`w-full text-left rounded-md px-4 py-3 border transition-colors flex items-center gap-3 ${
                  on
                    ? "bg-leaf-50 border-leaf-400 text-leaf-700"
                    : "bg-white border-slate-200 hover:bg-slate-50"
                }`}
              >
                <span
                  className={`inline-grid place-items-center w-5 h-5 rounded-sm border ${
                    on
                      ? "bg-leaf-500 border-leaf-500 text-white text-xs"
                      : "border-slate-300"
                  }`}
                  aria-hidden
                >
                  {on ? "✓" : ""}
                </span>
                <span>{label}</span>
              </button>
            </li>
          );
        })}
      </ul>

      {all && (
        <p
          data-testid="pledge-perfect"
          className="mt-6 rounded-md bg-leaf-50 text-leaf-700 px-4 py-3 border border-leaf-300"
        >
          {perfectLabel}
        </p>
      )}
    </div>
  );
}
