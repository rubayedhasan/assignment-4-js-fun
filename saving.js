function monthlySavings(payments, livingCost) {
  // validation
  if (!Array.isArray(payments)) {
    return "payments should be a numbers of array. Give a popper Array as input";
  } else if (typeof livingCost !== "number") {
    return "The amount of your living cost should be a number.";
  } else {
    let totalIncome = 0;
    let totalTax = 0;
    for (const payment of payments) {
      if (typeof payment !== "number") {
        return "amount of money must be a number";
      }
      if (payment >= 3000) {
        let tax = (payment * 20) / 100;
        totalTax += tax;
      }
      totalIncome += payment;
    }
    const totalCuttingMoney = totalTax + livingCost;
    let remainingMoney = totalIncome - totalCuttingMoney;
    if (remainingMoney > 0) {
      return remainingMoney;
    } else {
      return "Earn More";
    }
  }
}

// const money = [15000, 4000, 3000, 4000, 500, 1000];
// let cost = 1200;
// let saving = monthlySavings(money, cost);
// console.log(saving);
