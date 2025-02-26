import { useFetch } from "@/hooks/useFetch";

export interface Product {
  name: string;
  quantity: number;
  value: number;
}

export interface ProductsResponse {
  product: {
    list: Product[];
  };
}

export function useFetchProducts() {
  const url = "http://localhost:8000/sales";
  return useFetch<ProductsResponse>(url);
}

export async function usePostProduct(newProduct: Product) {
  const response = await fetch("http://localhost:8000/sales", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });

  return response.json();
}
