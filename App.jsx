import React, { useState } from 'react';

function App() {
  // Counter State
  const [count, setCount] = useState(0);

  // Calculator State
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  return (
    <div className="container">

      <h1>Counter Application</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>

      <hr />

      <h1>Simple Calculator</h1>

      <input
        type="number"
        placeholder="Enter First Number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Second Number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={() => setResult(Number(num1) + Number(num2))}>
        Addition (+)
      </button>

      <button onClick={() => setResult(Number(num1) - Number(num2))}>
        Subtraction (-)
      </button>

      <button onClick={() => setResult(Number(num1) * Number(num2))}>
        Multiplication (*)
      </button>

      <button onClick={() =>
        setResult(Number(num2) === 0 ? 'Cannot divide by zero' : Number(num1) / Number(num2))
      }>
        Division (/)
      </button>

      <h2>Result: {result}</h2>

    </div>
  );
}

export default App;