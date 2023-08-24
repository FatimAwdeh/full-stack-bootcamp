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