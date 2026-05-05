import { CharacterGame } from "@/components/CharacterGame";
import { getDictionary, type Locale } from "@/i18n/dictionaries";

export default function PlayPage({ params }: { params: { locale: Locale } }) {
  const t = getDictionary(params.locale);
  return (
    <>
      <section className="section-green">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-20">
          <span className="chip-green">{t.play.navLabel}</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-leaf-900">
            {t.play.title}
          </h1>
          <p className="mt-4 text-leaf-900/80 max-w-2xl">{t.play.subtitle}</p>
        </div>
      </section>
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <CharacterGame t={t.play} locale={params.locale} />
        </div>
      </section>
    </>
  );
}
