var age=19;
if(age>=20){
    console.log("You can enter this room.");
}else{
    console.log("You can't enter this room.");
}
const expression1 = 5 > 3;
const expression2 = 10 === '10';
const expression3 = true && false;
const expression4 = !expression3;
console.log(expression1);
console.log(expression2);
console.log(expression3);
console.log(expression4);
var age = 17;
const hasDriverLicense = true;
const hasCar = false;
const canDrive= false;
if (age >= 18 &&  hasDriverLicense){
console.log(!canDrive);
}
const canRentCar= false;
if(age >= 22 && hasDriverLicense && !hasCar){
console.log(!canRentCar);
}
const needDriver = false;
if(age < 18 || !hasDriverLicense || hasCar){
console.log(!needDriver);
}
var role="admin";
switch(role){
    case (role):console.log( "You have read and write access for the data");
    case(user):console.log("You have only read access for the data");
    case(guest):console.log("You have no access for the data");
    default:confirm.log("User role is not recoginized");
}