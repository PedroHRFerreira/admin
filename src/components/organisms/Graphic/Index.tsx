import dynamic from "next/dynamic";
import style from "./styles.module.scss";
import AtomsText from "@/components/atoms/Text/Index";
import { useFetchSales } from "@/store/useFetchSales";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});

const options: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Exemplo de Gráfico de Barras" },
  },
};

const OrganismsGraphic = () => {
  const { data, loading, error } = useFetchSales();

  const chartData = {
    labels: data?.sale?.month.map((item) => item.label) || [],
    datasets: [
      {
        label: "Vendas",
        data: data?.sale?.month.map((item) => item.value) || [],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <section
      className={`${style.organismsGraphic} ${
        loading || error ? "loading" : ""
      }`}
    >
      {loading && <div className="anim-loading"></div>}
      {error && <p>Erro ao buscar dados: {error}</p>}
      {!loading && !error && (
        <>
          <AtomsText fontSize="24px" fontWeight="bold" color="#fff">
            Home
          </AtomsText>
          <Bar data={chartData} options={options} />
        </>
      )}
    </section>
  );
};

export default OrganismsGraphic;
