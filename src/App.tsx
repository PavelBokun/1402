import { useState } from "react";

import "./App.css";
import PulsatingImage from "./Heart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <img
          src="https://ru-fun.ru/uploads/images/073b4d389f8fb408053e396e4fc5a847.jpg"
          className="image"
          alt="React logo"
          width={300}
        /> */}
        <PulsatingImage />
      </div>
      <h1 className="names">Паша + Оля</h1>
      <div className="card">
        <h2 className="element">НАВСЕГДА</h2>
        <p  className="darlin">Я тебя ЛЮБЛЮ моя дорогая!</p>

        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        
      </div>
      
      
    </>
  );
}

export default App;
