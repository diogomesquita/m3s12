import './App.css'
import { useState } from 'react';

function App() {
  let h = 0, m = 0, s = 0 /*, ms=0*/;
  let hora:String = ("00" + h).slice(-2);
  let minuto:String = ("00" + m).slice(-2)
  let segundo:String = ("00" + s).slice(-2);
  // let milisegundo:String = ("0000" + ms).slice(-4)

  const [count, setCount] = useState(0);
  const [interv, setInterv] = useState(0);

  const startChrono = () => {
    setInterv(setInterval(() => {
      s++;
      setCount(count + s)
    }, 1000));
  }

  function lapTimeChrono() {
    clearInterval(interv);
  }

  function stopTimeChrono() {
    clearInterval(interv);
    setCount(0);
  }
  
  return (
    <div className="App">
      <div className='table'>
      <table>{count}</table>
      </div>

      <div className='buttons'>
      <button onClick={startChrono}>Start</button>
        <button onClick={lapTimeChrono}>Pause</button>
        <button onClick={stopTimeChrono}>Stop</button>
      </div>
        
    </div>
  )
}

export default App
