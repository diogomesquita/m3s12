import { Link } from "react-router-dom";

function Index() {
    return(<>
        <h1>index</h1>
        <nav>
            <ul>
                <li><Link to="/perfil">Perfil</Link></li>
                <li><Link to="/configs">Configurações</Link></li>
                <li><Link to="/lista">Lista</Link></li>
            </ul>
        </nav>
    </>)
}

export default Index;