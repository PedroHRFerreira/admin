import { useFetch } from "@/hooks/useFetch";

export interface Product {
  name: string;
  quantity: number;
  price: number;
}

export interface ProductsResponse {
  product: {
    list: Product[];
  };
}

export function useFetchProducts() {
  const url = "http://localhost:8000/api/products";
  return useFetch<ProductsResponse>(url);
}

export async function usePostProduct(newProduct: Product) {
  const response = await fetch("http://localhost:8000/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });

  return response.json();
}

export async function useDeleteProduct(id: number) {
  const response = await fetch(`http://localhost:8000/api/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}
