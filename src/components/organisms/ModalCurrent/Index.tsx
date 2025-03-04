import { useFetchExpensesByMonth } from "@/store/useFetchExpenses";
import MoleculesModal from "@/components/molecules/Modal";
import AtomsText from "@/components/atoms/Text/Index";

const OrganismsModalCurrent = ({ isModalOpen, handleCloseModal }: any) => {
  const { data, error, loading, refetch } = useFetchExpensesByMonth();

  const loadProducts = async () => {
    await refetch();
  };

  const monthData: any = data?.expenses?.month;

  return (
    <MoleculesModal
      isOpen={isModalOpen}
      loading={loading}
      error={error}
      textSave="Atualizar"
      title="Adicionar produto"
      onSave={loadProducts}
      onCancel={handleCloseModal}
    >
      <AtomsText fontSize="24px" fontWeight="bold" color="#fff">
        Valor de gastos do mês:
      </AtomsText>
      <AtomsText
        fontSize="24px"
        fontWeight="bold"
        color={monthData?.more_current_month ? "red" : "green"}
      >
        {monthData?.value}
      </AtomsText>
    </MoleculesModal>
  );
};

export default OrganismsModalCurrent;
