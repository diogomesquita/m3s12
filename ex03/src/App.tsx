import { useContext, useState } from 'react';
import './App.css'
import { AuthContextData } from './providers/AuthContext';

function App() {
  const {isAuthenticated, setIsAuthenticated, user, setUser} = useContext(AuthContextData);
  return (
    <div className="App">
      {isAuthenticated ? (<>

      <h2>{user} Tá logado, mano!</h2>
      <button onClick={() => {setIsAuthenticated(false), setUser("")}}>logout</button>
      </>) : (<>
      <h2>{user} Num tá logado, mano!</h2>
      <input type="text" onChange={(e)=> {setUser(e.target.value)}}/>
      <button onClick={() => {setIsAuthenticated(true), setUser(user)}}>login</button></>)}
    </div>
  )
}

export default App
