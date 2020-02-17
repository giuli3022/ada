import React from "react";
import Axios from "axios";
import "../ListaUsers/ListaUsers.css";


export default class ListaApi extends React.Component {
    state = {
        data: []
    }
    componentDidMount = async () => {
        try {
            const response = await Axios.get("https://jsonplaceholder.typicode.com/users");
            this.setState({ data: response.data });
        } catch (err) {
            console.log(err);
        }
    }
    render() {
        return (
            <div className={this.props.prop1}>
                <table id="table-users">
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Usuario</th>
                        <th>Email</th>
                        
                    </tr>
                {this.state.data.map(item => {
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

        );
    }
}

/*
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
*/