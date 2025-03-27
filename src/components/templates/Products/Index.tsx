import React, { useState, useEffect } from "react";
import style from "./styles.module.scss";
import MoleculesTable from "@/components/molecules/Table/Index";
import OrganismsProducts from "@/components/organisms/Products/Index";
import { useFetchProducts, useDeleteProduct } from "@/store/useFetchProducts";
import { Toaster, toast } from "react-hot-toast";

const TemplateProducts = () => {
  const { data, loading, error, refetch }: any = useFetchProducts();
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const loadProducts = async () => {
      await refetch();
    };

    loadProducts();
  }, [refreshKey, refetch]);

  const rows =
    data?.products?.map((product: any) => [
      product.name,
      product.quantity.toString(),
      `R$ ${product.price}`,
    ]) || [];

  const handleProductAdded = () => {
    setRefreshKey((prev) => prev + 1);
  };

  const handleDeleteProduct = async (id: number) => {
    const response = await await useDeleteProduct(id);

    if (response?.status === "error") {
      toast.error("Erro ao remover produto");
      return;
    }

    setRefreshKey((prev) => prev + 1);
    toast.success("Produto removido com sucesso!");
  };

  return (
    <section
      className={`${style.products} ${loading || error ? "loading" : ""}`}
    >
      {loading && <div className="anim-loading"></div>}
      {error && <p>Erro ao buscar dados: {error}</p>}
      {!loading && !error && (
        <>
          <OrganismsProducts onProductAdded={handleProductAdded} />
          <MoleculesTable
            headers={["Produto", "Quantidade", "Preço"]}
            rows={rows}
            renderExtra={(rowIndex: number) => (
              <button
                className={style.button_delete}
                onClick={() => handleDeleteProduct(data.products[rowIndex].id)}
              >
                Excluir
              </button>
            )}
          />
          <Toaster />
        </>
      )}
    </section>
  );
};

export default TemplateProducts;
