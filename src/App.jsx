import { useState } from 'react';
import './App.css'

function App() {

 let [counter,setCounter] = useState(0);
 
  const incrementCounter = () => {   
    counter = counter + 1;
    setCounter(counter);
    
  }

  const decrementCounter = () => {
    if(counter === 0){
      return 0;
    }
    counter = counter - 1;
    setCounter(counter);
  }

  return (
    <>
      <div>
        <h1>Counter App</h1>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        <p>{counter}</p>
      </div>
    </>
      
  )
}

export default App
