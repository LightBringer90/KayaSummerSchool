import Link from "next/link";
import { Pledge } from "@/components/Pledge";
import { getDictionary, type Locale } from "@/i18n/dictionaries";

export default function UnplugPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const t = getDictionary(params.locale);
  const u = t.unplug;
  return (
    <>
      <section className="section-green">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <span className="chip-green">{u.navLabel}</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-leaf-900 max-w-3xl">
            {u.title}
          </h1>
          <p className="mt-4 text-leaf-900/80 max-w-2xl">{u.subtitle}</p>
        </div>
      </section>

      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            {u.whyTitle}
          </h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {u.whyItems.map((w, i) => {
              const tones = [
                {
                  bg: "bg-brand-50",
                  border: "border-brand-300",
                  bar: "bg-brand-500",
                  title: "text-brand-900",
                },
                {
                  bg: "bg-sky-50",
                  border: "border-sky-300",
                  bar: "bg-sky-500",
                  title: "text-sky-900",
                },
                {
                  bg: "bg-leaf-50",
                  border: "border-leaf-300",
                  bar: "bg-leaf-500",
                  title: "text-leaf-900",
                },
              ];
              const c = tones[i % 3];
              return (
                <li key={i} className={`border ${c.border} ${c.bg}`}>
                  <div className={`h-1.5 w-full ${c.bar}`} />
                  <div className="p-8">
                    <div className="text-4xl">{w.icon}</div>
                    <h3
                      className={`mt-4 text-lg font-semibold ${c.title}`}
                    >
                      {w.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-700">{w.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section-orange">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <span className="chip-orange">{u.tipsTitle}</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-900">
            {u.tipsTitle}
          </h2>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {u.tips.map((tip, i) => (
              <li
                key={i}
                className="bg-white border border-brand-200 px-4 py-3 text-slate-800 flex gap-3 items-start"
              >
                <span className="text-brand-500 leading-5" aria-hidden>
                  ✿
                </span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-blue">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <span className="chip-blue">{u.pledgeTitle}</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sky-900">
            {u.pledgeTitle}
          </h2>
          <p className="mt-2 text-sky-900/80">{u.pledgeSubtitle}</p>
          <div className="mt-8">
            <Pledge
              items={[...u.pledgeItems]}
              chosenLabel={u.pledgeChosen}
              resetLabel={u.pledgeReset}
              perfectLabel={u.pledgePerfect}
            />
          </div>
          <div className="mt-12 flex gap-3">
            <Link
              href={`/${params.locale}/play`}
              className="btn-outline-green"
            >
              {t.play.navLabel}
            </Link>
            <Link href={`/${params.locale}/events`} className="btn-secondary">
              {t.nav.events}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
