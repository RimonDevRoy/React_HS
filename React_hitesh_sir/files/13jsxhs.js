/*
// CONTEXT API CRASH COURSE WITH 2 PROJECTS

● When a component re-renders, the re-conciliation algorithm compares the newly rendered elements DOM tree with its previous one and then adds those changes to Browser DOM.

● Components often need to change what’s on the screen as a result of an interaction. Typing into the form should update the input field, clicking “next” on an image carousel should change which image is displayed, clicking “buy” should put a product in the shopping cart. Components need to “remember” things: the current input value, the current image, the shopping cart. In React, this kind of component-specific memory is called state.

● React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions. Props are the information that you pass to a JSX tag.

Passing props to a component 
In this code, the Profile component isn’t passing any props to its child component, Avatar:

export default function Profile() {
  return (
    <Avatar />
  );
}

You can give Avatar some props in two steps.

Step 1: Pass props to the child component 
First, pass some props to Avatar. For example, let’s pass two props: person (an object), and size (a number):

export default function Profile() {
  return (
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
  );
}

Now you can read these props inside the Avatar component.

Step 2: Read props inside the child component 
You can read these props by listing their names person, size separated by the commas inside ({ and }) directly after function Avatar. This lets you use them inside the Avatar code, like you would with a variable.

function Avatar({ person, size }) {
  // person and size are available here
}

Add some logic to Avatar that uses the person and size props for rendering, and you’re done.

Now you can configure Avatar to render in many different ways with different props. Try tweaking the values!

/// App.js
import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}

/// utils.js
export function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

Props let you think about parent and child components independently. For example, you can change the person or the size props inside Profile without having to think about how Avatar uses them. Similarly, you can change how the Avatar uses these props, without looking at the Profile.

You can think of props like “knobs” that you can adjust. They serve the same role as arguments serve for functions—in fact, props are the only argument to your component! React component functions accept a single argument, a props object:

function Avatar(props) {
  let person = props.person;
  let size = props.size;
  // ...
}

Usually you don’t need the whole props object itself, so you destructure it into individual props.

Specifying a default value for a prop 
If you want to give a prop a default value to fall back on when no value is specified, you can do it with the destructuring by putting = and the default value right after the parameter:

function Avatar({ person, size = 100 }) {
  // ...
}
Now, if <Avatar person={...} /> is rendered with no size prop, the size will be set to 100.

The default value is only used if the size prop is missing or if you pass size={undefined}. But if you pass size={null} or size={0}, the default value will not be used.

Forwarding props with the JSX spread syntax 
Sometimes, passing props gets very repetitive:

function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}

There’s nothing wrong with repetitive code—it can be more legible. But at times you may value conciseness. Some components forward all of their props to their children, like how this Profile does with Avatar. Because they don’t use any of their props directly, it can make sense to use a more concise “spread” syntax:

function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}
This forwards all of Profile’s props to the Avatar without listing each of their names.

Use spread syntax with restraint. If you’re using it in every other component, something is wrong. Often, it indicates that you should split your components and pass children as JSX. More on that next!

Passing JSX as children 
It is common to nest built-in browser tags:

<div>
  <img />
</div>

Sometimes you’ll want to nest your own components the same way:

<Card>
  <Avatar />
</Card>

When you nest content inside a JSX tag, the parent component will receive that content in a prop called children, but only if they are rendered in the main.jsx. If we wrap all components in a single component and render it, it will show receive the children, because if write it in self-closing tag, it will only return the components wrapped in it. 

function Container(props) {
  console.log(props)

  return (
    <About>
      <Contact>
        <Header/>
      </Contact>
    </About>
  )
}

<React.StrictMode>
   <Container/>
</React.StrictMode>

/// But,
<React.StrictMode>
  <Container>
   <Container/>
  </Container>
</React.StrictMode>

For example, the Card component below will receive a children prop set to <Avatar /> and render it in a wrapper div:

/// App.js
import Avatar from './Avatar.js';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}

/// Avatar.js
import { getImageUrl } from './utils.js';

export default function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

/// utils.js
export function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

Try replacing the <Avatar> inside <Card> with some text to see how the Card component can wrap any nested content. It doesn’t need to “know” what’s being rendered inside of it. You will see this flexible pattern in many places.

You can think of a component with a children prop as having a “hole” that can be “filled in” by its parent components with arbitrary JSX. You will often use the children prop for visual wrappers: panels, grids, etc.

How props change over time 
The Clock component below receives two props from its parent component: color and time. (The parent component’s code is omitted because it uses state, which we won’t dive into just yet.)

Try changing the color in the select box below:

export default function Clock({ color, time }) {
  return (
    <h1 style={{ color: color }}>
      {time}
    </h1>
  );
}

This example illustrates that a component may receive different props over time. Props are not always static! Here, the time prop changes every second, and the color prop changes when you select another color. Props reflect a component’s data at any point in time, rather than only in the beginning.

However, props are immutable—a term from computer science meaning “unchangeable”. When a component needs to change its props (for example, in response to a user interaction or new data), it will have to “ask” its parent component to pass it different props—a new object! Its old props will then be cast aside, and eventually the JavaScript engine will reclaim the memory taken by them.

Don’t try to “change props”. When you need to respond to the user input (like changing the selected color), you will need to “set state”, which you can learn about in State: A Component’s Memory.

● Nested JSX like <Card><Avatar /></Card> will appear as Card component’s children prop.

● You can’t change props. When you need interactivity, you’ll need to set state.

● Props are read-only snapshots in time: every render receives a new version of props.

● Prop drilling: In React, Props Drilling is a practice in which a prop or data is passed from one parent component to one or lower children's components, resulting in multiple levels of the component tree.

● Instead of prop drilling, we can place all the prop info in one seperate container(no matter the kind) and then pass info from that to all the components that require them. Context API, react-redux, redux-toolkit(RTK), zustand etc comes in rescue for this.

● Context API: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. But this same thing would have not worked well if a file for global were just made, because then from anywhere those variables could have been updated which is obviously a pitfall. This also makes the States of UI unsynchronized. React makes state synchronized because the state can only be changed by setChanger method of useState() hook, not that individual operations from different places have the access to do so.

● The Context API in React allows you to share state between components without manually passing props through each level of the component tree. Setting up the Context API involves creating a context and using Provider and Consumer components. The props can essentially be crucial for UI and they could have states and this is an example of state management by Context API. 

● /// A good-piece of code to avoid re-rendering infinite times.

function Foo() {
  const [a, setA] = useState(0);
  if (a != 1) setA(1); // to avoid infinite-loop
  return <div>{a}</div>;
}

● How state variable changes even though being a const?

What happens instead is each time the component is rendered, you get a new value and assign it to a new const variable. Components are functions that get called on rerenders, while React manages to handle unchanged and changed states so that resources are calculated economically. That is also the reason why class components can't use hooks, since classes aren't 'called' on every rerender(probably also loops and conditionals).

● After creating context with createContext(), we need to wrap the components that need access to info stored in it inside it, and make it a context provider. Now the components inside it will have access to the context. The 'value' attribute of <UserContext.Provider> will hold the info that is to be accessed. Here, we can pass array, object or any value.

● useContext(context_name) returns the accessible info as object/array or anything.

● We can pass default values in createContext that will be in the initial state of the context.

● If we use 'dark:' before styles, it means that those styles will be activated upon dark mode. General could be:

x:styles

● Whenever a component re-renders, the functionalities inside it is again run and the JSX is returned.

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

