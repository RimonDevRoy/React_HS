/*
// CUSTOM HOOKS IN REACT - CURRENCY PROJECT

● We can make custom hooks. We can also use the built-in hooks to structure the custom hooks.

● When we are looping on JSX, we must be careful to applying key to options. Because if we are making elements by looping, React will get confused if its making the same element again and again even though the textContent inside it might be different and at the end performance will be largely impacted due to this. To solve this, we need to apply unique keys to the elements being made by looping to make them stand as individual unique elements.

● A “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. Keys are used to give an identity to the elements in the lists.

● In useEffect(), when any dependency changes, the value of that dependency changes in the function definition also but is not saved in the cache as useCallback does to enhance optimization.

● Accessible Rich Internet Applications ( ARIA ) is a set of roles and attributes that define ways to make web content and web applications (especially those developed with JavaScript) more accessible to people with disabilities.

● ARIA is not a true programming language but a set of attributes you can add to HTML elements to increase their accessibility. These attributes communicate role, state, and property to assistive technologies via accessibility APIs found in modern browsers. This communication happens through the accessibility tree.

● We can assign unique ID's by useId() hook to accessibility attributes. Accessibility attritbute applied elements can also be accessed by tapping particular keys on keyboard.

● Possibly, the component where values or elements are updated or changed are rendered, but the entire DOM is not repainted.

● When anything changes in JSX, they are re-rendered and then the useEffect associated with it runs.

● If dependency array is passed, then useEffect will run initial render and on re-renders of the dependencies. If empty array is passed, then useEffect will only run on initial render. If nothing is given, useEffect will run on initial render and each and every render.

● useId is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.

● useId should not be used to generate keys in a list. Keys should be generated from your data.

Where to get your key 
Different sources of data provide different sources of keys:

Data from a database: If your data is coming from a database, you can use the database keys/IDs, which are unique by nature.
Locally generated data: If your data is generated and persisted locally (e.g. notes in a note-taking app), use an incrementing counter, crypto.randomUUID() or a package like uuid when creating items.

Rules of keys:
Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes in different arrays.
Keys must not change or that defeats their purpose! Don’t generate them while rendering.

Why does React need keys? 
Imagine that files on your desktop didn’t have names. Instead, you’d refer to them by their order — the first file, the second file, and so on. You could get used to it, but once you delete a file, it would get confusing. The second file would become the first file, the third file would be the second file, and so on.

File names in a folder and JSX keys in an array serve a similar purpose. They let us uniquely identify an item between its siblings. A well-chosen key provides more information than the position within the array. Even if the position changes due to reordering, the key lets React identify the item throughout its lifetime.

● You might be tempted to use an item’s index in the array as its key. In fact, that’s what React will use if you don’t specify a key at all. But the order in which you render items will change over time if an item is inserted, deleted, or if the array gets reordered. Index as a key often leads to subtle and confusing bugs. Because if while reordering, the second element becomes the first one, then the 0 index will be assigned to second element from the first element.

Similarly, do not generate keys on the fly, e.g. with key={Math.random()}. This will cause keys to never match up between renders, leading to all your components and DOM being recreated every time. Not only is this slow, but it will also lose any user input inside the list items. Instead, use a stable ID based on the data. In the case of 11th project, even though new ID is generated every time, the binding is done goodly as same ID is used to both label and input.

Note that your components won’t receive key as a prop. It’s only used as a hint by React itself. If your component needs an ID, you have to pass it as a separate prop: <Profile key={id} userId={id} />.

● HTML accessibility attributes like aria-describedby let you specify that two tags are related to each other. For example, you can specify that an element (like an input) is described by another element (like a paragraph).

In regular HTML, you would write it like this:

<label>
  Password:
  <input
    type="password"
    aria-describedby="password-hint"
  />
</label>
<p id="password-hint">
  The password should contain at least 18 characters
</p>

● However, hardcoding IDs like this is not a good practice in React. A component may be rendered more than once on the page—but IDs have to be unique! Instead of hardcoding an ID, generate a unique ID with useId:

import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  return (
    <>
      <label>
        Password:
        <input
          type="password"
          aria-describedby={passwordHintId}
        />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </>
  );
}

Probably, that's why HS used userId() at the label because whenever the loop was adding new elements to the "select" tag, the whole component was getting re-rendered again and again. Thus, hardcoding an ID is not good for optimization and new ID is returned by useId() on every re-render.
OR,
Probably, when the values or any other thing in input or select options etc. are changed by the user, re-renders would happen and rest of the explanation is same as above.

● React components automatically re-render whenever there is a change in their state or props and provide dynamic content in accordance with user interactions. Unnecessary re-renders affect the app performance and cause loss of users' battery which surely no user would want.

● useId() runs on initial and re-renders.

● What causes a render in react?

1. State modification

Component re-renders when its state is manipulated, simple as that. So, when you modify the state of your component it tends to re-render with the new state value.

2. Passing Props

If the parent component has triggered a rerender all the child component will rerender too, generally you would only want the specific child components to rerender only if the component is consuming some props or the passed props are modified but that isn’t the case, it does not matter if the props are consumed, modified or not, the child components will re-render if the parent component has triggered a render.

3. Using the Context API

When modifying the state which is also the value passed to the context, the whole child components tree would get rerendered. Again doesn’t matter if the child component is consuming the context data or not, it will still rerender. The rerenders depend on the value passed to the provider but still, all the whole components tree would get rerendered.

4. Passing down references

In case of an object, array and function comparison is based on references i.e. the exact memory location so, their comparison even though they seem equal yields false, in React Object.is method is used to compare the different values. One example is change in dependency array. Whenever objects, arrays and functions go through change in any sort, the component that holds them is re-rendered(speculation).

● If elements are binded by IDs or any sort, they are accessible by accessibility methods such as pressing tab key etc.

● Observe the code below:

export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}

From the above code, we can understand that arrays of elements can be directly passed as variables and each elements inside it will be displayed accordingly.

● Observe the code below:

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  let output = [];

  // Fill the output array
  poem.lines.forEach((line, i) => {
    if (i === 0) {
      output.push(
      <p key={i + '-text'}>
        {line}
      </p>
    );
    } else {
    output.push(
      <hr key={i + '-separator'} />
    );
    output.push(
      <p key={i + '-text'}>
        {line}
      </p>
    );
      }
  });


  return (
    <article>
      {output}
    </article>
  );
}

This shows that arrays will render the JSX elements inside it as they are in the webpage. Similar is for objects and functions too maybe.

● In UI, the functionalities to change any value in the UI is executed based on the current state. That means, wherever the values of things are in now will act as current value and will be changed according to the setMethod.

● No need to write index.js in path of imported file because it is by default called.

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

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

