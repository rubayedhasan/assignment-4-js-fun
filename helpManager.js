function calculateMoney(soldTicketNumber) {
  // validation
  if (typeof soldTicketNumber !== "number" || soldTicketNumber < 0) {
    return "number of sold ticket must be a positive integer number";
  }

  //   info
  const perTicketPrice = 120;
  const costOfDoorman = 500;
  const numberOfStaff = 8;
  const perStaffCost = 50;

  //   define cost
  const totalStaffCost = numberOfStaff * perStaffCost;
  const totalCost = costOfDoorman + totalStaffCost;

  //   define income
  const totalIncome = perTicketPrice * soldTicketNumber;

  //   define net income
  const netIncome = totalIncome - totalCost;
  return netIncome;
}

// let savingMoney = calculateMoney(19);
// console.log(savingMoney);
