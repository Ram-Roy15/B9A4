function calculateMoney(todaySell) {
  if (todaySell < 0) {
    return "Invalid Number";
  }
  const tikitPrice = 120;
  const todaySellPrice = tikitPrice * todaySell;
  const extraExpences = 8 * 50 + 500;
  const todayAmount = todaySellPrice - extraExpences;
  return todayAmount;
}

function checkName(inputeName) {
  if (typeof inputeName === "string") {
    const reverseNum = inputeName.split("").reverse();
    if (reverseNum[0] === "a") {
      return "Good Name";
    } else if (reverseNum[0] === "e") {
      return "Good Name";
    } else if (reverseNum[0] === "i") {
      return "Good Name";
    } else if (reverseNum[0] === "o") {
      return "Good Name";
    } else if (reverseNum[0] === "u") {
      return "Good Name";
    } else if (reverseNum[0] === "y") {
      return "Good Name";
    } else if (reverseNum[0] === "w") {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  } else {
    return "Invalid";
  }
}

function deleteInvalids(array) {
  if (Array.isArray(array)) {
    let newAray = [];
    for (let num of array) {
      if (typeof num === "number") {
        if (isNaN(num)) {
          continue;
        }
        newAray.push(num);
      }
    }
    return newAray;
  } else {
    return "Invalid Array";
  }
}

function password(pas) {
  if (!pas.name || !pas.birthYear || !pas.siteName) {
    return "Invalid";
  }

  const birthDateString = pas.birthYear.toString();
  if (birthDateString.length < 4) {
    return "Invalid";
  }
  const site = typeof pas.siteName;
  const name = typeof pas.name;
  const birth = typeof pas.birthYear;
  if (site === "string" && birth === "number" && name === "string") {
    let password = pas.siteName + "#" + pas.name + "@" + pas.birthYear;
    return password;
  }
}

function monthlySavings(payments, livingCost) {
  if (Array.isArray(payments) && typeof livingCost === "number") {
    let totalIncome = 0;
    for (let payment of payments) {
      let newPayment = payment > 3000 ? payment - payment * 0.2 : payment;
      totalIncome = totalIncome + newPayment;
    }
    let saving = totalIncome - livingCost;
    if (saving <= 0) {
      return "earn more";
    } else {
      return saving;
    }
  } else {
    return "invalid input";
  }
}

// helping hand

// https://chat.openai.com/share/5fd5e20d-484d-4c55-9eb2-edb177a64e4b
