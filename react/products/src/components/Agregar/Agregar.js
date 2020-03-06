import React from 'react';
import productsList from '../ProductsList/ProductsList';
import "./Agregar.scss";


const handleOnSubmit = event => {
    alert('Submiteado');
    event.preventDefault();
};

const Agregar = ({ setId, setProducto, setMarca, setPrecio, agregarProducto }) => {

    return (
        <div id="agregar-box">

            <h2 id="agregar-title">Agregar producto</h2>
            
            <form onSubmit={handleOnSubmit}>

                <input className="agregar-input"
                    onChange={e => setId(e.target.value)}
                    type="text"
                    placeholder="ID" />
                <input className="agregar-input"
                    onChange={e => setProducto(e.target.value)}
                    type="text"
                    placeholder="Producto" />
                <input className="agregar-input"
                    onChange={e => setMarca(e.target.value)}
                    type="text"
                    placeholder="Marca" />
                <input className="agregar-input"
                    onChange={e => setPrecio(e.target.value)}
                    type="text"
                    placeholder="Precio" />

                <button className="agregar-boton" type="button" onClick={agregarProducto}>Agregar</button>

            </form>
        </div>
    )
}
export default Agregar;
