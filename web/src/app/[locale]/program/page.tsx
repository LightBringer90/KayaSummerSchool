import Link from "next/link";
import { getDictionary, type Locale } from "@/i18n/dictionaries";

export default function ProgramPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const t = getDictionary(params.locale);
  const p = t.program;
  const link = (path: string) => `/${params.locale}${path}`;

  return (
    <>
      {/* HERO — orange band */}
      <section className="section-orange relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle at 85% 20%, #b6dbff 0%, transparent 45%), radial-gradient(circle at 15% 90%, #b0d8a8 0%, transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24 md:pb-16">
          <span className="chip-orange">{p.eyebrow}</span>
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-slate-950 max-w-4xl">
            {p.title}
          </h1>
          <p className="mt-4 text-lg text-slate-800 max-w-2xl italic">
            “{p.subtitle}”
          </p>
        </div>
      </section>

      {/* WEEKLY SCHEDULE — blue band */}
      <section className="section-blue">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <span className="chip-blue">{p.week.eyebrow}</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-sky-900">
            {p.week.title}
          </h2>
          <p className="mt-3 text-sky-900/80 max-w-2xl">{p.week.body}</p>

          <div className="mt-8 bg-white border-2 border-sky-300 overflow-hidden">
            <div className="grid grid-cols-[160px_1fr] md:grid-cols-[200px_1fr] bg-sky-100 text-sky-900 text-xs uppercase tracking-eyebrow font-semibold">
              <div className="px-5 py-3 border-r border-sky-200">
                {p.week.intervalHeader}
              </div>
              <div className="px-5 py-3">{p.week.dayHeader}</div>
            </div>
            {p.week.rows.map(([interval, activity], i) => (
              <div
                key={interval}
                className={`grid grid-cols-[160px_1fr] md:grid-cols-[200px_1fr] ${
                  i % 2 === 1 ? "bg-sky-50/60" : ""
                } border-t border-sky-100`}
              >
                <div className="px-5 py-4 font-semibold text-sky-800 border-r border-sky-100">
                  {interval}
                </div>
                <div className="px-5 py-4 text-slate-800">{activity}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MONTHS 2 & 3 — white with two tinted cards */}
      <section className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <span className="chip-orange">{p.months.eyebrow}</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-950">
            {p.months.title}
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="bg-sky-50 border border-sky-300">
              <div className="h-1.5 w-full bg-sky-500" />
              <div className="p-8">
                <span className="chip-blue">{p.months.m2Range}</span>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-sky-900">
                  {p.months.m2Title}
                </h3>
                <p className="mt-3 text-slate-800">{p.months.m2Body}</p>
              </div>
            </div>
            <div className="bg-leaf-50 border border-leaf-300">
              <div className="h-1.5 w-full bg-leaf-500" />
              <div className="p-8">
                <span className="chip-green">{p.months.m3Range}</span>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-leaf-900">
                  {p.months.m3Title}
                </h3>
                <p className="mt-3 text-slate-800">{p.months.m3Body}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPS — green band */}
      <section className="section-green">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <span className="chip-green">{p.camps.eyebrow}</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-leaf-900">
            {p.camps.title}
          </h2>
          <p className="mt-3 text-leaf-900/80 max-w-2xl">{p.camps.body}</p>

          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {p.camps.days.map((d, i) => (
              <li
                key={d.day}
                className="bg-white border-2 border-leaf-300 p-6 flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <span className="chip-green">{d.day}</span>
                  <span className="text-leaf-300 text-3xl font-semibold tracking-tight">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-4 text-lg font-medium text-slate-900">
                  {d.activity}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* BUDGET — orange band */}
      <section className="section-orange">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <span className="chip-orange">{p.budget.eyebrow}</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-brand-900">
            {p.budget.title}
          </h2>
          <p className="mt-3 text-brand-900/80 max-w-2xl">{p.budget.body}</p>

          <div className="mt-8 bg-white border-2 border-brand-300 overflow-hidden">
            <div className="grid grid-cols-[1fr_180px] md:grid-cols-[1fr_220px] bg-brand-100 text-brand-900 text-xs uppercase tracking-eyebrow font-semibold">
              <div className="px-5 py-3 border-r border-brand-200">
                {p.budget.categoryHeader}
              </div>
              <div className="px-5 py-3 text-right">{p.budget.costHeader}</div>
            </div>
            {p.budget.rows.map(([category, cost], i) => (
              <div
                key={category}
                className={`grid grid-cols-[1fr_180px] md:grid-cols-[1fr_220px] ${
                  i % 2 === 1 ? "bg-brand-50/60" : ""
                } border-t border-brand-100`}
              >
                <div className="px-5 py-4 text-slate-800 border-r border-brand-100">
                  {category}
                </div>
                <div className="px-5 py-4 text-right font-semibold text-brand-700">
                  {cost}
                </div>
              </div>
            ))}
            <div className="grid grid-cols-[1fr_180px] md:grid-cols-[1fr_220px] bg-brand-500 text-white border-t border-brand-600">
              <div className="px-5 py-4 font-semibold border-r border-brand-400">
                {p.budget.totalLabel}
              </div>
              <div className="px-5 py-4 text-right font-semibold">
                {p.budget.totalValue}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIES — blue band */}
      <section className="section-blue">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <span className="chip-blue">{p.strategies.eyebrow}</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-sky-900">
            {p.strategies.title}
          </h2>

          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {p.strategies.items.map((s, i) => {
              const tones = [
                {
                  bg: "bg-brand-50",
                  border: "border-brand-300",
                  bar: "bg-brand-500",
                  title: "text-brand-900",
                  num: "text-brand-300",
                },
                {
                  bg: "bg-sky-50",
                  border: "border-sky-300",
                  bar: "bg-sky-500",
                  title: "text-sky-900",
                  num: "text-sky-300",
                },
                {
                  bg: "bg-leaf-50",
                  border: "border-leaf-300",
                  bar: "bg-leaf-500",
                  title: "text-leaf-900",
                  num: "text-leaf-300",
                },
              ];
              const c = tones[i % 3];
              return (
                <li key={s.title} className={`border ${c.border} ${c.bg}`}>
                  <div className={`h-1.5 w-full ${c.bar}`} />
                  <div className="p-6">
                    <span
                      className={`text-3xl font-semibold tracking-tight ${c.num}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className={`mt-3 text-lg font-semibold ${c.title}`}
                    >
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-800">{s.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href={link("/register")} className="btn-primary">
              {t.nav.register}
            </Link>
            <Link href={link("/donate")} className="btn-secondary">
              {t.nav.donate}
            </Link>
            <Link href={link("/events")} className="btn-tertiary">
              {t.nav.events}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
