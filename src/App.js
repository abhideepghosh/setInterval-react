import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState(new Date().toString());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date().toString()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Time Now: {time}</h2>
    </div>
  );
}
