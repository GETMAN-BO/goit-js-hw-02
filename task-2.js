let text = "Proin sociis natoque et magnis parturient montes mus";

const calculateEngravingPrice = function (message, pricePerWord) {
  let words = message.split(" ");
  let numberz = words.length;
  let price = Number(pricePerWord);
  let result = numberz * price;
  return result;
};

console.log(calculateEngravingPrice(text, 10));
