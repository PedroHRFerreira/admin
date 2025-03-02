import "@/assets/globals.scss";
import style from "./styles.module.scss";
import OrganismsAsideMenu from "@/components/organisms/AsideMenu/Index";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className={style.container}>
      <aside className={`${style.aside}`}>
        <OrganismsAsideMenu />
      </aside>
      <main className={style.main}>{children}</main>
    </div>
  );
}
