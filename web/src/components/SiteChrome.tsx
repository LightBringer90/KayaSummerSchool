import Link from "next/link";
import type { Locale } from "@/i18n/dictionaries";
import { getDictionary } from "@/i18n/dictionaries";
import { Logo } from "@/components/Logo";

export function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const otherLocale: Locale = locale === "ro" ? "en" : "ro";
  const link = (path: string) => `/${locale}${path}`;
  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-20">
      <div
        aria-hidden
        className="h-1 w-full"
        style={{
          background:
            "linear-gradient(90deg, #f06f1a 0%, #f06f1a 33%, #2585e6 33%, #2585e6 66%, #3f8a35 66%, #3f8a35 100%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between gap-8">
        <Link
          href={link("")}
          className="shrink-0 text-slate-900 hover:text-brand-600 transition-colors"
          aria-label={t.siteName}
        >
          <Logo className="h-12 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          <Link
            href={link("/events")}
            className="text-slate-700 hover:text-sky-700 font-medium"
          >
            {t.nav.events}
          </Link>
          <Link
            href={link("/gallery")}
            className="text-slate-700 hover:text-sky-700 font-medium"
          >
            {t.nav.gallery}
          </Link>
          <Link
            href={link("/play")}
            className="text-slate-700 hover:text-leaf-700 font-medium"
          >
            {t.play.navLabel}
          </Link>
          <Link
            href={link("/unplug")}
            className="text-slate-700 hover:text-leaf-700 font-medium"
          >
            {t.unplug.navLabel}
          </Link>
          <Link
            href={link("/donate")}
            className="text-slate-700 hover:text-brand-700 font-medium"
          >
            {t.nav.donate}
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={link("/register")}
            className="hidden sm:inline-flex btn-primary"
          >
            {t.nav.register}
          </Link>
          <Link
            href={`/${otherLocale}`}
            className="inline-flex items-center justify-center rounded-full border border-sky-300 bg-sky-50 text-sky-700 hover:bg-sky-100 text-xs uppercase tracking-eyebrow px-3 py-1"
            aria-label="switch language"
          >
            {otherLocale}
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const link = (path: string) => `/${locale}${path}`;
  return (
    <footer className="mt-24 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <Logo className="h-12 w-auto text-slate-900" />
          <p className="mt-4 text-sm text-slate-600 max-w-xs">{t.tagline}</p>
        </div>
        <FooterCol title={t.footer.colExplore}>
          <Link href={link("/events")} className="link-quiet">
            {t.nav.events}
          </Link>
          <Link href={link("/gallery")} className="link-quiet">
            {t.nav.gallery}
          </Link>
          <Link href={link("/play")} className="link-quiet">
            {t.play.navLabel}
          </Link>
          <Link href={link("/unplug")} className="link-quiet">
            {t.unplug.navLabel}
          </Link>
        </FooterCol>
        <FooterCol title={t.footer.colSupport}>
          <Link href={link("/register")} className="link-quiet">
            {t.nav.register}
          </Link>
          <Link href={link("/donate")} className="link-quiet">
            {t.nav.donate}
          </Link>
        </FooterCol>
        <FooterCol title={t.footer.colContact}>
          <span className="text-sm text-slate-700">{t.footer.address}</span>
          <span className="text-sm text-slate-700">{t.footer.phone}</span>
          <span className="text-sm text-slate-700">{t.footer.contact}</span>
        </FooterCol>
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row gap-2 justify-between text-xs text-slate-500">
          <span>
            © {new Date().getFullYear()} {t.siteName}. {t.footer.rights}
          </span>
          <Link
            href={`/${locale === "ro" ? "en" : "ro"}`}
            className="link-quiet uppercase tracking-eyebrow"
          >
            {locale === "ro" ? "EN" : "RO"}
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="eyebrow text-slate-500 mb-4">{title}</div>
      <div className="flex flex-col gap-2 text-sm">{children}</div>
    </div>
  );
}
