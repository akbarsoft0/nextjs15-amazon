import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  // const t = useTranslations("HomePage"); ////for client components
  const t = await getTranslations("HomePage"); /// we have to await in server async components
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/contact">{t("contact")}</Link>
    </div>
  );
}
