import { getDictionary, type Locale } from "@/i18n/dictionaries";
import { events } from "@/i18n/events";

export default function RegisterPage({
  params,
  searchParams,
}: {
  params: { locale: Locale };
  searchParams: { event?: string };
}) {
  const t = getDictionary(params.locale);
  const selected = searchParams.event ?? "";
  return (
    <>
    <section className="section-orange">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <span className="chip-orange">{t.nav.register}</span>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-brand-900">
          {t.register.title}
        </h1>
        <p className="mt-4 text-brand-900/80 max-w-2xl">{t.register.subtitle}</p>
      </div>
    </section>
    <section className="bg-white border-b border-slate-200">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <form
          className="grid gap-4 bg-white border border-brand-200 p-6"
          method="post"
          action={`/api/register`}
        >
          <div className="h-1 w-12 bg-brand-500 mb-2" />
          <Field label={t.register.childName} name="childName" required />
          <Field label={t.register.parentName} name="parentName" required />
          <Field label={t.register.email} name="email" type="email" required />
          <Field label={t.register.phone} name="phone" type="tel" />
          <label className="grid gap-1.5">
            <span className="text-sm text-slate-700">
              {t.register.eventLabel}
            </span>
            <select
              name="event"
              defaultValue={selected}
              className="rounded-md border border-slate-300 px-3 py-2 bg-white"
            >
              <option value="">—</option>
              {events.map((e) => (
                <option key={e.slug} value={e.slug}>
                  {e.title[params.locale]}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-1.5">
            <span className="text-sm text-slate-700">{t.register.notes}</span>
            <textarea
              name="notes"
              rows={4}
              className="rounded-md border border-slate-300 px-3 py-2 bg-white"
            />
          </label>
          <button type="submit" className="btn-primary mt-2 self-start">
            {t.register.submit}
          </button>
        </form>
      </div>
    </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-sm text-slate-700">
        {label}
        {required && <span className="text-brand-600"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="rounded-md border border-slate-300 px-3 py-2 bg-white"
      />
    </label>
  );
}
