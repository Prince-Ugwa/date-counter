import { useState } from "react";
import "./style.css";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }
  return (
    <div className="container">
      <div className="btns">
        <div className="step">
          <input
            type="range"
            min={0}
            max={10}
            value={step}
            onChange={(e) => setStep(+e.target.value)}
          />

          <span> {step}</span>
        </div>
        <div className="count">
          <button onClick={() => setCount((c) => c - step)} className="btn">
            -
          </button>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(+e.target.value)}
          />
          {/*   <span>count:{count}</span>*/}
          <button onClick={() => setCount((c) => c + step)} className="btn">
            +
          </button>
        </div>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days was `}
        </span>
        <span> {date.toDateString()} </span>
      </p>
      {/* if the count is not =0 or step is not =1
    then render reset btn else render noting(null) */}
      {count !== 0 || step !== 1 ? (
        <div>
          <button className="btn reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      ) : null}
    </div>
  );
}
