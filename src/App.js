import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}
// counter component
function Counter() {
  let [count, setCount] = useState(0);
  // console.log(count);
  const increase = () => setCount(count + 1);
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  };
  const setZero = () => setCount(count = 0);
  return (
    <div style={CounterStyle}>
      <h2>Counter: {count}</h2>
      <button style={ButtonStyle} onClick={increase}>Increase</button>
      <button style={ButtonStyle} onClick={decrease}>Decrease</button>
      <button style={ButtonStyle} onClick={setZero}>Reset</button>
    </div>
  )
}
// style declaration in object for counter.
const CounterStyle = {
  backgroundColor: 'skyblue',
  border: '2px solid black',
  padding: '10px'
}

const ButtonStyle = {
  marginRight: '5px',
  backgroundColor: '#4CAF50', /* Green */
  border: 'none',
  color: 'white',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  cursor: 'pointer'
}
export default App;
