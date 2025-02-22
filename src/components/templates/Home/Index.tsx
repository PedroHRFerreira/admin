import style from "./styles.module.scss";
import OrganismsGraphic from "@/components/organisms/Graphic/Index";
const TemplateHome = () => {
  return (
    <article className={style.home}>
      <OrganismsGraphic />
    </article>
  );
};
export default TemplateHome;
