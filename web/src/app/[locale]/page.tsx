import Link from "next/link";
import { getDictionary, type Locale } from "@/i18n/dictionaries";
import { events } from "@/i18n/events";

const programImages = {
  events: "/gallery/05.jpeg",
  play: "/gallery/04.jpeg",
  donate: "/gallery/03.jpeg",
} as const;

const galleryPreview = [
  "/gallery/01.jpeg",
  "/gallery/02.jpeg",
  "/gallery/03.jpeg",
  "/gallery/04.jpeg",
  "/gallery/05.jpeg",
];

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const t = getDictionary(params.locale);
  const link = (path: string) => `/${params.locale}${path}`;
  const fmt = new Intl.DateTimeFormat(
    params.locale === "ro" ? "ro-RO" : "en-GB",
    { day: "numeric", month: "long" },
  );
  const previewEvents = events.slice(0, 3);

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
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
          <span className="chip-orange">{t.home.eyebrow}</span>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-slate-950 max-w-4xl">
            {t.home.heroTitle}
          </h1>
          <p className="mt-6 text-lg text-slate-800 max-w-2xl">
            {t.home.heroBody}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href={link("/events")} className="btn-primary">
              {t.home.heroCtaEvents}
            </Link>
            <Link href={link("/donate")} className="btn-secondary">
              {t.home.heroCtaDonate}
            </Link>
            <Link href={link("/play")} className="btn-tertiary">
              {t.play.navLabel}
            </Link>
          </div>
        </div>
      </section>

      {/* PROGRAMS 3-up: each card a different brand color */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="flex items-end justify-between gap-6 mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-950">
              {t.home.programsTitle}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <ProgramCard
              href={link("/events")}
              image={programImages.events}
              title={t.home.programs.events.title}
              body={t.home.programs.events.body}
              accent="brand"
            />
            <ProgramCard
              href={link("/unplug")}
              image={programImages.play}
              title={t.home.programs.play.title}
              body={t.home.programs.play.body}
              accent="leaf"
            />
            <ProgramCard
              href={link("/donate")}
              image={programImages.donate}
              title={t.home.programs.donate.title}
              body={t.home.programs.donate.body}
              accent="sky"
            />
          </div>
        </div>
      </section>

      {/* EVENTS PREVIEW — blue band */}
      <section className="section-blue">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <span className="chip-blue">{t.nav.events}</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-sky-900">
                {t.home.eventsSectionTitle}
              </h2>
              <p className="mt-2 text-sky-900/80 max-w-xl">
                {t.home.eventsSectionBody}
              </p>
            </div>
            <Link
              href={link("/events")}
              className="text-sm text-sky-700 hover:text-sky-900 underline underline-offset-4"
            >
              {t.home.eventsSeeAll} →
            </Link>
          </div>
          <ul className="grid gap-6 md:grid-cols-3">
            {previewEvents.map((e) => (
              <li
                key={e.slug}
                className="bg-white border border-sky-200 flex flex-col"
              >
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
                    className="mt-4 self-start text-sm text-brand-600 hover:text-brand-700 underline underline-offset-4 font-medium"
                  >
                    {t.events.register} →
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <span className="chip-green">{t.nav.gallery}</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-950">
                {t.gallery.title}
              </h2>
              <p className="mt-2 text-slate-600 max-w-xl">
                {t.gallery.subtitle}
              </p>
            </div>
            <Link
              href={link("/gallery")}
              className="text-sm text-leaf-700 hover:text-leaf-900 underline underline-offset-4"
            >
              {t.nav.gallery} →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {galleryPreview.map((src, i) => {
              const ring = ["ring-brand-300", "ring-sky-300", "ring-leaf-300"][
                i % 3
              ];
              return (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt=""
                  className={`aspect-square object-cover w-full ring-2 ${ring}`}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* QUOTE BAND — green */}
      <section className="section-green">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-24 text-center">
          <span className="chip-green">{t.unplug.navLabel}</span>
          <p className="mt-6 text-2xl md:text-3xl font-medium text-leaf-900 leading-relaxed">
            {t.home.quoteText}
          </p>
          <p className="mt-6 eyebrow text-leaf-700">{t.home.quoteAuthor}</p>
        </div>
      </section>

      {/* DONATE STRIP — orange */}
      <section className="section-orange">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="chip-orange">{t.nav.donate}</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-brand-900">
              {t.home.donateBannerTitle}
            </h2>
            <p className="mt-3 text-brand-900/80 max-w-xl">
              {t.home.donateBannerBody}
            </p>
            <div className="mt-6 flex gap-3">
              <Link href={link("/donate")} className="btn-primary">
                {t.home.heroCtaDonate}
              </Link>
              <Link href={link("/register")} className="btn-outline">
                {t.nav.register}
              </Link>
            </div>
          </div>
          <dl className="grid grid-cols-3 gap-px bg-brand-200 border border-brand-300">
            <Stat n="320+" label={t.home.statsKids} tone="brand" />
            <Stat n="42" label={t.home.statsEvents} tone="sky" />
            <Stat n="85" label={t.home.statsVolunteers} tone="leaf" />
          </dl>
        </div>
      </section>
    </>
  );
}

function ProgramCard({
  href,
  image,
  title,
  body,
  accent,
}: {
  href: string;
  image: string;
  title: string;
  body: string;
  accent: "brand" | "sky" | "leaf";
}) {
  const map = {
    brand: {
      bg: "bg-brand-50",
      border: "border-brand-300",
      bar: "bg-brand-500",
      title: "text-brand-900",
      arrow: "text-brand-700",
    },
    sky: {
      bg: "bg-sky-50",
      border: "border-sky-300",
      bar: "bg-sky-500",
      title: "text-sky-900",
      arrow: "text-sky-700",
    },
    leaf: {
      bg: "bg-leaf-50",
      border: "border-leaf-300",
      bar: "bg-leaf-500",
      title: "text-leaf-900",
      arrow: "text-leaf-700",
    },
  } as const;
  const a = map[accent];
  return (
    <Link href={href} className={`group block border ${a.border} ${a.bg}`}>
      <div className={`h-1.5 w-full ${a.bar}`} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt="" className="aspect-[4/3] object-cover w-full" />
      <div className="p-6">
        <h3 className={`text-xl font-semibold tracking-tight ${a.title}`}>
          {title}
        </h3>
        <p className="mt-2 text-sm text-slate-700">{body}</p>
        <span
          className={`mt-4 inline-flex text-sm font-medium underline underline-offset-4 ${a.arrow}`}
        >
          →
        </span>
      </div>
    </Link>
  );
}

function Stat({
  n,
  label,
  tone,
}: {
  n: string;
  label: string;
  tone: "brand" | "sky" | "leaf";
}) {
  const tones = {
    brand: "bg-brand-50 text-brand-700",
    sky: "bg-sky-50 text-sky-700",
    leaf: "bg-leaf-50 text-leaf-700",
  } as const;
  return (
    <div className={`p-5 ${tones[tone]}`}>
      <div className="text-3xl md:text-4xl font-semibold tracking-tight">
        {n}
      </div>
      <div className="mt-1 text-xs uppercase tracking-eyebrow opacity-80">
        {label}
      </div>
    </div>
  );
}
