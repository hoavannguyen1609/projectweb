function fmNumber(number: number): any {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "VND",
  }).format(number);
}

export default fmNumber;
