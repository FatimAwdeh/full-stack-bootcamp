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
