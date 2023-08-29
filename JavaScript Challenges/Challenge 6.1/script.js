//STEP 1 

function delay(milliseconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  }
  console.log(delay(1000));
  delay(2000)
  .then(() => {
    console.log('Done');
  });


  //STEP 2 