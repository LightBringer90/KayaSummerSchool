import { getDictionary, type Locale } from "@/i18n/dictionaries";

const photos = [
  "/gallery/01.jpeg",
  "/gallery/02.jpeg",
  "/gallery/03.jpeg",
  "/gallery/04.jpeg",
  "/gallery/05.jpeg",
];

export default function GalleryPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const t = getDictionary(params.locale);
  return (
    <>
      <section className="section-blue">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <span className="chip-blue">{t.nav.gallery}</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-sky-900">
            {t.gallery.title}
          </h1>
          <p className="mt-4 text-sky-900/80 max-w-2xl">
            {t.gallery.subtitle}
          </p>
        </div>
      </section>

      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-2 grid-cols-2 md:grid-cols-3">
            {photos.map((src, i) => {
              const ring = ["ring-brand-300", "ring-sky-300", "ring-leaf-300"][
                i % 3
              ];
              return (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={src}
                  alt=""
                  className={`aspect-square object-cover w-full ring-2 ${ring}`}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
