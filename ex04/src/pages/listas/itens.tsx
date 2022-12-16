import { Link } from "react-router-dom";

function Itens() {
    return(<>
        <h2>itens</h2>
        <ul>
        <li><h3><Link to="/lista">Volta</Link></h3></li>
            <li><h3><Link to="/">Index</Link></h3></li>
        </ul>
    </>)
}

export default Itens;