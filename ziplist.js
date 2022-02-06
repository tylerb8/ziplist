const array1 = ['a', 'b', 'c'];
const array2 = [1, 2, 3];

// //////////////////////////////////////////////////////
// accepts two lists of equal length and returns the result of alternatingly taking elements.
function zipList(arr1, arr2) {
  const finalArr = [];

  for (let i = 0; i < arr1.length; i++) {
    finalArr.push(arr1[i], arr2[i]);
  }
  return finalArr;
}
console.log(zipList(array1, array2));

// //////////////////////////////////////////////////////
// Alternating list using JS underscore
function zipListTheSimpleWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}
console.log(zipListTheSimpleWay(array1, array2));
