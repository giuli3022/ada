import React, {useState} from "react";

const Sumador = () => {
    const [counter, setCounter] = useState(0);
        const addOne = event => {
            setCounter(counter + 1);
        }
    return (
        <div>
            <span id="result">You clicked {counter} times.</span>
            <button onClick={addOne} id="button">Click!</button>
        </div>
    )
}

export default Sumador;
