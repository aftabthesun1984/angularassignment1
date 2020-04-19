var getPrice = function (price, discount) {
    var totalValue = price - (price * (discount / 100));
    console.log("Total Price with Discount : " + totalValue);
};
getPrice(120, 50);
