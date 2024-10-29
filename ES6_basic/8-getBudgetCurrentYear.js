function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    ['gdp-${getCurrentYear()}']: gdp,
    ['income-${getCurrentYear()}']: income,
    ['capita-${getCurrentYear()}']: capita,
  };

  return budget;
}
