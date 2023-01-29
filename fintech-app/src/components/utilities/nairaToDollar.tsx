export const nairaToDollar = (naira: number) => {
  const exchangeRate = 300; // current exchange rate
  return naira / exchangeRate;
};
