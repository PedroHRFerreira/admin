import { useRouter } from "next/router";
import style from "./styles.module.scss";

const OrganismsAsideMenu = () => {
  const router = useRouter();

  const paginate = [
    { id: 1, route: "/", name: "Home" },
    { id: 2, route: "/listagem", name: "Listagem" },
    { id: 3, route: "/gastos", name: "Gastos" },
    { id: 4, route: "/tabela", name: "Tabela" },
    { id: 5, route: "/metas", name: "Metas" },
  ];

  return (
    <aside className={style.aside}>
      <ul className={style.aside__menu}>
        {paginate.map((item) => (
          <li
            key={item.id}
            className={router.pathname === item.route ? style.active : ""}
          >
            <a href={item.route}>{item.name}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default OrganismsAsideMenu;
