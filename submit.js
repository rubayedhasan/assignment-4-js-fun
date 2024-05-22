function calculateMoney(soldTicketNumber) {
  if (typeof soldTicketNumber !== "number" || soldTicketNumber < 0) {
    return "number of sold ticket must be a positive integer number";
  }
  const perTicketPrice = 120;
  const costOfDoorman = 500;
  const numberOfStaff = 8;
  const perStaffCost = 50;

  const totalStaffCost = numberOfStaff * perStaffCost;
  const totalCost = costOfDoorman + totalStaffCost;

  const totalIncome = perTicketPrice * soldTicketNumber;

  const netIncome = totalIncome - totalCost;
  return netIncome;
}

function checkName(givenName) {
  if (typeof givenName !== "string") {
    return "Invalid input. Input must be a string";
  }

  const name = givenName.toLowerCase();
  const lastLetterOfName = name[name.length - 1];

  switch (lastLetterOfName) {
    case "a":
    case "y":
    case "i":
    case "e":
    case "o":
    case "u":
    case "w":
      return "Good Name";
    default:
      return "Bad Name";
  }
}

function deleteInvalids(givenArray) {
  if (!Array.isArray(givenArray)) {
    return "Give a popper array as input.";
  }

  const arrayOfNumbers = [];

  for (const value of givenArray) {
    if (typeof value === "number") {
      arrayOfNumbers.push(value);
    }
  }

  return arrayOfNumbers;
}

function password(details) {
  if (
    typeof details !== "object" ||
    details === null ||
    Array.isArray(details)
  ) {
    return "give a popper object";
  } else if (!Object.hasOwn(details, "name", "birthYear", "siteName")) {
    return "object must be contain 'name', 'birthYear' & 'siteName' as properties ";
  } else if (
    typeof details.birthYear !== "number" ||
    details.birthYear < 1000 ||
    details.birthYear > 9999 ||
    !Number.isInteger(details.birthYear)
  ) {
    return "give 4 digit number as birth Year";
  } else {
    let capitalFirstLetter = details.siteName.charAt(0).toUpperCase();
    let customizeSiteName = capitalFirstLetter + details.siteName.slice(1);
    const yourPassword = `${customizeSiteName}#${details.name}@${details.birthYear}`;
    return yourPassword;
  }
}

function monthlySavings(payments, livingCost) {
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
