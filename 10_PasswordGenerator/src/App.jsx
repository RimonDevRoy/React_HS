import { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";

/*
function App() {
  const [length, setLength] = useState(8)
  const [numberExist, setNumberExist] = useState(false)
  const [characterExist, setCharacterExist] = useState(false)
  const [password, setPassword] = useState()
  // We can also set default values from values coming from API responses and other general sources instead of hardcoded values. We can also make some functionality that a new value will be generated each time the page reloads.

  function passCharPicker(numsExist, charsExist) {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let nums = "0123456789"
    let chars = "~!@#$%^&*()_+<>?" 


    let randStrPicker = Math.floor(Math.random() * str.length)
    let randNumsPicker = Math.floor(Math.random() * nums.length)
    let randCharsPicker = Math.floor(Math.random() * chars.length)

    if (numsExist) {
      // If numbers exist
      let randSelector = Math.floor(Math.random() * 2)
      let randStrPicker = Math.floor(Math.random() * str.length)
      let randNumsPicker = Math.floor(Math.random() * nums.length)

      if (randSelector === 0) {
        return str[randStrPicker]
      } else if (randSelector === 1) {
        return nums[randNumsPicker]
      }
    } else if (charsExist) {
      // If characters exist
      let randSelector = Math.floor(Math.random() * 2)
    }


    // If both exist
  }

  const passwordGenerator = useCallback(() => {
    let pass = ""
    
    for (let i = 0; i < length; i++) {
      pass += passCharPicker(numberExist, characterExist)
    }



  }, [length, numberExist, characterExist, setPassword])

  return (
    <>
     <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}
*/

function App() {
  const [length, setLength] = useState(8);
  const [numberExist, setNumberExist] = useState(false);
  const [characterExist, setCharacterExist] = useState(false);
  const [password, setPassword] = useState();

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberExist) str += "0123456789";
    if (characterExist) str += "~!@#$%^&*()_+<>?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str[char];
    }

    setPassword(pass);
  }, [length, numberExist, characterExist, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberExist, characterExist, setPassword, passwordGenerator]);
  // passwordGenerator()

  /*
  Here, if any dependencies change then the optimized function is returned to the passwordGenerator function and then the useEffect runs it. Brainstorm to find why the dependencies of useCallback and useEffect are same. The functions given in useEffect are automatically run if the page is first time loaded or refreshed.
  */

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(ev) => {
                setLength(ev.target.value);
              }}
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberExist}
              id="numberInput"
              onChange={() => {
                setNumberExist((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characterExist}
              id="characterInput"
              onChange={() => {
                setCharacterExist((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
