import React from 'react';
import productsList from '../ProductsList/ProductsList';
import "./Modificar.scss";


const handleOnSubmit = event => {
    alert('Submiteado');
    event.preventDefault();
};

const Modificar = ({ setIdMod, setProductoMod, setMarcaMod, setPrecioMod, modificarProducto }) => {

    return (
        <div id="modificar-box">

            <h2 id="modificar-title">Modificar producto</h2>
            
            <form onSubmit={handleOnSubmit}>

                <input className="modificar-input"
                    onChange={e => setIdMod(e.target.value)}
                    type="text"
                    placeholder="ID" />
                <input className="modificar-input"
                    onChange={e => setProductoMod(e.target.value)}
                    type="text"
                    placeholder="Producto" />
                <input className="modificar-input"
                    onChange={e => setMarcaMod(e.target.value)}
                    type="text"
                    placeholder="Marca" />
                <input className="modificar-input"
                    onChange={e => setPrecioMod(e.target.value)}
                    type="text"
                    placeholder="Precio" />

                <button className="modificar-boton" type="button" onClick={modificarProducto}>Modificar</button>

            </form>
        </div>
    )
}
export default Modificar;
