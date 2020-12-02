function applyDiscount(prices, percentage) {
  var discounted = [];
  for (let i = 0; i < prices.length; i++) {
    let discountedPrice = prices[i] * (1 - percentage);
    let finalPrice = Math.round(discountedPrice * 100) / 100;
    discounted.push(finalPrice);
  }

  try {
      console.log(i); // Reference Error
      console.log(discountedPrice); // Reference Error
      console.log(finalPrice); // Reference Error
  } catch (e) {

  }


  return discounted;
}

applyDiscount([100, 150, 200], 0.2);

// Since variables declared with var are function scoped, they are still
// accessible outside the for loop
