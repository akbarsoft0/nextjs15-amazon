import { Locale, routing } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { Globe } from "lucide-react";
import LocalSwitcherSelect from "./LocalSwitcherSelect";

export default function LocalSwitcher() {
  const locale: string = useLocale();

  return (
    <div>
      <Globe />
      <LocalSwitcherSelect defaultValue={locale} label="Select Locale" />
    </div>
  );
}
