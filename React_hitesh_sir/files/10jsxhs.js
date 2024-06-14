/*
// useEffect, useRef and useCallback with 1 project

● useCallback(fn, dependencies): In simple terms, this makes the fn run every single time any of the dependencies' value change.

useCallback is a React Hook that lets you cache a function definition between re-renders.

const cachedFn = useCallback(fn, dependencies)

Caching means storing it in the temporary memory.

● A cache -- pronounced CASH -- is hardware or software that is used to store something, usually data, temporarily in a computing environment.

It is a small amount of faster, more expensive memory used to improve the performance of recently or frequently accessed data. Cached data is stored temporarily in an accessible storage media that's local to the cache client and separate from the main storage. Cache is commonly used by the central processing unit (CPU), applications, web browsers and operating systems.

Cache is used because bulk or main storage can't keep up with the demands of clients. Cache decreases data access times, reduces latency and improves input/output (I/O). Because almost all application workloads depend on I/O operations, the caching process improves application performance.

● When a cache client attempts to access data, it first checks the cache. If the data is found there, that is referred to as a cache hit. The percent of attempts that result in a cache hit is called the cache hit rate or ratio.

Requested data that isn't found in the cache -- referred to as a cache miss -- is pulled from main memory and copied into the cache. How this is done, and what data is ejected from the cache to make room for the new data, depends on the caching algorithm, cache protocols and system policies being used.

Parameters 
fn: The function value that you want to cache. It can take any arguments and return any values. React will return (not call!) your function back to you during the initial render(first time page load). On next renders, React will give you the same function again if the dependencies have not changed since the last render. Otherwise, it will give you the function that you have passed during the current render, and store it in case it can be reused later. React will not call your function. The function is returned to you so you can decide when and whether to call it.

dependencies: The list of all reactive values referenced inside of the fn code. Reactive values include props, state, and all the variables and functions declared directly inside your component body. If your linter is configured for React, it will verify that every reactive value is correctly specified as a dependency. The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3]. React will compare each dependency with its previous value using the Object.is comparison algorithm.

Returns 
On the initial render, useCallback returns the fn function with the default values of the dependencies you have passed.

During subsequent renders, it will either return an already stored fn  function from the last render (if the dependencies haven’t changed), or return the fn function you have passed during this render.

Caveats 
useCallback is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.
React will not throw away the cached function unless there is a specific reason to do that. For example, in development, React throws away the cache when you edit the file of your component. Both in development and in production, React will throw away the cache if your component suspends during the initial mount. In the future, React may add more features that take advantage of throwing away the cache—for example, if React adds built-in support for virtualized lists in the future, it would make sense to throw away the cache for items that scroll out of the virtualized table viewport. This should match your expectations if you rely on useCallback as a performance optimization. Otherwise, a state variable or a ref may be more appropriate.

● On the following renders, React will compare the dependencies with the dependencies you passed during the previous render. If none of the dependencies have changed (compared with Object.is), useCallback will return the same function as before. Otherwise, useCallback will return the function you passed on this render.

In other words, useCallback caches a function between re-renders until its dependencies change.

● The event.target property can be used in order to implement event delegation.

JS
Copy to Clipboard
// Make a list
const ul = document.createElement("ul");
document.body.appendChild(ul);

const li1 = document.createElement("li");
const li2 = document.createElement("li");
ul.appendChild(li1);
ul.appendChild(li2);

function hide(evt) {
  // evt.target refers to the clicked <li> element
  // This is different than evt.currentTarget, which would refer to the parent <ul> in this context
  evt.target.style.visibility = "hidden";
}

// Attach the listener to the list
// It will fire when each <li> is clicked
ul.addEventListener("click", hide, false);

● "target.value" is the value that the target is brought to by the user. If onChange is used then it means that the value of the target element taken to upon changing it.

● useEffect is a React Hook that lets you synchronize a component with an external system.

useEffect(setup, dependencies?)

● The difference between "useCallback" and "useEffect" is that useCallback optimizes the given function according to the changes in its dependencies and stores it in the cache and return it. In brief, the values of the dependencies are put in the places inside the function and the final optimized function is stored in cache and returned. On the other hand, useEffect only re-runs the given function if any of the dependencies are even slightly altered in any sort.

● Memoization
Memoization in React is a technique used to optimize the performance of functional components by caching the results of expensive computations or function calls. It's particularly useful when dealing with computationally intensive or frequently called functions with the same input values, as it helps avoid redundant calculations and improves the overall efficiency of the application. In React, there are three techniques for memoization: React.memo(), useMemo(), and useCallback().

|||
The useCallback() hook in React is used to memoize a function instead of memoizing the function result. It is particularly useful when passing events as props to child components to prevent unnecessary re-renders.

useCallback() memoizes the function, ensuring it remains the same across re-renders as long as the dependencies haven't changed.

This is especially beneficial when passing functions as props to child components, preventing unnecessary re-renders. It is often used with React.memo() to ensure child components do not re-render when unnecessary. 

|||
The useMemo() hook optimizes performance by memoizing the result of a function call or an expensive computation. It caches the result and recalculates it only when the input values change.

|||
This higher-order component wraps purely functional components to prevent re-rendering if the received props remain unchanged.

By using React.memo(), the rendering result is cached based on props. If the props haven't changed since the last render, React reuses the previously rendered result instead of redoing the rendering process. This saves time and resources.

● Optimization in one sense means storing something in cache for not needing to compute it mulitple times. I think whatever given in the dependencies are also stored in cache.

● We can pass 'ref' attribute to an input tag and the value of it will be stored in the variable given to hold reference.

● useRef is a React Hook that lets you reference a value that’s not needed for rendering.

const ref = useRef(initialValue)

● useCallback actually stores that much portion of a function that is possible to store, that is, reusable.

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

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

