import { useFetch } from "@/hooks/useFetch";

export interface SaleMonth {
  total_price: number;
  goal_value: number;
}

export function usefetchGoalMonth() {
  const url = "http://localhost:8000/api/goal-month";
  return useFetch<SaleMonth>(url);
}

export async function useUpdateGoal(value: string) {
  const response = await fetch("http://localhost:8000/api/goal-month", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  });

  return response.json();
}
