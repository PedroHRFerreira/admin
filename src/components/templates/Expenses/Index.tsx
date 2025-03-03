import React, { useState } from "react";
import style from "./styles.module.scss";
import MoleculesDashboard from "@/components/molecules/Dashboard/index";
import OrganismsGraphicLine from "@/components/organisms/GraphicLine/Index";
import OrganismsModalCurrent from "@/components/organisms/ModalCurrent/Index";

const TemplateExpenses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const teste = () => {
    console.log("teste");
  };
  const currentMonth = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
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
      subTitle: "Definir metas para o gastos",
      text: "Metas de gastos",
      onFooterClick: teste,
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
      <OrganismsGraphicLine />
    </article>
  );
};
export default TemplateExpenses;
