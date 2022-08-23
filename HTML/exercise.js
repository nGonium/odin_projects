const container = document.querySelector('#container');

const red = document.createElement('p');
red.style.color = 'red';
red.textContent = "Hey I'm red!";

const blue = document.createElement('h3');
blue.style.color = 'blue';
blue.textContent = "I'm a blue h3";

const box = document.createElement('div');
box.style.cssText = 'border: black solid; background: pink';

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

const p = document.createElement('p');
p.textContent = "ME TOO!";

box.appendChild(h1)
box.appendChild(p);

container.appendChild(red);
container.appendChild(blue);
container.appendChild(box);