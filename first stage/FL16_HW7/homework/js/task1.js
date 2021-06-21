let getValue = (amount, years, percent, profit = 0, prevProfit = 0, totalAmount = 0) => {
  amount = +prompt('initial amount of money', '');

  while (amount < 1000 || !Number.isFinite(amount)) {
    alert('Invalid input data');
    amount = +prompt('initial amount of money', '');
  }

  years = +prompt('number of years', '');
  while (!Number.isInteger(years) || years < 1 || !Number.isFinite(years)) {
    alert('Invalid input data');
    years = +prompt('number of years', '');
  }

  percent = +prompt(' percentage of a year', '');

  while (percent > 100 || !Number.isFinite(years)) {
    alert('Invalid input data');
    percent = +prompt(' percentage of a year', '');
  }

  profit = amount * percent / 100;
  totalAmount = amount + profit;

  for (let i = 0; i < years - 1; i++) {
    prevProfit = profit;

    profit = prevProfit + totalAmount * percent / 100;
    totalAmount = amount + profit;
  }

  return alert(`Initial amount: ${amount}
Number of years: ${years}
Percentage of year: ${percent}
  
Total profit: ${profit.toFixed(2)}
Total amount: ${totalAmount.toFixed(2)}`);
};
getValue();
