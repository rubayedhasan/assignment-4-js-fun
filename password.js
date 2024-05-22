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
let obj = password({
  name: "kalimuddin",
  birthYear: 2042,
  siteName: "facebook",
});
console.log(obj);

// required properties validation
//   const keyNames = ["name", "birthYear", "siteName"];
//   for (const value of keyNames) {
//     if (!(value in details)) {
//       return "invalid";
//     }
//     console.log(value);
//   }
// required properties validation
// for (const key in details) {
//   if (key !== "name" || key !== "birthYear" || key !== "siteName") {
//     return "invalid properties";
//   }
//   console.log(key);
// }
// required properties validation
