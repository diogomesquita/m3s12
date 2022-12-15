type dataProps = {
  status: string;
  ip: string;
  city: string;
  regionName: string;
  country: string;
  lat: string;
  lon: string;
}

function Tabla({ip, city, regionName, country, lat, lon}: dataProps) {
    return(
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
          <td>{ip}</td>
          <td>{city}</td>
          <td>{regionName}</td>
          <td>{country}</td>
          <td>{lat}</td>
          <td>{lon}</td>
        </tr>
        </table>
        </div>
    )
}

export default Tabla;