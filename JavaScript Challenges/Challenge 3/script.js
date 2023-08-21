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






