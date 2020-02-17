import React, { useState } from "react";
import "./login.css";

const Login = () => {
    const userInfo = {
        Usuario: "asd",
        Contraseña: "123",
    }

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [isLogged, setIsLogged] = useState(false);

    const logUser = event => {
        const inputUser = event.target.value;
        setUser(inputUser);
    }

    const logPassword = event => {
        const inputPassword = event.target.value;
        setPassword(inputPassword);
        const validarPassword = () => {
            if (inputPassword.length <= 8) {
                alert("La contraseña tiene que tener 8 caracteres o más.");
            }
        }
    }

    const log = event => {
        if ((user == userInfo.Usuario) && (password == userInfo.Contraseña)) {
            setIsLogged(true);
        }
    }
    const getLogin = () => {
        return (<div>
            <h1 id="log-title">Iniciar sesión:</h1>
            <input class="input" type="text" onBlur={logUser} placeholder="Usuario"></input>
            <input class="input" type="password" onBlur={logPassword} placeholder="Contraseña"></input>
            <button onClick={log}>Iniciar</button>
        </div>
        )

    }
    return (
        <section id="login-section">
            {isLogged ? "Sesión iniciada." :
                getLogin()
            }
            <div id="msj-log">
            </div>
        </section>
    )
}

export default Login;


/*
style={{isLogged ? diplay: "none" : "block"}
 style={{display ? isLogged: "none" : "block"}}

Formulario de login
2 const usuario y contraseña con un texto de "te logeaste correctamente"
constraseña con validación



this.state = {data:[]}
render() { .... <ul><li><li></ul>}

<ul><li x 16></li></ul>
*/