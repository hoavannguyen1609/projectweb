function fmNumber(number: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "VND",
  }).format(number);
}

export default fmNumber;
