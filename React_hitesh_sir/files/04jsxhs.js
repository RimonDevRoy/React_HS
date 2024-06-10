/*
// CREATION OF CUSTOM(OWN) REACT LIBRARY AND JSX

● React tries to make a tree out of the element we return from components. A demonstration is shown in customReact.js although the keys won't be named in the same way by react itself.

● Then a complete replica is made of the element and appended to the root container of Virtual DOM.

● Every react project as well as vite uses a bundler. Bundler does behind the scene magic. It manipulates and converts(parses) the syntax(beautification, upgrade etc.) like the HTML code we write in JSX gets converted into reactElement type syntax behind the scene because react is end of the day JS and it does not understand HTML.

● <custom_tag /> is also converted to custom_tag() as they are components after all.

● If we directly put element tree object as shown in customReact.js in the render(), it won't work because for that we wrote a custom render method and the render() expects different arguments based on how the creators wrote them. And then the element tree object is again rendered as HTML(this is my speculation).

● React library also offers some methods like getElementById(), createElement() etc. This createElement() makes elements according to the systax that render() expects. It takes some arguments. First is tag, second is an object that takes all the properties(keep empty if no attributes), third is direct text content inside the element, fourth is the variables. Syntax:

const reactElement = React.createElement(
  'div',
  {
  id: `nodiv`,
  ..
  },
  `This is a sample div`,
  var1,
  var2,
  ...
)

If we put this element in the render(), it will work.

● We can inject JS variables in JSX by putting the variable inside {}. It is evaluated expression. It is the final outcome of evaluated JS variable. That means any conditionals, checking etc. have to be written in the function before return and the variable must hold the final outcome of all the operations and be directly displayed in the JSX place.

● We cannot write conditionals and expressions inside the createElement of React because they are converted into objects and in objects we cannot just write any expression.

● If multiple HTML elements are written inside fragment, they are kept in children section(speculation)

● createElement() of React library is injected by 'babel'.

● We can also import 'jsx' from 'react/jsx-runtime.js' and write our element by it without using createElement

● https://github.com/facebook/react

The address to React Library.

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

