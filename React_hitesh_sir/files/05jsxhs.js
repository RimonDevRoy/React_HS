/*
// HOOKS

● To inject evaluated expressions in JSX, we can code all the required conditionals etc. related with the variable and then store the final outcome of the operation in a variable and then inject it in JSX(return section of component).

● In UI, the value of a variable is what it was at the time of rendering it. If its value is updated later, we have to manually render it by using innerHTML etc.

● We can use hooks to do this in React.js. We don't need to manually change UI, React does them by itself.

● "useState(variable's_default_value)" hook propagates the changes made to states(variables) into the UI without the programmer needing to change them manually. It always returns an array with two elements. The first one is a variable and the second one is the method that will manipulate the variable based on need to alter UI. We have destructure them. Syntax:

let [var_name, method_name] = useState(var_name's_default_value)

Then, whenever the state needs to change, we have to call method_name and pass the new value inside it.

method_name(var_name++ / var_name-- / (var_name/2) / .....)

● If we assign the variable returned from hooks into another variable, that new variable also gets updated if the actual ones are updated.

● Hooks are special methods in React that does a specific task.

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

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

