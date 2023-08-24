const button = document.createElement('button');
button.textContent = 'Click Me';
document.body.appendChild(button);
button.style.fontSize="16pxx";
button.style.backgroundColor="#3498db";
button.style.color="#ffffff";
button.style.border="none";
button.style.cursor="pointer";

button.addEventListener('click', function() {
    button.style.backgroundColor = 'red';
    button.style.color ="white";
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    button.textContent = 'Clicked ' + randomNumber + '!';
  });

  const h1=document.createElement('h1');
  h1.textContent='h1 content';
  document.body.appendChild(h1);
  h1.style.border = '10px dotted green';

  document.addEventListener('keydown', function(event) {
    if (event.key === 'a' || event.key === 'A') {
      h1.style.backgroundColor = 'red';
    }
    else if (event.key === 's' || event.key === 'S') {
    h1.style.marginLeft = '10px';
  }
   else if (event.key === 'd' || event.key === 'D') {
    const p = document.createElement('p');
        p.textContent = 'Key D was pressed!';
        h1.appendChild(p);
    }
    else if (event.key === 'w' || event.key === 'W') {
       h1.style.display='none';
        }
    else if (event.key == ' ') {
        h1.style.fontSize='50px';
    }
});

