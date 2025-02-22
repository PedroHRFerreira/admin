import "@/assets/globals.scss";
import style from "./styles.module.scss";
import { useState } from "react";
import AtomsIconSvg from "@/components/atoms/IconSvg/index";
import OrganismsAsideMenu from "@/components/organisms/AsideMenu/Index";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={style.container}>
      <aside className={`${style.aside} ${isOpen ? style.open : style.closed}`}>
        <span className={style.toggleArrow} onClick={() => setIsOpen(!isOpen)}>
          <AtomsIconSvg
            className={isOpen ? style.iconOpen : style.iconClosed}
            width="32px"
            height="32px"
            name="seta-para-a-esquerda"
          />
        </span>
        {isOpen && (
          <div className={style.menuContent}>
            <OrganismsAsideMenu />
          </div>
        )}
      </aside>
      <main className={style.main}>{children}</main>
    </div>
  );
}
