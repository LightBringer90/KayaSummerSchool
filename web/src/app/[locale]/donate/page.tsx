import { getDictionary, type Locale } from "@/i18n/dictionaries";

export default function DonatePage({
  params,
}: {
  params: { locale: Locale };
}) {
  const t = getDictionary(params.locale);
  return (
    <>
      <section className="section-orange">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <span className="chip-orange">{t.nav.donate}</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-brand-900">
            {t.donate.title}
          </h1>
          <p className="mt-4 text-brand-900/80 max-w-2xl">
            {t.donate.subtitle}
          </p>
        </div>
      </section>

      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-sky-50 border border-sky-300 p-8">
              <div className="h-1 w-12 bg-sky-500 mb-4" />
              <span className="chip-blue">{t.donate.bankTitle}</span>
              <p className="mt-4 text-sky-900 break-words">
                {t.donate.bankNote}
              </p>
            </div>
            <div className="bg-brand-50 border border-brand-300 p-8 flex flex-col">
              <div className="h-1 w-12 bg-brand-500 mb-4" />
              <span className="chip-orange">{t.donate.onlineTitle}</span>
              <p className="mt-4 text-brand-900">{t.donate.onlineNote}</p>
              <a
                href="#"
                className="btn-primary mt-6 self-start"
                data-testid="donate-card"
              >
                {t.donate.donateBtn}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
