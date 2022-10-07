import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const sum = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <h1>Use State</h1>

      <div className="count">
        {count}
        <button onClick={sum}>Click Me</button>
      </div>
    </div>
  );
}

export default App;
