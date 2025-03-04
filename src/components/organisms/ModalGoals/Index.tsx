import React, { useState } from "react";
import MoleculesModal from "@/components/molecules/Modal";
import MoleculesFormInputFloatLabel from "@/components/molecules/FormInputFloatLabel";
import { Toaster, toast } from "react-hot-toast";
import { usePostGoal } from "@/store/useFetchGoal";

const OrganismsModalGoals = ({ isModalOpen, handleCloseModal }: any) => {
  const [quantity, setQuantity] = useState("");
  const [result, setResult] = useState(null);

  const postGoal = async () => {
    if (!quantity) {
      toast.error("Preencha o campo!");
      return;
    }

    try {
      const response = await usePostGoal({ quantity: quantity });
      if (response?.data) {
        setResult(response.data);
        toast.success("Cálculo realizado com sucesso!");
        return;
      }
      toast.error("Erro ao calcular a meta.");
    } catch (error) {
      toast.error("Erro ao calcular a meta.");
    }
  };

  return (
    <MoleculesModal
      isOpen={isModalOpen}
      textSave="Calcular"
      title="Adicionar produto"
      onSave={postGoal}
      onCancel={handleCloseModal}
    >
      <Toaster />
      <MoleculesFormInputFloatLabel
        label="Quantidade"
        value={quantity}
        onInput={setQuantity}
        mask="quantity"
        errors={[]}
        isRequired
      />
      {result && (
        <div style={{ marginTop: "1rem" }}>
          <MoleculesFormInputFloatLabel
            label="Preço Total:"
            value={result.price_total}
            onInput={() => result.price_total}
            mask="currency"
            errors={[]}
          />
          <MoleculesFormInputFloatLabel
            label="Meta Total:"
            value={result.goal_total}
            onInput={() => result.goal_total}
            mask="currency"
            errors={[]}
          />
        </div>
      )}
    </MoleculesModal>
  );
};

export default OrganismsModalGoals;
