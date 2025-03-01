import { useFetch } from "@/hooks/useFetch";

export interface SaleMonth {
  label: string;
  value: number;
  product: string;
}

export interface SalesData {
  sale: {
    month: SaleMonth[];
  };
}

export function useFetchSales() {
  const url = "http://localhost:8000/api/sales";
  return useFetch<SalesData>(url);
}
