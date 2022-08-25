interface Mobile {
    modelNumber: string;
    modelName: string;
    quantity: string;
    price: number;
    getEngineInfo(): string;
}

class Apple implements Mobile {
    modelNumber: string;a
    modelName: string;
    quantity: string;
    price: number;
    constructor(modelNumber: string, modelName: string, quantity: string, price: number) {
        this.modelNumber = modelNumber; 
        this.modelName = modelName;
        this.quantity = quantity;
        this.price = price;
    }
    brand: string = 'Apple';
    getEngineInfo(): string {
        return "Apple quantity: " + this.quantity;
    }
}
class smartwatch implements Mobile{
    modelNumber: string;
    modelName: string;
    quantity: string;
    price: number;
    constructor(modelNumber: string, modelName: string, quantity: string, price: number) {
        this.modelNumber = modelNumber; 
        this.modelName = modelName;
        this.quantity = quantity;
        this.price = price;
    }
    
    brand: string = 'smartwatch';
    getEngineInfo(): string {
        return "smartwatch quantity" + this.quantity;
    }
}

// ADDING THE PRODUCT

var Apple1 = new Apple('1', 'apple 13 pro max','20',150000);
 Apple1.expiry ="20days"

var Apple2 = new Apple('2', 'airpods pro','21',27000);
var smartwatch1 = new smartwatch('1','series 7','23',45000);
var smartwatch2 = new smartwatch('2','series 9','13', 56000);
var smartwatch3 = new smartwatch('3','series 5', '10', 45000);

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


           
function count(Apple1, Apple2){
 const arr = [],
 obj = Object.keys(Apple1);
 for (var quantity in obj){
   if(Apple1[obj[quantity]] > 5){
     arr.push(obj[quantity]);
   }
 }
 return arr;
}

var Apple4 = [{brand:"Apple", modelNumber:"2",modelName:"iphone SE",quantity:"23", price:78000},
{brand:"Apple", modelNumber:"6",modelName:"iphone 12",quantity:"2", price:34000}];

const res = Apple4.filter((obj) => {
 return obj.quantity > '5';

});

console.log(res);
console.log("Store database");

console.log(Apple1,Apple2,smartwatch1,smartwatch2);
console.log("-----------------------");
console.log("1. Additional");

console.log(Apple4);

console.log("-----------------------");
console.log("2. Delete");

console.log(smartwatch3);
console.log("-----------------------");
console.log("3. Mark the Defected Item");
console.log("-----------------------");
console.log("4. Threshold");

console.log(count(Apple1 ,Apple2))

console.log(res); 

console.log("------------------");

console.log(Apple1);

