function deleteInvalids(givenArray) {
  // validation
  if (!Array.isArray(givenArray)) {
    return "Give a popper array as input.";
  }
  //   container array
  const arrayOfNumbers = [];

  //   filtering loop for number type data
  for (const value of givenArray) {
    if (typeof value === "number") {
      arrayOfNumbers.push(value);
    }
  }

  return arrayOfNumbers;
}

const mixedArray = [9, "hello", false, 18, null, -6, undefined, {}, 98];
// let newArray = deleteInvalids([7, "hh", 0, null]);
let newArray = deleteInvalids(mixedArray);
console.log(newArray);
