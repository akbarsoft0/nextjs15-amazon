import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export default async function MyLinks() {
  const t = await getTranslations("Header");
  return (
    <nav className="flex justify-center flex-1 gap-4">
      <Link href="/">{t("home")}</Link>
      <Link href="/about">{t("about")}</Link>
      <Link href="/contact">{t("contact")}</Link>
    </nav>
  );
}
