import dynamic from "next/dynamic";
import style from "./styles.module.scss";
import { useFetchExpenses } from "@/store/useFetchExpenses";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Gráfico de gastos em linhas" },
    tooltip: {
      callbacks: {
        label: (context) => {
          const label = context.dataset.label || "";
          const value = context.raw;
          return `${label}: R$ ${Number(value).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`;
        },
      },
    },
  },
  scales: {
    y: {
      min: 0,
      max: 1000,
      ticks: {
        callback: (value) => {
          return `R$ ${Number(value).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`;
        },
      },
    },
  },
};

const OrganismsGraphicLine = () => {
  const { data, loading, error } = useFetchExpenses();

  const chartData = {
    labels: data?.expenses?.month.map((item) => item.label) || [],
    datasets: [
      {
        label: "Gastos",
        data: data?.expenses?.month.map((item) => item.value) || [],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <section
      className={`${style.container} ${loading || error ? "loading" : ""}`}
    >
      {loading && <div className="anim-loading"></div>}
      {error && <p>Erro ao buscar dados: {error}</p>}
      {!loading && !error && (
        <div style={{ width: "100%", height: "490px" }}>
          <Line data={chartData} options={options} />
        </div>
      )}
    </section>
  );
};

export default OrganismsGraphicLine;
