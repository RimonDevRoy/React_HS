/*
// CONTEXT API WITH LOCAL STORAGE

●  Routes couple URL segments to components, data loading and data mutations. Through route nesting, complex application layouts and data dependencies become simple and declarative.

● When we click a edit button on a text, the text appears to have become editable. But, in reality in that place a input field generates and takes the edit and when save button is clicked, the input field is moved and the edited text is displayed.

● The prototypes of properties and methods are given in the default info object of a Context. The actual definition of these can be given later.

● Context API is for small and loosely medium projects. For big and large projects we need redux, zustand etc. state management libraries.

● In the project, ids were given to each todo because they would have to looped later.

● If we have existing values in a state, it is best use (prev) => {operation of prev} styled programming to avoid loss of data and confusion in managing them.

● Under the hood, YouTube, twitter and some other applications are also todos.

● The value updation operation and defination of methods of properties and methods in Context API is done in the place where Context Provider is used(generally).

● If we do not update all properties or methods of default info of Context API, API will use the default values for those which are not updated.

● In deleteTodo, an individual todo was not deleted from the array rather a new array with the other todos were made. This is done for better optimization because if we remove a todo from the array, it will become holey which very less optimized kind of array.

● In the situations like toggleComplete, we can use '!' to alter between the previous state and new state of boolean.

● localStorage cannot use JSON or any other data type but string. Thus, it is best to convert data into string before passing to localStorage and string to respective data type according to use case before taking from localStorage.

● JSON parsing is done to preserve the structure of arrays of todos. JSON does not necessarily only mean curly braces.

● In current new syntax, if the name of key and variable value is same, we can just pass the variable name. Example:

todo: todo -> todo

● Wiring up is necessary in React projects, wiring basically means that the state/input is synchronized with the UI/state.

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

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
