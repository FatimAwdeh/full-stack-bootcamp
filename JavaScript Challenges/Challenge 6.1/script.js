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

  fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then(response => response.json())
    .then(data => {
        console.log(data/*.text*/);
    })
    .catch(error => {
        console.error(`Error:`, error);
    });
