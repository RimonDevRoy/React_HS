import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App />
 
);

/*

● We can render HTML inside an element by:

element.render(
  <React.StrictMode>
  <component1>
  <component2>
  .
  .
  .
  .
  </React.StrictMode>
)

● Main Browser DOM also renders HTML.

● JSX gives us the power to render HTML elements through the help of JS.

● We can write self closing tags by:

<tag/>

● Rendering, in web development, is the process of converting code into viewable, interactive web content. This involves interpreting the code written in languages like JSX or Vue. js and displaying it as a webpage that users can interact with. This can be done server-side or user-side. In a nutshell, rendering means converting a piece of something into something else.

● element.render(JSX) is basically instructing to render the written JSX code into the element 

● React renders HTML to the web page by using a function called render(). The purpose of the function is to display the specified HTML code inside the specified HTML element. In the render() method, we can read props and state and return our JSX code to the root component of our app.

● root.render() is used to render a React component into the DOM. It is typically used only once, in the entry point of your application, for example, in the index. js file. This method takes a component as its argument and then renders it to a specified container. Technically in JSX we are writing JS which looks like HTML and render() renders the JS into HTML and then the broswer has its own rendering that shows the HTML in webpage or, it instructs the Browser to render the JSX in the webpage treating as HTML.

● Virtual DOM basically means that the root element is taken as the root in React and React manipulates DOM tree of the elements inside root element.

● createRoot lets you create a root for React Virtual DOM to display React components inside a browser DOM node.

const root = createRoot(domNode, options?)

*/





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
