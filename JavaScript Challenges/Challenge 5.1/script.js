//step 1
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



  //step 2
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




//step 3
const form = document.createElement('form');

const fullNameLabel = document.createElement('label');
fullNameLabel.textContent = 'Full Name:';
form.appendChild(fullNameLabel);

const fullNameInput = document.createElement('input');
fullNameInput.type = 'text';
fullNameInput.name = 'fullname';
form.appendChild(fullNameInput);
form.appendChild(document.createElement('br')); 
form.appendChild(document.createElement('br')); 

const emailLabel = document.createElement('label');
emailLabel.textContent = 'Email Address:';
form.appendChild(emailLabel);

const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.name = 'email';
form.appendChild(emailInput);
form.appendChild(document.createElement('br')); 
form.appendChild(document.createElement('br')); 

const errorElement = document.createElement('p');
errorElement.style.color = 'red';
form.appendChild(errorElement);


const passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Password:';
form.appendChild(passwordLabel);

const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.name = 'password';
form.appendChild(passwordInput);
form.appendChild(document.createElement('br')); 
form.appendChild(document.createElement('br')); 

const confirmPasswordLabel = document.createElement('label');
confirmPasswordLabel.textContent = 'Confirm Password:';
form.appendChild(confirmPasswordLabel);

const confirmPasswordInput = document.createElement('input');
confirmPasswordInput.type = 'password';
confirmPasswordInput.name = 'confirmPassword';
form.appendChild(confirmPasswordInput);
form.appendChild(document.createElement('br')); 
form.appendChild(document.createElement('br')); 

const successElement = document.createElement('p');
successElement.style.color = 'green';
form.appendChild(successElement);

const submitButton = document.createElement('input');
submitButton.type = 'submit';
submitButton.value = 'Submit';
form.appendChild(submitButton);

form.addEventListener('submit', function(event) {
    event.preventDefault();
})

//valid email
const email = emailInput.value.trim();
  if (!isValidEmail(email)) {
    errorElement.textContent = 'Please enter a valid email address.';
    //return ;
  }
    errorElement.textContent = 'Form submitted successfully!';
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

//confirm password

const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();
  if (password !== confirmPassword) {
    errorElement.textContent = 'Passwords do not match.';
   // return;
  } errorElement.textContent = 'Form submitted successfully!';

  errorElement.textContent = '';
  successElement.textContent = 'Form submitted successfully!';


document.body.appendChild(form);
