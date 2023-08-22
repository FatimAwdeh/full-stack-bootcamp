let fiveNumbers=[1,2,54,766,321];
console.log(fiveNumbers);


const personalInfo = {
    name: "Fatima Awdeh",
    age: 19,
    height: 155,
    location: "Baalback",
    nationality: "Libanaise"
  };
console.log(personalInfo);


  
let nextThreeNumbers=new Array();
nextThreeNumbers=[65,92,923];
const allNumbers=[nextThreeNumbers,fiveNumbers];
console.log(allNumbers);




const additionalInfo = {
  occupation: "nothing",
  hobby: "musique",
  education: "university",
};
console.log(additionalInfo);


//const fullInfo=[personalInfo,additionalInfo];
//console.log(fullInfo);

const fullInfo = {
  personalInfo,
  additionalInfo
};

console.log(fullInfo);


const [firstNum, secondNum, thirdNum]=fiveNumbers;
console.log(firstNum);
console.log(secondNum);
console.log(thirdNum);


const { name:personName, location:personLocation, nationality:personNationality } = personalInfo;
console.log(personName);
console.log(personLocation);
console.log(personNationality);