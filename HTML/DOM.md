# DOM

## Introduction and querySelector

The DOM is a tree-like representation of a webpage, composed of nodes for each HTML element. These nodes can be targeted using `querySelector()` or `querySelectorAll()` (returns a `NodeList`, see `NodeList` section) with CSS-style selectors. Selectors include:  
- `.class`  
- `#id`  
- `div` (element)  

These can be followed up with relational selectors such as `.previousElementSibling` and `.firstElementChild`. A query call may look something like this:  
```javascript
const myDiv = document.querySelector('div#myDiv');
const divChild = myDiv.firstElementChild;
const divSpanList = myDiv.querySelectorAll('span');
```  

HTML code is converted into nodes by the browser. Nodes are objects with multiple methods and properties.  

## DOM-loading  

JavaScript can only act on DOM elements once those elements are loaded. If your script is loaded in the html `<head>`, most of the DOM will not have loaded. For this reason it's recommended to load your script at the bottom of `<body>`, or in the head using `defer` as in:
```html
<!-- EITHER load in head with defer-->
<head>
    <script src="main.js" defer></script>
</head>
<!-- OR load at bottom of body -->
<body>
    <!-- All content -->
    <script src="main.js">
</body>
```

## DOM Manipulation  

We can create nodes in memory, append child nodes and remove nodes using various DOM methods. When can also change the properties of nodes to which we have a reference.  
```javascript
const myNode = document.createElement('span');
const myDiv = document.querySelector(div);

// Appending and removing nodes
document.body.appendChild(myDiv); // Append to body
myDiv.appendChild(myNode);
myDiv.removeChild(myNode);

// Changing attributes
myDiv.setAttribute('id', 'myDiv');
myDiv.getAttribute('id'); // => myDiv
myDiv.removeAttribute('id');

// Inline styling
myDiv.style.color = 'blue';
myDiv.style.cssText = 'color: blue; background: white'
myDiv.setAttribute('style', 'color: blue; background: white')

// Editing classes
myDiv.classList.add('newClass');
myDiv.classList.remove('newClass');
myDiv.classList.toggle('newClass'); 

// Editing content
// Preferred method
myDiv.textContent = 'Hello World!';
// Avoid due to security risks, use appendChild instead to add elements
myDiv.innerHtml = '<span>Hello World!</span>' 
```

## Events

Actions on the page, such as mouse/key presses, load-completion, and button hovers/presses can trigger events. We can write JS code trigger changes on the page or background in response to these events. This can be done with 3 methods. In each method we can, optionally, pass the event that triggered it as an argument (`e`).  
1. a function can be attached directly to the element's `onclick` property, however this clutters the HTML document
    ```html
    <button onclick="function(e){console.log(e);return e;}">Click</button>
    ```  
2. We can similarly assign the function to `onclick` in our js file
    ```html
    <button id="btn">Click</button>
    ```
    ```javascript
    const btn = document.querySelector('#btn');
    btn.onclick = (e) => {
        console.log(e);
        return e;
    };
    ```
3. Every element has only one `onclick` property, if we use `addEventListener()` instead we can add as many event listeners as required. **This is the preferred method**
    ```javascript
    btn.addEventListener('click', (e) => {
        console.log(e);
        return e;
    })
    ```
The argument `e` is the event that triggered the event listener, not the element itself, although that element can be identified (and modified) through its property, `e.target`. It contains a lot of other useful properties and methods.

## NodeList 

The function `querySelectorAll()` returns a NodeList, which is different from an array. However, we can still loop through this `NodeList` using the `forEach()` method. If we want an array, we can use `Array.from()` or the spread operator.
```javascript
const list = document.querySelectorAll('span');

// Using forEach
list.forEach(el => el.textContent = 'updated')

// Using array methods
const array = Array.from(list);
const array2 = [...list];
for (el of array) {
    el.textContent = 'updated';
}
```