import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    username: "lawra",
    age: 20
  }
  let myArr = ["kutta", 40]

  return (
    <>
      <h1 className="bg-green-900 text-black p-6 rounded-2xl mb-5">Tailwind test</h1>
      {/* <Card className="rounded-2xl mb-50" /> */}
      <Card Obj={myObj} Arr={myArr} />
    </>
  );
}

export default App;
