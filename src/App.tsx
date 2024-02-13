import { useState } from "react";
import "./App.css";
import PulsatingImage from "./Heart";
import { New } from "./New";

function App() {
  const [show, setShow] = useState<boolean>(false);
  const showFoto = () => {
    setShow(!show);

    // alert("НАВСЕГДА ЖМИ ➡")
  };
  return (
    <>
      {show && <div><New /></div>}
      <div>
        <PulsatingImage />
      </div>
      <h1 className="names">Паша + Оля</h1>
      <div className="card">
        <h2 className="element" onClick={showFoto}>
          {" "}
          ЖМИ ➡ НАВСЕГДА
        </h2>
        <p className="darlin">Я ЛЮБЛЮ ТЕБЯ МОЯ ДОРОГАЯ !</p>

        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      </div>
    </>
  );
}

export default App;
