import React from "react";
import "./textarea.css";

const Contador = event => {
   
    let text = document.querySelector("textarea");
    let maxLength = 280;
    let textlength = event.target.value.length;
    let sobrantes = (maxLength - textlength);
    if (sobrantes < 10) {
        document.querySelector("#contador").innerHTML = "<span style='color: red'>" + sobrantes + "/280</span>";
    } else {
        document.querySelector("#contador").innerHTML = sobrantes + '/280';
    }
}




const Textarea = () => {
    return (
        <div>
            <textarea onChange={Contador} className="textarea">
            </textarea>
            <span id="contador"></span>
        </div>
    )
}

export default Textarea;


/*
import React, { useState } from "react";

const TextCounter = () = {
    const [counter, setCounter] = useState(0);
    return (
        <div>
        <textarea onChange={handleChange}></textarea>
        <span id="counter">Contador: {counter}</span>
    )
}

const handleChange = event => {
    setCounter(event.target.value.length);
};

otra opción:
const handleChange = event => {
    const chars = event.target.value.length;
    setCounter(max - chars);
}



*/