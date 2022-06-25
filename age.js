function ageCalculator(dateString) {
  let currentDate = Date.now();
  let birthday = Date.parse(dateString.replace(/-0+/g, "-"));
  //need to remove leading zeros to avoid octal literals error
  let age = Math.floor((currentDate - birthday) / 31556952000);
  return age;
}

console.log(ageCalculator("1972-12-04"));
// dateString format: 'YYYY-MM-DD'
