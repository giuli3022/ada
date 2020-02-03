import React, {useState} from "react";


const Input = () => {
    const [counter, setCounter] = useState("");
    const printText = event => {
        const text = event.target.value;
        setCounter(text);
    }

    const [color, setColor] = useState("#ffffff");
    const changeColor = event => {
        setColor(event.target.value);
    }
return (
    <div>
        <input onChange={printText} id="text" placeholder="Escribe aquí tu texto"></input>
        <input onChange={changeColor} id="color" placeholder="Escribe aquí tu color en hexadecimal"></input>

        <div id="midiv" style={{backgroundColor:color}}>
            {counter}
        </div>
    </div>
)
}

export default Input;
