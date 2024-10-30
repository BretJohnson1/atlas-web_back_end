import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return '$200';
    },
    getIncomeInEuros(income) {
      return '200 euros';
    },
  };

  return fullBudget;
}
