import style from "./styles.module.scss";
import AtomsText from "@/components/atoms/Text/Index";
import { usefetchGoalMonth, useUpdateGoal } from "@/store/usefetchGoalMonth";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import MoleculesFormInputFloatLabel from "@/components/molecules/FormInputFloatLabel";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const OrganismsGoalMonth = () => {
  const [value, setValue] = useState("");

  const currencyMask = (value: any) => {
    const numericValue =
      typeof value === "number" ? value : parseFloat(value.replace(",", "."));
    if (isNaN(numericValue)) return "R$ 0,00";
    return numericValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const { data, refetch } = usefetchGoalMonth();
  const totalPrice = Number(data?.total_price) || 0;
  const currentGoal = Number(data?.goal_value) || 0;
  const progress =
    totalPrice > 0 ? Math.min((currentGoal / totalPrice) * 100, 100) : 0;

  const updateValue = async () => {
    if (!value) {
      toast.error("Informe um valor antes de salvar.");
      return;
    }
    const numericValue = parseFloat(
      value.replace("R$", "").replace(".", "").replace(",", ".").trim()
    );
    if (isNaN(numericValue) || numericValue <= 0) {
      toast.error("Informe um valor válido.");
      return;
    }
    try {
      await useUpdateGoal({ value: numericValue });
      toast.success("Meta atualizada com sucesso!");
      setValue("");
      await refetch();
    } catch (error) {
      toast.error("Erro ao atualizar a meta.");
    }
  };

  return (
    <section className={style.goal_month}>
      <Toaster />
      <AtomsText fontSize="24px" fontWeight="bold" color="#fff">
        Metas mensal
      </AtomsText>
      <div className={style.circule}>
        <CircularProgressbarWithChildren
          value={progress}
          styles={buildStyles({
            pathColor: `${currentGoal < totalPrice ? "red" : "green"}`,
            trailColor: "#d6d6d6",
            textColor: `${currentGoal < totalPrice ? "red" : "green"}`,
          })}
        >
          <AtomsText
            fontSize="16px"
            fontWeight="bold"
            color={currentGoal < totalPrice ? "red" : "green"}
          >
            {currencyMask(totalPrice - currentGoal)}
          </AtomsText>
        </CircularProgressbarWithChildren>
      </div>
      <AtomsText
        fontSize="24px"
        fontWeight="bold"
        color={currentGoal < totalPrice ? "red" : "green"}
      >
        Preço recuperado: {currencyMask(currentGoal)}
      </AtomsText>
      <div className={style.footer}>
        <MoleculesFormInputFloatLabel
          label="valor ganho"
          value={value}
          onInput={setValue}
          mask="currency"
          errors={[]}
        />
        <div className={style.footer__div}>
          <button className={style.button} onClick={updateValue}>
            Salvar
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrganismsGoalMonth;
