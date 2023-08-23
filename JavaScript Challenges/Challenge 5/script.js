const menuDiv = document.querySelector('.menu');
const headerDiv = document.querySelector('header');
const footerDiv = document.querySelector('footer');


const containerDiv = document.createElement('div');
containerDiv.classList.add('container');
const paragraph = document.createElement('p');
paragraph.textContent = 'Hello, World!';
containerDiv.appendChild(paragraph);
document.body.appendChild(containerDiv);


containerDiv.style.backgroundColor = 'blue';
paragraph.style.color = 'white';
paragraph.style.fontSize ='24px';
paragraph.style.fontFamily='Helvetica';
paragraph.style.border ='1px solid black';
const headerH1 = document.querySelector('header h1');
headerH1.style.fontStyle = 'italic';
const footerH3 = document.querySelector('footer h3');
footerH3.style.fontStyle = 'italic';


const button = document.getElementById('myButton');
button.addEventListener('mouseover', function() {
  button.style.backgroundColor = 'red';
});
button.addEventListener('mouseout', function() {
  button.style.backgroundColor = 'lightgray';
});


const original = document.getElementById('original');
original.addEventListener('click', function(event) {
  if (original.contains(event.target)) {
    console.log(event.target.textContent);
  }
});



const formContainer = document.getElementById('formContainer');

const nameLabel = document.createElement('label');
nameLabel.textContent = 'Name:';
const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.required = true;

const emailLabel = document.createElement('label');
emailLabel.textContent = 'Email:';
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.required = true;

const submitButton = document.createElement('button');
submitButton.textContent = 'Submit';
submitButton.type = 'submit';

formContainer.appendChild(nameLabel);
formContainer.appendChild(nameInput);
formContainer.appendChild(document.createElement('br'));
formContainer.appendChild(emailLabel);
formContainer.appendChild(emailInput);
formContainer.appendChild(document.createElement('br'));
formContainer.appendChild(submitButton);
formContainer.addEventListener('submit', function(event) {
event.preventDefault();

const name = nameInput.value;
const email = emailInput.value;
console.log('Name:', name);
console.log('Email:', email);
nameInput.value = '';
emailInput.value = '';
  });


const originalDiv = document.getElementById('original');
const clonedDiv = originalDiv.cloneNode(true);
const h1Element = clonedDiv.querySelector('p');
h1Element.textContent = 'Cloned';
document.body.appendChild(clonedDiv);



clonedDiv.style.display = 'none';
document.body.appendChild(clonedDiv);
const cloneButton = document.getElementById('clone-btn');
cloneButton.addEventListener('click', function() {
  if (clonedDiv.style.display === 'none') {
    clonedDiv.style.display = 'block';
  } else {
    clonedDiv.style.display = 'none';
  }
});


const removeButton = document.createElement('button');
removeButton.textContent = 'Remove Header';
document.body.appendChild(removeButton);
removeButton.addEventListener('click', function() {
  const header = document.querySelector('header');
  if (header) {
    header.remove();
  }
});


function insertBeforeFooter(element) {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.parentNode.insertBefore(element, footer);
    }
  }
const newElement = document.createElement('div');
  newElement.textContent = 'New Element';
  
  insertBeforeFooter(newElement);