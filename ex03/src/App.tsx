import { useContext, useState } from 'react';
import './App.css'
import { AuthContextData } from './providers/AuthContext';

function App() {
  const {isAuthenticated, setIsAuthenticated, user, setUser} = useContext(AuthContextData);
  return (
    <div className="App">
      {isAuthenticated ? (<><h2>{user} entrou!</h2><h2>Tá logado, mano!</h2><button onClick={() => {setIsAuthenticated(false), setUser("Diogo")}}>logout</button></>) : (<><h2>{user} saiu!</h2><h2>Num tá logado, mano!</h2><button onClick={() => {setIsAuthenticated(true), setUser("Diogo")}}>login</button></>)}
    </div>
  )
}

export default App
