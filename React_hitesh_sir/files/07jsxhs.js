/*
// TAILWIND AND PROPS IN REACT.JS

● Tailwind is a utility first CSS framework. It works by adding classes to elements. We need to link tailwind to the project file. The different styles have been designed and only adding the corresponding className to HTMl elements make the styles applied to them.

● npm install -D tailwindcss postcss autoprefixer

This is the first command to configure tailwind to a React project. "-D" indicates dev dependencies, that means it is associated with the dependencies related to development. "postcss autoprefixer" are the dependencies of tailwind itself.
 
●npx tailwindcss init -p

This is the second command. It generates tailwind and postcss config files. After this, we need to put the name of main doc file(index.html) in the content of tailwind config file.

● Then we need to inject tailwind to index.css file.

● Tailwind styles are by default responsive.

● Props make components resuable.

● In Vanilla terms, HTML, CSS, JS is kept separate and to make multiple identical elements we need to make individual changes in HTML, CSS and JS for each element. But, in React the HTML, CSS and JS for a component is kept inside it in same place and to make each component copies unique, the values of HTML, CSS and JS of the components are simply changed.

● CTRL + ALT + R
To get the list of snippet triggers.

● The properties(attributes) given to components in the place where they are imported to are passed to the components as props of that unique component instance, that is, when two cards are being used in App.jsx the props of the first card is only first's and similarly for second's. We can make personalized custom attributes to use them as props for specific purposes.

● We can pass objects and arrays too in props section but we have define them above the return section and pass as a variable.

● As 'props' is an object, we can access all of them in the style of accessing object properties.

● Another syntax is that we can directly destructure the props object at the argument section where the component receives it.

● We can set the default value of any prop by -> wanted_value || default_value, in the place where this prop is expected, but this reduces readability.

Default_value will be used if wanted_value is unaccessible for any reason.

To improve readability we can set the default value in the argument section itself.

● I think using 'this' is not necessary in components.

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
