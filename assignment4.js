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
// const ar = [12, 4, 1, 425, 325, 65, 7637, "ram"];
// const cal = deleteInvalids(ar);
// console.log(cal);

function password(pas) {
  const site = typeof pas.siteName;
  const name = typeof pas.name;
  const birth = typeof pas.birthYear;
  if (site === "string" && birth === "number" && name === "string") {
    let password = pas.siteName + "#" + pas.name + "@" + pas.birthYear;
    return password;
  }
}
// const obj = { name: "kolimuddin", birthYear: 199, siteName: "google" };
// const pas = password(obj);
// console.log(pas);
