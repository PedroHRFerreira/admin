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
  const initialGoal = totalPrice + totalPrice * 0.2;
  const currentGoal = Number(data?.goal_value) || 0;
  const progress =
    currentGoal >= initialGoal
      ? 100
      : ((initialGoal - currentGoal) / (initialGoal - totalPrice)) * 100;
  const progressCapped = Math.max(0, Math.min(progress, 100));

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
          value={progressCapped}
          styles={buildStyles({
            pathColor: "green",
            trailColor: "#d6d6d6",
            textColor: "green",
          })}
        >
          <AtomsText fontSize="24px" fontWeight="bold" color="green">
            {currencyMask(currentGoal)}
          </AtomsText>
        </CircularProgressbarWithChildren>
      </div>
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
