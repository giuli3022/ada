import React, { useState } from 'react';
import './App.css';
import Table from './components/Table/Table';
import productsList from './components/ProductsList/ProductsList';
import Agregar from './components/Agregar/Agregar';
import Modificar from './components/Modificar/Modificar';



function App() {
  const [products, setProducts] = useState(productsList);
  const [id, setId] = useState("");
  const [producto, setProducto] = useState("");
  const [marca, setMarca] = useState("");
  const [precio, setPrecio] = useState("");
  
    /* Func Agregar Producto */
  const agregarProducto = () => {
    const clon = [...products];
    clon.push({
      id,
      producto,
      marca,
      precio
    })
    setProducts(clon);
  }

  const [idMod, setIdMod] = useState("");
  const [productoMod, setProductoMod] = useState("");
  const [marcaMod, setMarcaMod] = useState("");
  const [precioMod, setPrecioMod] = useState("");

  /* Func Agregar Producto */
  const modificarProducto = () => {
    let data = {
      id: idMod,
      producto: productoMod,
      marca: marcaMod,
      precio: precioMod
    }

    let clon = [...products];

    
    for (let i = 0; i < clon.length; i++) {
      if (clon[i].id == idMod) {
        clon[i] = data;
      }
    }
    setProducts(clon) 

  }
    /* Func eliminar Producto 
    const eliminarProducto = () => {
      let clon = [...products];

      const found = products.find(product => clon[i].id == idMod)
      clon.splice(found); 
    }
    setProducts(clon)
  */
 

  return (
    <div>
      <div id="boxes">
        <Agregar
          setId={setId}
          setProducto={setProducto}
          setMarca={setMarca}
          setPrecio={setPrecio}
          agregarProducto={agregarProducto}
        ></Agregar>
        <Modificar
          idMod={idMod}
          setIdMod={setIdMod}
          productoMod={productoMod}
          setProductoMod={setProductoMod}
          marcaMod={marcaMod}
          setMarcaMod={setMarcaMod}
          precioMod={precioMod}
          setPrecioMod={setPrecioMod}
          modificarProducto={modificarProducto}
        ></Modificar>
      </div>
      <div id="table-box">
        <Table data={products}></Table>
      </div>
    </div>
  );
}

export default App;
