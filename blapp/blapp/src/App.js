import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';



const InputContext = createContext(null);

const App = () => {
  const [value, setValue] = useState();
  const changeValue = () => setValue(value);

  return (
    <InputContext value={
      {
        value,
        changeTheme
      }
    }>
      <div>
        <input type="text" onChange={e => changeValue(e.target.value)}/>
        <div className="soy-el-contenedor">
          <span>{state.value}</span>
        </div>
      </div>
    </InputContext>
  )
}

export default App;

/*


const App = () => {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => setTheme(theme === "light" ? "dark" : "light");
  return (
    <ThemeContext.Provider value={
      {
        theme,
        changeTheme
      }
    }>
      <div className={`App ${theme}`}>
        <Card
          theme={theme}
          title="Mi Card"
          headerImgUrl={cardImg}
        />
        <TextCounter></TextCounter>
      </div>
    </ThemeContext.Provider>
    );
}


tres componentes
    un input en un componente hijo de App
    un componente hijo de App que es un objeto contenedor
            dentro otro hijo que es un span

crear un contexto que se llame input context que va a tener dos valores: value, setValue
desde el componente que tiene el input tiene que cambiar el value que llega por el input context

*/