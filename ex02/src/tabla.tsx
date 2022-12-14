function Tabla(props) {
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
          <td>{props.ip}</td>
          <td>{props.city}</td>
          <td>{props.regionName}</td>
          <td>{props.country}</td>
          <td>{props.lat}</td>
          <td>{props.lon}</td>
        </tr>
        </table>
        </div>
    )
}

export default Tabla;