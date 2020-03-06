import React from 'react';
import './Table.scss';

const Table = props =>{
    return (
        <div>
            <table id="products-table">
                <tr id="products-tr">
                    <th>ID</th>
                    <th>Producto</th>
                    <th>Marca</th>
                    <th>Precio</th>
                    <th>Modificar/Eliminar</th>

                </tr>
                {props.data.map(product => {
                    return (
                        <tr className="row-products">
                            <td className="cell-products">{product.id}</td>
                            <td className="cell-products">{product.producto}</td>
                            <td className="cell-products">{product.marca}</td>
                            <td className="cell-products">{product.precio}</td>
                            <td className="cell-products">
                                <button className="eliminar-button" type="button">Eliminar</button>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default Table;
