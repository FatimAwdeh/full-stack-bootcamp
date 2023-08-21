function addNumbers(num1, num2) {
    let sum=num1 + num2 ;
    return sum;
  }
  console.log(addNumbers(12,3));



  function findMax(num1 , num2){
    let result = num1 - num2;
    if(result > 0) console.log(num1 + " " + "is the largest");
    else if (result < 0) console.log(num2 + " " + "is the largest");
    else console.log (num1 + "," + num2 + "Both are equal");
    return result;
  }
  console.log(findMax(3,8));






function compute(num1, num2, operation){
    switch(operation){
        case "add":
             return num1 + num2;break;
            

        case "substract":
            return num1 - num2;break;
           

        case "divide":
            return num1 / num2;break;


        case "multiply":
            return num1 * num2;break;
        
        default:console.log("Invalid operation!");break;
    }
}
var result = compute(5, 3, "add");
console.log("Addition:", result);





var globalVar;
globalVar=3;
function squareNumber(number){
    const square = number * number;
    let localVar;
    localVar=7;
    console.log(globalVar);//il prend globalVar inside the function
    return square;
}
//console.log(localVar);//but il ne prend pas localVar outside the function
console.log(squareNumber(3));




let n=1;
while(n < 11){
    console.log(n);
    n++;
}

let nb=1;
do{
    if(nb % 2 == 0)
    console.log(nb);
    nb++;
}while( nb < 11  );





/*let fruits = ['Apple', 'Banana', 'Grape', 'Watermelon', 'Pineapple', 'Pear', 'Cherry'];
for(let i=0; i<fruits.length; i++){
    for (let j=0; j=fruits[i].length; j++){
        if(j < 4)
        fruits.splice(fruits[i],1);
    }
}
console.log(fruits);*/


let favoriteFruits = ['Apple', 'Banana', 'Grape', 'Watermelon', 'Pineapple', 'Pear', 'Cherry'];
for (var i = 0; i < favoriteFruits.length; i++) {
    var fruit = favoriteFruits[i];
    if (fruit.length > 5) {
      console.log(fruit);
    }
  }