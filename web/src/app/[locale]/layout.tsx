import { notFound } from "next/navigation";
import { Header, Footer } from "@/components/SiteChrome";
import { locales, type Locale } from "@/i18n/dictionaries";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(params.locale as Locale)) notFound();
  const locale = params.locale as Locale;
  return (
    <div lang={locale} className="min-h-screen flex flex-col bg-white">
      <Header locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
