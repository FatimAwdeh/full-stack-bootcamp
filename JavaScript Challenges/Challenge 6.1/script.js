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


    //STEP 3 

    async function fetch1() {
        try {
          const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
          const data = await response.json();
          console.log(data/*.text*/);
        } catch (error) {
          console.error('Error:', error);
        }
      }
      
      fetch1();
      
//STEP 4 

async function fetch2() {
    try {
        let [data0, data1, data2] = await Promise.all([
            fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()),
            fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()),
            fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json())
        ]);

        console.log(data0, data1, data2);
    } catch (error) {
        console.log("Error:", error);
    }
}

fetch2();