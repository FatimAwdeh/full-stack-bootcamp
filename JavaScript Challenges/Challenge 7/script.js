//STEP 1 
const container = document.createElement('div');
container.className = 'container';
const loginContainer = document.createElement('div');
loginContainer.className = 'login__container';
const loginSignin = document.createElement('div');
loginSignin.className = 'login__signin';
const loginSigninNow = document.createElement('div');
loginSigninNow.className = 'login__signin-now';
const h1 = document.createElement('h1');
h1.textContent = 'Sign up NOW!';
const h3 = document.createElement('h3');
h3.textContent = 'Enter your details';
const form = document.createElement('form');
const emailLabel = document.createElement('label');
emailLabel.textContent = 'Email';
const emailInput = document.createElement('input');
emailInput.className = 'input-field';
emailInput.type = 'email';
emailInput.placeholder = 'Email';
emailInput.required = true;
emailLabel.appendChild(emailInput);
const passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Password';
const passwordInput = document.createElement('input');
passwordInput.className = 'input-field';
passwordInput.type = 'password';
passwordInput.placeholder = 'Password';
passwordInput.required = true;
passwordLabel.appendChild(passwordInput);
const cPasswordLabel = document.createElement('label');
cPasswordLabel.textContent = 'Confirm Password';
const cPasswordInput = document.createElement('input');
cPasswordInput.className = 'input-field';
cPasswordInput.type = 'password';
cPasswordInput.placeholder = 'Confirm Password';
cPasswordInput.required = true;
cPasswordLabel.appendChild(cPasswordInput);
const submitButton = document.createElement('button');
submitButton.className = 'filled-btn';
submitButton.id = 'submit-btn';
submitButton.textContent = 'Submit';
form.appendChild(emailLabel);
form.appendChild(passwordLabel);
form.appendChild(cPasswordLabel);
form.appendChild(submitButton);

loginSigninNow.appendChild(h1);
loginSigninNow.appendChild(h3);
loginSigninNow.appendChild(form);

loginSignin.appendChild(loginSigninNow);

loginContainer.appendChild(loginSignin);

container.appendChild(loginContainer);
const scriptTag = document.querySelector('script');
scriptTag.parentNode.insertBefore(container, scriptTag);



//STEP 1.1 
//const submitButton = document.getElementById('submit-btn');
submitButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    const password = passwordInput.value;
    const cPassword = cPasswordInput.value;
      if (password === '' || cPassword === '') {
      const emptyErrorMessage = document.createElement('p');
      emptyErrorMessage.textContent = 'Please enter both passwords';
      emptyErrorMessage.className = 'error-message';
        const existingErrorMessage = document.querySelector('.error-message');
      if (!existingErrorMessage) {
        cPasswordInput.parentNode.appendChild(emptyErrorMessage);
      }
    }
    else if (password !== cPassword) {
      const mismatchErrorMessage = document.createElement('p');
      mismatchErrorMessage.textContent = 'Passwords do not match';
      mismatchErrorMessage.className = 'error-message';
        const existingErrorMessage = document.querySelector('.error-message');
      if (!existingErrorMessage) {
        cPasswordInput.parentNode.appendChild(mismatchErrorMessage);
      }
    } else {
      window.location.href = 'quotes.html';
    }
  });
  
