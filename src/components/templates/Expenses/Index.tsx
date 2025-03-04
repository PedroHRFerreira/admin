import React, { useState } from "react";
import style from "./styles.module.scss";
import MoleculesDashboard from "@/components/molecules/Dashboard/index";
import OrganismsGraphicLine from "@/components/organisms/GraphicLine/Index";
import OrganismsModalCurrent from "@/components/organisms/ModalCurrent/Index";
import OrganismsModalGoals from "@/components/organisms/ModalGoals/Index";

const TemplateExpenses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [goal, setGoal] = useState(false);
  const teste = () => {
    console.log("teste");
  };
  const currentMonth = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const goalsMonth = () => setGoal(true);
  const closeGoals = () => setGoal(false);

  const cards = [
    {
      id: 1,
      title: "Gasto mensal",
      subTitle: "Gastos referente ao mês atual",
      text: "Ver gastos",
      onFooterClick: currentMonth,
    },
    {
      id: 2,
      title: "Metas de gastos",
      subTitle: "Definir valor unitário",
      text: "Calcular o valor unitário",
      onFooterClick: goalsMonth,
    },
  ];

  return (
    <article className={style.cards}>
      {cards.map((card) => (
        <div key={card.id}>
          <MoleculesDashboard
            title={card.title}
            subTitle={card.subTitle}
            text={card.text}
            onFooterClick={card.onFooterClick}
          />
        </div>
      ))}
      <OrganismsModalCurrent
        isModalOpen={isModalOpen}
        handleCloseModal={closeModal}
      />
      <OrganismsModalGoals isModalOpen={goal} handleCloseModal={closeGoals} />
      <OrganismsGraphicLine />
    </article>
  );
};
export default TemplateExpenses;
