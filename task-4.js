"use strict";

const ver1 = "Curabitur ligula sapien, tincidunt non.";
const ver2 = "Vestibulum facilisis, purus nec pulvinar iaculis."

const formatString = function (string) {
  if(string.length <= 40) {
  console.log(string);
} else {
  console.log(string.slice(0, 40) + '...');
};




// console.log(formatString("Curabitur ligula sapien, tincidunt non."));


console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));


// console.log(formatString("Curabitur ligula sapien."));


// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );