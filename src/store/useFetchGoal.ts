export async function usePostGoal(quantity: string) {
  const response = await fetch("http://localhost:8000/api/goal", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(quantity),
  });

  return response.json();
}
