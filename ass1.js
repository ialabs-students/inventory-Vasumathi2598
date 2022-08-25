var Apple = /** @class */ (function () {
    function Apple(modelNumber, modelName, quantity, price) {
        this.brand = 'Apple';
        this.modelNumber = modelNumber;
        this.modelName = modelName;
        this.quantity = quantity;
        this.price = price;
    }
    Apple.prototype.getEngineInfo = function () {
        return "Apple quantity: " + this.quantity;
    };
    return Apple;
}());
var smartwatch = /** @class */ (function () {
    function smartwatch(modelNumber, modelName, quantity, price) {
        this.brand = 'smartwatch';
        this.modelNumber = modelNumber;
        this.modelName = modelName;
        this.quantity = quantity;
        this.price = price;
    }
    smartwatch.prototype.getEngineInfo = function () {
        return "smartwatch quantity" + this.quantity;
    };
    return smartwatch;
}());
// ADDING THE PRODUCT
var Apple1 = new Apple('1', 'apple 13 pro max', '20', 150000);
Apple1.expiry = "20days";
var Apple2 = new Apple('2', 'airpods pro', '21', 27000);
var smartwatch1 = new smartwatch('1', 'series 7', '23', 45000);
var smartwatch2 = new smartwatch('2', 'series 9', '13', 56000);
var smartwatch3 = new smartwatch('3', 'series 5', '10', 45000);
// console.log(Apple1.getEngineInfo());
// console.log(Apple1);
// console.log(Apple2);
// // console.log(smartwatch1.getEngineInfo());
// console.log(smartwatch1);
// console.log(smartwatch2);
// console.log(smartwatch3);
// DEDUCT THE PRODUCTwwwwwwww09
delete smartwatch3['modelNumber'];
console.log("-----------------------");
function count(Apple1, Apple2) {
    var arr = [], obj = Object.keys(Apple1);
    for (var quantity in obj) {
        if (Apple1[obj[quantity]] > 5) {
            arr.push(obj[quantity]);
        }
    }
    return arr;
}
var Apple4 = [{ brand: "Apple", modelNumber: "2", modelName: "iphone SE", quantity: "23", price: 78000 },
    { brand: "Apple", modelNumber: "6", modelName: "iphone 12", quantity: "2", price: 34000 }];
var res = Apple4.filter(function (obj) {
    return obj.quantity > '5';
});
console.log(res);
console.log("Store database");
console.log(Apple1, Apple2, smartwatch1, smartwatch2);
console.log("-----------------------");
console.log("1. Additional");
console.log(Apple4);
console.log("-----------------------");
console.log("2. Delete");
console.log(smartwatch3);
console.log("-----------------------");
console.log("4. Threshold");
console.log(count(Apple1, Apple2));
console.log(res);
console.log("------------------");
console.log(Apple1);
