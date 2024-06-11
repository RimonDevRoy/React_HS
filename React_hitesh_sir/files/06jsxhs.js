/*
// VIRTUAL DOM, REACT FIBRE, RECONCILIATION

||| Virtual DOM |||
||| React Fibre |||
||| Reconciliation |||

● Whenever there is change in document, the whole Browser DOM is repainted. This Browser DOM repaint is displayed as page loading.

● createRoot() method creates React's own DOM(Virtual DOM) and it is compared with the Browser DOM each time whenever there is a change. The changes are only tracked with the help of comparing of the two DOMs and the changes of UI are propagated only without needing to repaint the whole Browser DOM.

● Virtual DOM: JS's own DOM that compares the changes made and propagates only those changes in the UI.

● React does not necessarily update the UI instantly after a change is made in every situation. It uses highly optimized algorithms to figure out whether there will be any updates in the near future(updates arising from Network call etc.) and waits for those updates and does a final update after those. This reduces the need to update multiple times which makes the webpage very less usable.

● In current times, React fibre algorithm is used to update Virtual DOM.

● React's key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

● At the beginning and before the injection of JS into webpage, the images, links etc. are non-interactive because JS is not there to make it so. The process of injecting JS in web-layout is called hydration. In React, “hydration” is how React “attaches” to existing HTML that was already rendered by React in a server environment.

● diff === differentiate

● Reconciliation is the algorithm used by React that diffs Browser DOM with Virtual DOM and identifies the changes.

● Update is a change in the data used to render a react app. Usually the result of 'setState'. Eventually results in a re-render.

● If we make a project using React, then any change made in the UI will be done to the Virtual DOM - which is basically the copy of browser DOM - and React will compare the unchanged browser DOM with the Virtual DOM with an algorithm named 'reconciliation' and figures out the changes and then makes the changes in the browser DOM. This saves a lot of time as the whole browser DOM is not updated each time.

● Every element in JS has a tree structure and JSX makes the HTML elements into tree as same as JS.

● Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

● Although Fiber algorithm is a ground-up rewrite of the reconciler, the high-level algorithm described in the React docs will be largely the same. The key points are:

Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.
Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."

Keys are used to improve the performance of diffing of lists.

● React Lists are mainly used for displaying menus on a website, for example, the navbar menu. In regular JavaScript, we can use arrays for creating lists. In React, rendering lists efficiently is critical for maintaining performance and ensuring a smooth user experience.

● The key points about fiber algorithm are:

In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.

● createRoot (rootElement) is a React utility function used to create a react root element, which is a DOM element in which UI components render themselves. It takes as a parameter the root element that should be created.

● Improved reconciliation: React Fiber includes an improved reconciliation algorithm, which is the process of comparing the current state of the UI with the new state and updating the UI accordingly. This improved algorithm makes the reconciliation process more efficient and results in faster UI updates.

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

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

