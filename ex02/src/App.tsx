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
      <div className='tabla'><table className='data'>
        <tr>
          <th>ip</th>
          <th>city</th>
          <th>region</th>
          <th>country</th>
          <th>latitude</th>
          <th>longitude</th>
        </tr>
        <tr>
          <td>{data.ip}</td>
          <td>{data.city}</td>
          <td>{data.regionName}</td>
          <td>{data.country}</td>
          <td>{data.lat}</td>
          <td>{data.lon}</td>
        </tr>
        </table></div>
      <div><button onClick={getData}>What's my IP</button></div>
    </div>
  )
}

export default App
