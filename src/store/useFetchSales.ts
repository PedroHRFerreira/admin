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
  const url = "https://admin-back20-production.up.railway.app/api/sales";
  return useFetch<SalesData>(url);
}
