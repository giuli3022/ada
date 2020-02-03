/*
productoMesa = itemCarrito
carrito      = mesa
catalogo     = carta
producto     = productos
*/


const producto = {
    lista: [],
    agregar: function (id, nombre, precio) {
        this.lista.push({
            id,
            nombre,
            precio
        })
    },
    modificar: function (id, dataProducto) {
        for (let producto of this.lista) {
            if (producto.id == id) {
                let misKeys = Object.keys(dataProducto);
                for (let key of misKeys) {
                    producto[key] = dataProducto[key];
                }
            }
        }
    },
    eliminar: function (id) {
        const index = this.lista.findIndex(producto => {
            return producto.id == id;
        });
        if (index == -1) {
            throw "Error: El id buscado no existe";
        }
        this.lista.splice(index, 1);
    }
};


class ProductoConsumido {
    constructor(producto, cantidad) {
        this.producto = producto;
        for(let item of mesasActivas.lista){
            if (producto == item) {
                this.product=item;
            }
        }
        this.cantidad = parseInt(cantidad);
    }
}


class Mesa {
    constructor(id) {
        this.lista = [];
        this.id = id;
    }
}



const mesasActivas = {
    lista: [],
    ID: function (mesa) {
        mesa.id=parseInt(mesa.id);
        if (isNaN(mesa.id)) {
            throw "El ID de la mesa debe ser un número.";
        }
    },
    chequearID: function (mesa) {
        this.ID(mesa);
        let index = this.lista.findIndex((mesaactiva) => {
            return mesaactiva.id === mesa.id});
        if (index > -1) {
            throw "mesa ocupada";
        }
    },
    agregarMesa: function (mesa) {
        let mesaNueva = new Mesa(mesa);
        this.ID(mesaNueva);
        this.chequearID(mesaNueva);
        this.lista.push(mesaNueva);
    },
    eliminarMesa: function (mesa) {
        let index = this.lista.findIndex((mesaactiva) => {
            return mesaactiva.id === mesa.id});
        this.lista.splice(index,1);
    },
/*
    agregarProductos: function (mesa, nombre, cantidad) {     
          
        let productoAgregado = new productoConsumido (nombre, cantidad);
        let nombre = productoConsumido.producto;
        let cantidad = productoConsumido.cantidad;
        this.lista.push(productoAgregado);
    },    */
    
    agregarProductos: function (mesa, nombre, cantidad) {
        try {
          // busca la mesa
          let indexMesa = this.lista.findIndex((mesaactiva) => {
            return mesaactiva.id == mesa
          });
          if (indexMesa == -1) {
              throw 'Mesa no se encontro';
        }
        
          //Busco si existe el producto en mesa
          for (let productoConsumido of this.lista[indexMesa].lista) {
              if(productoConsumido.producto == nombre) {
                  productoConsumido.cantidad += cantidad;
                  console.log('producto sumado a la cantidad')
                  return true;
              }
          }
          
          //Busco en productos mi producto para agregarlo
          let productoEncontrado = producto.lista.find(producto => {
              return producto.nombre == nombre;
          });
          
          if(typeof productoEncontrado == "undefined") {
              throw "Producto inexistente.";
          }
          
          const productoConsumido = new ProductoConsumido(productoEncontrado, cantidad);
          this.lista[indexMesa].lista.push(productoConsumido);
          console.log('producto agregado')
        }catch(e){
          console.error(e)
        }
    }, 



    
    /*
    
    
    eliminarProductos (id) {
        let index = this.lista.findIndex(ProductoConsumido => {
            return ProductoConsumido.producto.id == id;
        });
        if(index == -1) {
            throw "Producto inexistente";
        }
        this.lista.splice(index, 1);
    }
    cerrarCuenta: function () {
        let cuenta = this.lista.reduce ((acumulador, productoConsumido) => {
            let cuentaFinal = productoConsumido.producto.precio;
            return acumulador += productoConsumido.cantidad * (cuentaFinal);
        }, 0)
        return cuenta;
    }*/
}





//notas


/*
class Mesa {
    constructor(id) {
        this.lista = [];
        this.id = id;
    }
                                                ///no tengo check de ID
    agregarProductos (nombre, cantidad) {
        //Busco si existe el producto en mesa
        for(let productoConsumido of this.lista) {
            if(productoConsumido.producto.nombre == nombre) {
                productoConsumido.cantidad += cantidad;
                return true;
            }
        }
        //Busco en productos mi producto para agregarlo
        let productoEncontrado = producto.lista.find(producto => {
            return producto.nombre == nombre;
        });
        if(typeof productoEncontrado == "undefined") {
            throw "Producto inexistente.";
        }
        const productoConsumido = new ProductoConsumido(productoEncontrado, cantidad);
        this.lista.push(productoConsumido);
    }
    
    eliminarProductos (id) {
        let index = this.lista.findIndex(ProductoConsumido => {
            return ProductoConsumido.producto.id == id;
        });
        if(index == -1) {
            throw "Producto inexistente";
        }
        this.lista.splice(index, 1);
    }

    cerrarCuenta() {
        let cuenta = this.lista.reduce ((acumulador, productoConsumido) => {
            let cuentaFinal = productoConsumido.producto.precio;
            return acumulador += productoConsumido.cantidad * (cuentaFinal);
        }, 0);
        return cuenta;
    }
}*/



/*agregarProductos (nombre, cantidad) {
    let cant = parseInt(productoConsumido.cantidad);
    let index = this.productoConsumido.producto.findIndex((item)=>{      // Cannot read property 'findIndex' of undefined
        return item.productoConsumido.producto == nombre;
    });
    if (index == -1) {
        let consumision = new productoConsumido (producto, cantidad)
        this.lista.push(consumision);
    }
    else {
        this.productoConsumido[index].cantidad += cant;
    }                                                               //productoConsumido is not defined
},*/



module.exports = {
    producto,
    ProductoConsumido,
    Mesa,
    mesasActivas
}