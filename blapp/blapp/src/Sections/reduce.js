/*

import React, { useState, useReducer } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';


const reducer = (state, action) => {
  switch (action.type) {
    case "printName":
      return { ...state, name: action.payload };
    case "printUser":
      return { ...state, user: action.payload };
    case "printEmail":
      return { ...state, email: action.payload };
    default:
      return state;
  }
}


const App = () => {
  const [name, setName] = useState();
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [state, dispatch] = useReducer(reducer, { name: "", user: "", email: "" });
  const printName = () => dispatch({ type: "printName", payload: name });
  const printUser = () => dispatch({ type: "printUser", payload: user });
  const printEmail = () => dispatch({ type: "printEmail", payload: email });

  return (
    <div>

      <input type="text" placeholder="Nombre" onChange={e => setName(e.target.value)} />
      <button onClick={printName}>Guardar</button>

      <input type="text" placeholder="Usuario" onChange={e => setUser(e.target.value)} />
      <button onClick={printUser}>Guardar</button>

      <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <button onClick={printEmail}>Guardar</button>

      <article>
        <span>Nombre: {state.name}</span>
        <span>Usuario: {state.user}</span>
        <span>Email: {state.email}</span>
      </article>
    </div>
  )
}

export default App;




tres componentes
    un input en un componente hijo de App
    un componente hijo de App que es un objeto contenedor
            dentro otro hijo que es un span

crear un contexto que se llame input context que va a tener dos valores: value, setValue
desde el componente que tiene el input tiene que cambiar el value que llega por el input context
*/