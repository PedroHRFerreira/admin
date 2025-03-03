import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import MoleculesModal from "@/components/molecules/Modal";
import MoleculesFormInputFloatLabel from "@/components/molecules/FormInputFloatLabel";
import AtomsText from "@/components/atoms/Text/Index";
import { usePostProduct } from "@/store/useFetchProducts";
import style from "./styles.module.scss";

const OrganismsProducts = ({ onProductAdded }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setName("");
    setQuantity("");
    setValue("");
    setDescription("");
  };

  const handleSaveModal = async () => {
    if (!name.trim() || !quantity || !value) {
      toast.error("Preencha todos os campos!");
      return;
    }

    const product = {
      name,
      quantity: parseInt(quantity, 10),
      price: parseFloat(value.replace("R$", "").replace(",", ".")),
      description,
    };

    const response = await usePostProduct(product);

    if (response?.message) {
      toast.success("Produto adicionado com sucesso!");
      handleCloseModal();
      onProductAdded();
    } else {
      toast.error("Erro ao adicionar produto.");
    }
  };

  return (
    <section className={style.products}>
      <Toaster />
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
        <MoleculesFormInputFloatLabel
          label="Nome do produto"
          value={name}
          onInput={setName}
          errors={[]}
          isRequired
        />
        <MoleculesFormInputFloatLabel
          label="Quantidade"
          value={quantity}
          onInput={setQuantity}
          mask="quantity"
          errors={[]}
          isRequired
        />
        <MoleculesFormInputFloatLabel
          label="Preço"
          value={value}
          onInput={setValue}
          mask="currency"
          errors={[]}
          isRequired
        />
        <MoleculesFormInputFloatLabel
          label="Descrição"
          value={description}
          onInput={setDescription}
          errors={[]}
          isRequired
        />
      </MoleculesModal>
    </section>
  );
};

export default OrganismsProducts;
