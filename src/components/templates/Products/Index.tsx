import style from "./styles.module.scss";
import MoleculesTable from "@/components/molecules/Table/Index";
import OrganismsProducts from "@/components/organisms/Products/Index";
const TemplateProducts = () => {
  return (
    <section className={style.products}>
      <OrganismsProducts />
      <MoleculesTable
        headers={["Produto", "Quantidade", "Preço"]}
        rows={[
          ["Mouse", "10", "R$ 50"],
          ["Teclado", "5", "R$ 100"],
          ["Monitor", "2", "R$ 800"],
        ]}
        renderExtra={(rowIndex: any) => (
          <button onClick={() => alert(`Editar linha ${rowIndex + 1}`)}>
            Editar
          </button>
        )}
      />
    </section>
  );
};
export default TemplateProducts;
