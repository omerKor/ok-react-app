import React from "react";
import Counter from './components/Counter'
import Info from './components/Info'
import InputExample from './components/InputExample'

function App() {
  return (
    <div className="App">
      <Info/>
      <hr />
      <Counter/>
      <hr />
      <InputExample/>
    </div>
  );

}

export default App;
