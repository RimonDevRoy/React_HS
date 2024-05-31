/*
// FILE STRUCTURE AND FLOW OF REACT

● To understand how React works, it is must to know how the React code is being pushed to HTML.

● JS cannot do anything by itself, it has to be in a HTML file to work.

● Different approaches of creating React projects are based on how the JS code is being pushed into HTML.

● If we do not add scripts to HTML, there is no way that a JS script would be able to manipulate that HTML file.

● All dependencies of a project is available in the node_modules folder of the project.

● A stable version of package.json is locked as package-lock.json

● When the webpage made with React is opened on phone, the meta tag's values are taken from 'manifest.json'

● 'robots.txt' is for search engine.

● All pages require individual HTML files for them. That's why React project has only one HTML file.

● 'noscript' tags in HTML show the content inside them if the HTML file is run on a browser that has JS disabled in them.

● React library is the core library and React-DOM is an implementation of it in the WEB, that is, how the core library can manipulate web browser DOM.

● React makes its own DOM known as the Virtual DOM.

● JSX gives us the power to make custom tags(components).

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

<tag/> but they are preferred as <tag />

● Rendering, in web development, is the process of converting code into viewable, interactive web content. This involves interpreting the code written in languages like JSX or Vue. js and displaying it as a webpage that users can interact with. This can be done server-side or user-side. In a nutshell, rendering means converting a piece of something into something else.

● element.render(JSX) is basically instructing to render the written JSX code into the element 

● React renders HTML to the web page by using a function called render(). The purpose of the function is to display the specified HTML code inside the specified HTML element. In the render() method, we can read props and state and return our JSX code to the root component of our app.

● root.render() is used to render a React component into the DOM. It is typically used only once, in the entry point of your application, for example, in the index. js file. This method takes a component as its argument and then renders it to a specified container. Technically in JSX we are writing JS which looks like HTML and render() renders the JS into HTML and then the broswer has its own rendering that shows the HTML in webpage or, it instructs the Browser to render the JSX in the webpage treating as HTML.

● Virtual DOM basically means that the root element is taken as the root in React and React manipulates DOM tree of the elements inside root element.

● createRoot lets you create a root for React Virtual DOM to display React components inside a browser DOM node.

const root = createRoot(domNode, options?)

● <React.StrictMode></React.StrictMode> is for checking optimization of the application during development. It is not mandatory to have for running applications, yet recommended.

● The methods like createRoot(), render() belong to React library and cannot be used in vanilla JS unless we import them. Vanilla JS by itself cannot render HTML, React gives this advantage of writing HTML according to our need and treat the functions(components) as custom HTML tags and at the end render them in webpage. This might look troublesome for small applications but while large scale applications, React comes handy.

● The 'react-scripts' are the ones that inject 'index.js' into the 'index.html' file behind the scenes.

● When the 'index.js' or 'index.jsx' file is injected into 'index.html', the index.js file create a root on the div with id root and it renders the HTML looking(although real HTML like syntax returned from function) into the div and the Browser renders them as HTML.

● script_name.js and script_name.jsx are same. Both are JS files. .jsx is made to make component files noticeable.

● In vite project the react-scripts are not given, and the main script is by default injected into index.html. It saves one step.

● In simple terms, a JavaScript bundler is a tool that merges multiple JavaScript files along with their dependencies into a single file, commonly known as a bundle. JavaScript bundlers are not limited to only JavaScript code. They can also bundle other assets, like CSS files and images.

● Vite JS is majorly used to set up a development environment for various frameworks like React and Vue, and even for a Vanilla JavaScript app with a dev server and hot reloading by following just three commands. Vite is a bridge between Twig/Craft CMS and the next-generation frontend build tool Vite.

● Vite is a local development server

● Next. js ensures that production builds are optimized with features like code splitting and lazy loading, while Vite's build tool provides a fast build process.

● It is highly recommended to name the components as .jsx

● 
. means current folder
.. means parent folder of current folder

● When we import a component, we use:

import component_name from 'path_to_component'

● Vite is a kind of framework that allows to work in React and libraries. That's why we have to name components as .jsx. But, it is not necessary if we make project with bare React(React library itself). 

● The first letter of component functions msut be in Capital letters for Vite and bare React(classic React). If components are named in small letters, they can be imported but inside the component functions they won't be available as they won't be counted as components even if we see that they are written. Component functions are actual components, the file is just component holder file.

● We can return only one element from JSX components. That's why if we need to return multiple elements, we wrap it in a single element. To solve inconveniences due to this, all elements can be wrapped inside --> <></>. This is called fragment.

● If we return custom tags from JSX that are not defined or imported, the tag will be visible in inspect but there will be no content inside it.

● It is a good practise to name the component holder files starting with Capital letter.

● In React, the whole content inside root is changed and the users are given the feel that they have visited to another project. For better demonstration the URL is also manipulated and /about, /contactus etc. are shown.

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

*/

import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.querySelector(`root`))
root.render()