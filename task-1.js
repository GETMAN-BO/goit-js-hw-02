const names = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];

const logItems = function (items) {
  for (let i = 0; i < items.length; i += 1) {
    console.log(`${i + 1}`, items[i]);
  }
};

logItems(names);
