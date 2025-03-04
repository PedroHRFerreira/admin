export interface Product {
  month: string;
  sales_quantity: number;
  value_of_expenses: number;
}

export async function usePostMonthlyValue(newValue: Product) {
  const response = await fetch("http://localhost:8000/api/monthly", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newValue),
  });

  return response.json();
}
