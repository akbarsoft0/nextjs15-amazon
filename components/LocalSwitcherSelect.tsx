"use client";
import { Locale, usePathname, useRouter, routing } from "@/i18n/routing";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocalSwitcherSelect({ defaultValue, label }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    router.replace(pathname, { locale: nextLocale }); // ✅ Removed 'params'
  }

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="locale-select" className="form-label">
          {label}
        </label>
        <select
          id="locale-select"
          className="form-select form-select-lg text-black"
          defaultValue={defaultValue}
          onChange={onSelectChange}
        >
          {routing.locales.map((locale) => (
            <option key={locale} value={locale}>
              {locale.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
