import Tabla from './Tabla';
import { useEffect, useState } from 'react';
import './App.css';
const url1="https://api.techniknews.net/ipgeo/";



function App() {
  const [data, setData] = useState({});

  async function getData() {
    const response = await fetch(url1);
    const data = await response.json();
    setData(data);
    console.log(data);
  }

  useEffect(() => {
    if (data.status === 'success')  {
      document.querySelector('.tabla')?.classList.add('showMeBit');
    }
  },[data])

  return (
    <div className="App">
        <Tabla ip={data.ip} city={data.city} regionName={data.regionName} country={data.country} lat={data.lat} lon={data.lon}/>
      <div><button onClick={getData}>What's my IP</button></div>
    </div>
  )
}

export default App
