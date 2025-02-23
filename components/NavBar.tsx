import Link from "next/link";
import MyLinks from "./Links";
import LocalSwitcher from "./LocalSwitcher";

export default function NavBar() {
  return (
    <header className="h-14 bg-black text-white flex justify-between items-center uppercase px-4">
      <Link href={"/"}>
        <h1>next-i18n</h1>
      </Link>
      <MyLinks />
      <LocalSwitcher />
    </header>
  );
}
