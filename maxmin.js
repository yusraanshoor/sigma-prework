function maxMin(array) {
  let maxMinArray = [];
  let max = array[0];
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  maxMinArray.push(min, max);
  return maxMinArray;
}
//console.log(maxMin([2, 4, 1, 0, 2, -1]));
