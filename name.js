function checkName(givenName) {
  // validation
  if (typeof givenName !== "string") {
    return "Invalid input. Input must be a string";
  }
  //find the character in specific case
  const name = givenName.toLowerCase();
  const lastLetterOfName = name[name.length - 1];

  // condition for the result
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

let name = checkName("ayieouw");
console.log(name);
