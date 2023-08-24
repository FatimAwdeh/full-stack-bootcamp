//step 1
setTimeout(function() {
    console.log("Hello after 5 seconds!");
  }, 5000);


  /*function updateClock() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
  
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    console.log(formattedTime);
  }
  
  setInterval(updateClock, 1000);*/



  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        resolve(randomNumber);
      } else {
        reject(new Error('Random number is too small!'));
      }
    }, 2000);
  });
    myPromise
    .then((value) => {
      console.log('Promise fulfilled with value:', value);
    })
    .catch((error) => {
      console.log('Promise rejected with error:', error);
    });
  

  


  const initialPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved!");
    }, 2000);
  });
    initialPromise
    .then((message) => {
      alert(message); 
      return "Chained message!";
    })
    .then((chainedMessage) => {
      console.log(chainedMessage); 
    })
    .catch((error) => {
      console.log("Error:", error);
    });