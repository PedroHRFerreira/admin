import React, { useState } from "react";
import AtomsText from "@/components/atoms/Text/Index";
import MoleculesModal from "@/components/molecules/Modal";
import MoleculesFormInputFloatLabel from "@/components/molecules/FormInputFloatLabel";
import { usePostProduct } from "@/store/useFetchProducts";
import style from "./styles.module.scss";

const OrganismsProducts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [value, setValue] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    resetFields();
  };

  const resetFields = () => {
    setName("");
    setQuantity("");
    setValue("");
  };

  const handleSaveModal = async () => {
    if (!name.trim() || !quantity || !value) {
      alert("Preencha todos os campos!");
      return;
    }

    const product = {
      name,
      quantity: parseInt(quantity, 10),
      value: parseFloat(value.replace("R$", "").replace(",", ".")),
    };
    await usePostProduct(product);
  };

  return (
    <section className={style.products}>
      <AtomsText fontSize="24px" fontWeight="bold" color="#fff">
        Listagem de produtos
      </AtomsText>
      <button className={style.button} onClick={handleOpenModal}>
        Adicionar produto
      </button>

      <MoleculesModal
        isOpen={isModalOpen}
        title="Adicionar produto"
        onSave={handleSaveModal}
        onCancel={handleCloseModal}
      >
        <div>
          <MoleculesFormInputFloatLabel
            label="Nome do produto"
            value={name}
            onInput={setName}
            errors={[]}
            isRequired
          />
        </div>
        <div>
          <MoleculesFormInputFloatLabel
            label="Quantidade"
            value={quantity}
            onInput={setQuantity}
            mask="quantity"
            errors={[]}
            isRequired
          />
        </div>
        <div>
          <MoleculesFormInputFloatLabel
            label="Preço"
            value={value}
            onInput={setValue}
            mask="currency"
            errors={[]}
            isRequired
          />
        </div>
      </MoleculesModal>
    </section>
  );
};

export default OrganismsProducts;
