import {Routes, Route} from "react-router-dom";
import Index from "./pages";
import Configs from "./pages/configs";
import Itens from "./pages/listas/itens";
import Lista from "./pages/listas/lista";
import Perfil from "./pages/perfil";

function Router() {
    return(
        <Routes>
            <Route path="/" element={<Index />}/>
            <Route path="/perfil" element={<Perfil />}/>
            <Route path="/configs" element={<Configs />}/>
            <Route path="/lista">
                <Route index element={<Lista />}/>
                <Route path="itens" element={<Itens />}/>
            </Route>
        </Routes>
    );
}

export default Router;