import React, { useState } from "react";
import style from "./styles.module.scss";
import MoleculesFormInputFloatLabel from "@/components/molecules/FormInputFloatLabel";
import { Toaster, toast } from "react-hot-toast";
import { usePostMonthlyValue } from "@/store/useFetchMonthylValue";

const OrganismsCapture = () => {
  const [salesProducts, setSalesProducts] = useState("");
  const [expenses, setExpenses] = useState("");

  const months = [
    "JANEIRO",
    "FEVEREIRO",
    "MARÇO",
    "ABRIL",
    "MAIO",
    "JUNHO",
    "JULHO",
    "AGOSTO",
    "SETEMBRO",
    "OUTUBRO",
    "NOVEMBRO",
    "DEZEMBRO",
  ];
  const currentMonth = months[new Date().getMonth()];

  const postMonthlyValue = async () => {
    if (!salesProducts || !expenses) {
      toast.error("Preencha todos os campos");
      return;
    }

    try {
      await usePostMonthlyValue({
        month: currentMonth,
        sales_quantity: Number(salesProducts),
        value_of_expenses: Number(
          expenses.replace("R$", "").replace(",", ".").trim()
        ),
      });

      toast.success("Valores adicionados com sucesso!");
      setSalesProducts("");
      setExpenses("");
      toast.success("Valores adicionados com sucesso!");
    } catch (error) {
      toast.error("Erro ao adicionar valores.");
    }
  };

  return (
    <section className={style.capture}>
      <Toaster />
      <div className={style.capture__content}>
        <MoleculesFormInputFloatLabel
          label="Quantidade de vendas mensal"
          value={salesProducts}
          onInput={setSalesProducts}
          mask="quantity"
          errors={[]}
        />
        <MoleculesFormInputFloatLabel
          label="Valor dos gastos mensal"
          value={expenses}
          onInput={setExpenses}
          mask="currency"
          errors={[]}
        />
        <div className={style.capture__content__footer}>
          <button className={style.button} onClick={postMonthlyValue}>
            Salvar
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrganismsCapture;
