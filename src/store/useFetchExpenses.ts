import { useFetch } from "@/hooks/useFetch";

export interface ExpensesMonth {
  label: string;
  value: number;
  product: string;
}

export interface ExpensesData {
  expenses: {
    month: ExpensesMonth[];
  };
}

export function useFetchExpenses() {
  const url = "http://localhost:8000/api/expenses";
  return useFetch<ExpensesData>(url);
}

export function useFetchExpensesByMonth() {
  const months = [
    "JANEIRO",
    "FEVEREIRO",
    "MARÇO",
    "ABRIL",
    "MAIO",
    "JUNHO",
    "JULHO",
    "AGOSTO",
    "SETEMBRO",
    "OUTUBRO",
    "NOVEMBRO",
    "DEZEMBRO",
  ];

  const currentMonth = months[new Date().getMonth()];
  const url = `http://localhost:8000/api/expenses?with=${currentMonth}`;

  return useFetch<ExpensesData>(url);
}
