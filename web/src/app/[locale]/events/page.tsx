import Link from "next/link";
import { getDictionary, type Locale } from "@/i18n/dictionaries";
import { events } from "@/i18n/events";

export default function EventsPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const t = getDictionary(params.locale);
  const link = (path: string) => `/${params.locale}${path}`;
  const fmt = new Intl.DateTimeFormat(
    params.locale === "ro" ? "ro-RO" : "en-GB",
    { day: "numeric", month: "long", year: "numeric" },
  );
  return (
    <>
      <section className="section-blue">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <span className="chip-blue">{t.nav.events}</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-sky-900">
            {t.events.title}
          </h1>
          <p className="mt-4 text-sky-900/80 max-w-2xl">{t.events.subtitle}</p>
        </div>
      </section>

      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-16">
          {events.length === 0 ? (
            <p className="text-slate-700">{t.events.empty}</p>
          ) : (
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {events.map((e) => (
                <li
                  key={e.slug}
                  className="bg-white border border-sky-200 flex flex-col"
                >
                  <div className="h-1 w-full bg-sky-500" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={e.image}
                    alt={e.title[params.locale]}
                    className="aspect-[4/3] object-cover w-full"
                  />
                  <div className="p-5 flex-1 flex flex-col">
                    <span className="chip-blue self-start">
                      {fmt.format(new Date(e.date))} · {e.city}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-slate-950 leading-snug">
                      {e.title[params.locale]}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 flex-1">
                      {e.description[params.locale]}
                    </p>
                    <Link
                      href={`${link("/register")}?event=${e.slug}`}
                      className="mt-4 self-start btn-primary"
                    >
                      {t.events.register}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
