export function quantityMask(value: string): string {
  let onlyNumbers = value.replace(/\D/g, "");

  onlyNumbers = onlyNumbers.slice(0, 3);

  return onlyNumbers;
}

export function currencyMask(value: string): string {
  let onlyNumbers = value.replace(/\D/g, "");
  let numericValue = parseInt(onlyNumbers, 10) || 0;
  const floatValue = numericValue / 100;
  return floatValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
