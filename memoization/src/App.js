import './App.css';
import { useState, useMemo, useCallback } from "react";
import Header from "./components/Header";

function App() {

  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  const data = useMemo(() => {
    return calculateObject(number, number2);
  }, [number, number2]);


  const increment = useCallback(() => {
    setNumber2((prevState) => prevState + 1);
  }, []);

  return (
    <div className="App">
      <Header increment={increment} data={data} />
      <hr />
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Add Number</button>
    </div>
  );
}

function calculateObject(number, number2) {
  return { name: 'Ömer', number, number2 };
}

export default App;
