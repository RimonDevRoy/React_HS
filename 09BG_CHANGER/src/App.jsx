import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("Black");

  function bgChanger(col) {
    setBgColor(col);
  }

  return (
    <div className="h-screen w-screen" style={{ backgroundColor: bgColor }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button
            // onClick={bgChanger(`red`)}
            onClick={() => bgChanger(`red`)}
            className="outline-none rounded-xl py-2 px-4"
            style={{
              border: "2px solid black",
              backgroundColor: "red",
              color: "white",
            }}
          >
            Red
          </button>
          <button
            // onClick={bgChanger(`green`)}
            onClick={() => bgChanger(`green`)}
            className="outline-none rounded-xl py-2 px-4"
            style={{
              border: "2px solid black",
              backgroundColor: "green",
              color: "white",
            }}
          >
            Green
          </button>
          <button
            // onClick={bgChanger(`yellow`)}
            onClick={() => bgChanger(`yellow`)}
            className="outline-none rounded-xl py-2 px-4"
            style={{
              border: "2px solid black",
              backgroundColor: "yellow",
              color: "white",
            }}
          >
            Yellow
          </button>
          <button
            // onClick={() => bgChanger(`blue`)}
            onClick={bgChanger(`blue`)}
            className="outline-none rounded-xl py-2 px-4"
            style={{
              border: "2px solid black",
              backgroundColor: "blue",
              color: "white",
            }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

/*
onClick expects a function, now if we pass the reference of setBgColor, we won't be able to pass any argument, because to pass arguments we need to execute the function. For this reason, we need to either wrap setBgColor into another function as we did above or we can execute setBgColor inside a callback.
*/