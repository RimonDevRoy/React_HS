import React, { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {

  let [count, setCount] = useState(10)
  let countIn = count

  function countIncre() {
    let rand = Math.floor((Math.random() * 10)) + 1
    console.log(rand)
    setCount(count + rand)
  }

  function countDecre() {
    let rand = Math.floor((Math.random() * 10)) + 1
    if ((count - rand) < 0) {
      console.log(rand)
      setCount(0)
      } else {
      console.log(rand)
      setCount(count - rand)
    }
  }

  return (
    <>
    Initial number of laddoos: {countIn}
     <h1>We have {count} laddoos</h1>
     <button onClick={countIncre} type="button">Add</button>
     Now we have {count}
     <button onClick={countDecre} type="button">Remove</button>
     Wow now we have {count}
    </>
  )
}

export default App
