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
  let newAray = [];
  for (let num of array) {
    // const err1 = NaN;
    // const err2 = undefined;
    if (typeof num === "number") {
      if (isNaN(num)) {
        continue;
      }
      newAray.push(num);
    }
  }
  return newAray;
}
const element = [undefined, 3, 3, 4, 5, 66, 7, -3];
const arry = deleteInvalids(element);
console.log(arry);
