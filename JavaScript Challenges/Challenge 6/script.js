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



//step 2
function simulateNetworkRequest() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() < 0.8; 
        if (isSuccess) {
          resolve("Network request successful!");
        } else {
          reject(new Error("Network request failed!"));
        }
      }, 2000); 
    });
  }
    simulateNetworkRequest()
    .then((response) => {
      console.log(response); 
    })
    .catch((error) => {
      console.log(error); 
    });
  




    function simulateNetworkRequest() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const randomValue = Math.random();
            if (randomValue < 0.5) {
              resolve("Data fetched successfully!");
            } else {
              reject("Network Error!");
            }
          }, 3000);
        });
      }
      
      async function fetchData() {
        try {
          const response = await simulateNetworkRequest();
          console.log("Success:", response);
        } catch (error) {
          console.log("Error:", error);
        }
      }
      
      fetchData();






      async function fetchPost() {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
          if (!response.ok) {
            throw new Error('Network response was not ok.');
          }
          const data = await response.json();
          console.log('Post:', data);
        } catch (error) {
          console.log('Error:', error.message);
        }
      }
      
      fetchPost();



      //step 3 
      async function fetchMultipleResources() {
        try {
          const urls = [
            'https://jsonplaceholder.typicode.com/posts/1',
            'https://jsonplaceholder.typicode.com/posts/2',
            'https://jsonplaceholder.typicode.com/posts/3'
          ];
      
          const requests = urls.map(url => fetch(url));
      
          const responses = await Promise.all(requests);
      
          const data = await Promise.all(responses.map(response => response.json()));
      
          console.log('Data:', data);
        } catch (error) {
          console.log('Error:', error);
        }
      }
      
      fetchMultipleResources();




      async function fetchMultiplePosts() {
        try {
          const postIds = [1, 2, 3];
          const requests = postIds.map(id =>
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          );
      
          const responses = await Promise.all(requests);
      
          const data = await Promise.all(
            responses.map(response => response.json())
          );
      
          console.log('Combined Data:', data);
        } catch (error) {
          console.log('Error:', error);
        }
      }
      
      fetchMultiplePosts();

      


      async function processPromisesSequentially(promises) {
        for (const promise of promises) {
          try {
            const result = await promise;
            console.log('Promise resolved:', result);
          } catch (error) {
            console.log('Promise rejected:', error);
          }
        }
      }
      
      const promises = [
        Promise.resolve('First Promise'),
        Promise.reject(new Error('Second Promise Error')),
        Promise.resolve('Third Promise')
      ];
      
      processPromisesSequentially(promises);

      


      async function fetchPostsSequentially() {
        try {
          const postIds = [4, 5, 6, 7, 8];
          for (const postId of postIds) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            if (!response.ok) {
              throw new Error(`Failed to fetch post ${postId}`);
            }
            const post = await response.json();
            console.log('Post:', post);
          }
        } catch (error) {
          console.log('Error:', error);
        }
      }
      
      fetchPostsSequentially();





      async function fetchPostsSequentially() {
        const postIds = [4, 5, 6, 7, 8];
        for (const postId of postIds) {
          try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            if (!response.ok) {
              throw new Error(`Failed to fetch post ${postId}`);
            }
            const post = await response.json();
            console.log('Post:', post);
          } catch (error) {
            console.log('Error:', error);
          }
        }
      }
      
      fetchPostsSequentially();
      