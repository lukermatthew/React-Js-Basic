import React, { useState } from "react";
import "./App.css";
import Bottle from "./components/BottleComponent";

const App = () => {
  const [water, setWater] = useState(0);

  const increase = () => (water == 150 ? setWater(150) : setWater(water + 50));

  const decrease = () => (water == 0 ? setWater(0) : setWater(water - 50));

  const reset = () => {
    setWater(0);
  };

  return (
    <div className="App">
      <Bottle water={water} />

      <div>
        <button type="button" className="btn" onClick={increase}>
          ⚠️ INCREASE DOSAGE...
        </button>
      </div>
      <div>
        <button type="button" className="btn" onClick={decrease}>
          ➖ DESCREASE DOSAGE
        </button>
      </div>
      <div>
        <button type="button" className="btn" onClick={reset}>
          💡 RESET DOSAGE..........
        </button>
      </div>
    </div>
  );
};

export default App;
