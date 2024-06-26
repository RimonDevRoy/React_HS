/*
// REDUX TOOLKIT CRASH COURSE

● Redux, Context API, zustand etc. are global state managements.

● Redux Toolkit(RTK) is a modern implementation of Redux.

● Flux is the primeval architecture for all global state managements, developed by facebook.

● Redux has some fundamental concepts:
1. There should be only one source of truth(data center => global variable storage).

2. We should never mutate states.

3. Any changes done to the store must be done only through reducers(functions).

4. Every work should be done with a proper mechanism.

● Redux is an independent library that works with React, Vue etc.

● In Redux we had to spend much time setting the environment of Redux. Redux thunk, Middlewares, Redux Saga etc. were introduced to solve the inconveniences, but yet it was troublesome.

● RTK is an abstraction over Redux. It includes batteries() which gives us simple flow and manages many many operations internally by itself.

● "Batteries included" (slang), in a product usability (mostly in software) it states that the product comes together with all possible parts required for full usability. In short, it means that it has all the necessary features to use and manages several hardships internally under the hood.

● Some keywords in RTK:

1. Store: The single source of truth, that is, where all the global states are stored. A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it, which triggers the root reducer function to calculate the new state. A store is not a class. It's just an object with a few methods on it.

2. Reducers: These are the methods through which any change in store is to be made. A standard Redux slice reducer function containing the logic for updating the cached data. Add this to the Redux store using the reducerPath you provided as the root state key. A custom Redux middleware that contains logic for managing caching, invalidation, subscriptions, polling, and more. Add this to the store setup after other middleware. 

A reducer is a function that takes in the current state of an application and an action as arguments, and returns a new state based on the action.

Here's an example of a simple reducer:

const initialState = {
  count: 0
};

function counterReducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

3. Dispatch
In Redux, dispatch is a function provided by the store that allows you to send an action to update the state of your application. When you call dispatch, the store runs an action through all of the available reducers, which in turn update the state accordingly.

You can think of dispatch as a mail carrier who delivers mail to different departments in a large company. Just like how the mail carrier delivers mail to different departments, dispatch delivers actions to various reducers in your Redux store. Each reducer is like a department in the company that processes the mail and updates its own part of the company's data.

4. Actions
An action is an object that describes what changes need to be made to the state of your application. It sends data from your application to the Redux store and serves as the only way to update the store.

An action must have a "type" property describing the action being performed. This "type" property is typically defined as a string constant to ensure consistency and avoid typos.

In addition to the "type" property, an action can have a "payload" property. The "payload" property represents the data that provides additional information about the action being performed. For example, if an action type is ADD_TASK, the payload might be an object containing a new task item's "id", "text", and "completed status".

Here's an example of an action:

{
  type: 'ADD_TASK',
  payload: {
    id: 1,
    text: 'Buy groceries',
    completed: false
  }
}

Note that to create actions, we use action creators. Action creators are functions that create and return action objects.

Here is an example of an action creator that takes in a task's text and returns an action object to add the task to the Redux store:

function addTask(taskText) {
  return {
    type: 'ADD_TASK',
    payload: {
      id: 1,
      text: taskText,
      completed: false
    }
  }
}

An appropriate analogy for actions and action creators would be a chef using a recipe. The recipe outlines the required ingredients and instructions to prepare a dish, similar to how an action in Redux specifies the needed details to modify the state of an application.

In this scenario, the chef represents the action creator, who follows the recipe to create the dish, similar to how an action creator creates an action based on predefined properties.

● useSelector() is the hook to select a data from store. The useSelector hook allows access to the state stored in a Redux store. useSelector() accepts a selector, a function which computes a value from state

● useDispatch() is the hook that enables dispatching of actions to the store. It returns a reference to the dispatch function from the Redux store, enabling components to trigger state changes.

● These hooks have benefits, including keeping business and presentation logic separate and eliminating the need to pass the dispatch function down through props.

● configureStore method comes from core redux library.

● It is good to follow the given steps:

1. Make a store using configureStore()

2. Make slices using createSlice() in RTK. slice in RTK is a bigger version of reducer in Redux.

3. Create an initial state for the slice of the store. It can be either array or object.

4. Make reducers inside slices in RTK. All reducers have compulsory arguments named 'state' and 'action'.

-> State: It gives access to the current state of the global states. The reducer function contains two parameters one of them is the state. The State is an object that holds some information that may change over the lifetime of the component. If the state of the object changes, the component has to re-render. In redux, Updation of state happens in the reducer function. In a Redux application, you cannot modify application state directly. The only way to change the state is by dispatching actions: This restriction ensures that state changes are predictable. Redux store and the dispatch() function is provided by it to allow components access to the state of an application. The only way in it

-> Action: An action, is an object that contains the payload of information. Any action and information passed to a reducer is received by its action argument object and can be accessed through 'payload' property of it. Actions serve as messengers that convey information from your application to the Redux store, triggering state updates.

Syntax of a slice:

const slice_variable_name = createSlice({
  name: 'slice_name',
  initialState: [] / {},
  reducers: {
    reducer1: (state, action) => { code to execute upon invocation },
    reducer2: (state, action) => { code to execute upon invocation },
    reducer3: (state, action) => { code to execute upon invocation },
    .
    .
    .
  }
})

● Unlike default Context methods, we have to declare as well as define the methods in reducers object.

● A slice is the portion of Redux code that relates to a specific set of data and actions within the store's state. For example, there might be two sets of data to be managed seperately. Thus, we need two different slices for both of them.

● In Redux, actions are plain JavaScript objects that describe changes in an application’s state. These actions are dispatched from components and are the only source of information for the Redux store. The Redux store then passes these actions to reducers, which specify how the state should change in response to the actions.

● Payload stores the additional information about what happened. It carries data to be processed by reducers. Action payloads, within this context, refer to the additional data attached to actions. While actions themselves serve as triggers for state changes, payloads carry the necessary data to enact those changes. They provide context and specificity to actions, allowing reducers to understand what kind of state update is required.

Action’s payload carries the data necessary to update the application state. They are vital because they provide the necessary information for reducers to determine how the state should be modified. Without payloads, actions would lack specificity and would be unable to convey the necessary details about the state change.

For instance, in a Notes application, an action to create a note might include a payload containing the details of the note to be added, such as title, description, tags, and date. Without this payload, the action would lack the information needed for the reducer to accurately update the state with the new note.

● We need to export the 'reducer' and individual reducer methods individually. Individual methods will be used in components and whole 'reducer' is sent to aware the store. We can access individual reducers by slice_name.actions and whole reducer can be accessed by slice_name.reducers

● useDispatch() takes help from a reducer to make changes in store.

● We cannot use reducers on their own. We need to use them inside useDispatch(). We just pass the payload infos as arguments in the reducer. In intial times we had to write time consuming syntax like action.payload etc. in the argument. If we have multiple infos, we can pass them in wrapped in an object as payload itself is an object.

● We get the 'state' as argument in the callback inside useSelector().

● State is not preserved in Context API and that is why prev.push() was not working. In Redux, State is preserved and for this we don't need to take the previous state and do operations on it, just do directly.

● All the states are under the hood accessed by store. In useSelector((state) => code) the state is combined form of all the states of all slices. That means, we can access a state from one slice and also another slice.

● In Redux Toolkit, a slice is a bundled package containing reducer logic and related actions for a specific state section.

● createSlice
A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

This API is the standard approach for writing Redux logic.

● Slices could also be compared with mini-portions(like Auth and others) of the store.(speculation)

● 'forEach' loops executes the given callback for every element in the array. 'map' loops returns a new array with the new elements after doing operations given inside the given callback. 'filter' loops return a new array with the new elements that are true for the given condition in given callback. 'reduce' loops take a callback function to execute for each element in the array. Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn. For the last invocation, the return value becomes the return value of reduce().

● All 'slices' are under the hood contained by 'store'.

● The 'type' of action is slice_name/reducer_name.

● States have their updated values reflected in all places, be it UI or in any value of code. Its updation is dynamic, that is, on the spot updation with no need to re-run the whole app.

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

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
