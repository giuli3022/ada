import React, { useState, useEffect } from "react";
import Axios from "axios";


const ListaApiFuncional = props => {
    const [data, setData] = useState([]);
    useEffect(() => {
        iDunnoKnow();
    });

    const iDunnoKnow = async () => {
        try{
            const res = await Axios.get('https://jsonplaceholder.typicode.com/users');
            setData(res.data);
        }catch(err) {
            console.log(err);
        }
    }

    return (
        <div>
        <table className={props.prop1} id="table-users" >
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Usuario</th>
                <th>Email</th>
                
            </tr>
        {data.map(item => {
            return (
                <tr> 
                    <td className="cell-users">{item.id}</td> 
                    <td className="cell-users">{item.name}</td> 
                    <td className="cell-users">{item.username}</td> 
                    <td className="cell-users">{item.email}</td> 
                </tr>
            )
        })}
        </table>
    </div>
    )
};  

export default ListaApiFuncional;

