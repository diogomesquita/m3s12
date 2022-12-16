import { Link } from "react-router-dom";

function Lista() {
    return(<>
        <h2>lista</h2>
        <ul>
            <li><h3><Link to="/lista/itens">Itens</Link></h3></li>
            <li><h3><Link to="/">Index</Link></h3></li>
        </ul>
        
    </>)
}

export default Lista;