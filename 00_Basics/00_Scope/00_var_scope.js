function applyDiscount(prices, percentage) {
    console.log(discounted);
    var discounted = [];
    for (var i = 0; i < prices.length; i++) {
        var discountedPrice = prices[i] * (1 - percentage);
        var finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }
    console.log(i); // 3
    console.log(discountedPrice); // 150
    console.log(finalPrice); // 150
    return discounted;
}


// Since variables declared with var are function scoped, they are still
// accessible outside the for loop


function applyDiscountIdentical(prices, percentage) {
    var discounted = undefined;
    var i = undefined;
    var discountedPrice = undefined;
    var finalPrice = undefined;

    discounted = [];
    for (i = 0; i < prices.length; i++) {
        discountedPrice = prices[i] * (1 - percentage);
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }
    console.log(i); // 3
    console.log(discountedPrice); // 150
    console.log(finalPrice); // 150
    return discounted;
}

applyDiscount([100, 150, 200], 0.2);
// applyDiscountIdentical([100, 150, 200], 0.2);

// applyDiscount and applyDiscountIdentical functions are actually identical.
// In JavaScript, variables are initialized with the value of undefined when
// they are created. That is called "Hoisting" which will be covered in more
// detail later. The JavaScript interpreter will assign variable declarations
// a default value of undefined during what’s called the "Creation" phase.
// Because of the hoisting, we can see that even before the declaration of
// discounted we can print its value as undefined.
