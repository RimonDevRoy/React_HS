/*
// A REACT INTERVIEW QUESTION

● Suppose, we have to make similar changes back to back. But, if we just pass the changed state in state changer method, the Fibre algorithm will ignore all expect one to improve optimization as doing the same update multiple times is not good for user experience. To solve this issue, we have to use the way of callback.  

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

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

const [counter, setCounter] = useState(10)

const addValue = () => {
  setCounter(counter + 1)
  setCounter(counter + 1)
  setCounter(counter + 1)

  /*
  If we define changing term in this way, then React will think that it is a bunch of updates(as Fibre algorithm optimizingly makes updates waiting to make final update without doing multiple updates) and at the time of doing the updates, it will notice that all the changes are same and thus it will execute only one(for improving optimization).

  If we are really in such a situation where we need to make updates like this, we have to follow the way below.
  */

  setCounter((prevCounter) => prevCounter + 1)
  setCounter((prevCounter) => prevCounter + 1)
  setCounter((prevCounter) => prevCounter + 1)

  /*
  setCounter() method expects a callback that receives the current state of the variable before updating as argument.
  */
}