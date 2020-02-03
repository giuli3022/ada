/**********************************************
 * Hacer un programa que nos permita 
 * cargar/modificar/borrar
 * productos (deberían tener "id", como identificador 
 * único de número, por ej: 1, 2, 3.; título, descripción
 * de producto y precio (float)).
 * 
 * Además de esto vamos a necesitar un carrito de compras
 * que nos permita cargar/borrar productos de 
 * nuestro carrito, sumar el precio total de los elementos
 * de nuestro carrito. 
 */

/*cargar stock*/

let misProductos = [];

beforeEach(() => {
    misProductos = [];
});

const producto = (titulo, id, descripción, precio) => {
    misProductos.push({
        titulo: titulo,
        id: id,
        descripción: descripción,
        precio: parseFloat(precio),
    })
};


test("chequear que esté el producto cargado completamente", () => {
    producto("cámara", "100", "cámara canon", 1300.99)
    expect(misProductos[0]).toStrictEqual({
        titulo: "cámara",
        id: "100",
        descripción: "cámara canon",
        precio: 1300.99
    })
});


/*buscar producto*/

const buscador = (producto) => {
    let productoError = -1
    for (let i = 0; i < misProductos.length; i++) {
        if (misProductos[i].id == producto) {
            return i;
        }
    }
    return productoError;
};

const buscarProducto = (producto) => {
    let i = buscador(producto)
    if (i > -1) {
        return misProductos[i];
    }
    return "Producto no encontrado";
}


test("cargar primer producto", () => {
    producto("televisor", "101", "televisor sony", 6000.30);
    expect(buscarProducto("101")).toStrictEqual({
        titulo: "televisor",
        id: "101",
        descripción: "televisor sony",
        precio: 6000.30
    })
});


/*modificar producto*/


/* keys que explicó fede
const productos = {
    lista: [],
    agregar: function (id, titulo, desc, precio) {
        this.lista.push({
            //["titulo", "descripcion", "precio"]
            let misKeys = Object.keys(data.producto);
            for(let key of misKeys) {
                producto[key] = dataProducto[key];
            }
        })
    }
}
*
const modificarProducto = (id, nuevotitulo, nuevadescripción, nuevoprecio) => {
    let buscador = misProductos.map((producto) => {
        if (id == producto.id) {
            producto.titulo = nuevotitulo,
                producto.descripción = nuevadescripción,
                producto.precio = nuevoprecio
        }
        return producto;
    });

}

test("modificar el producto a través del id", () => {
    producto("mesa", "102", "mesa redonda", 5999.12);
    modificarProducto("102", "mesada", "mesada chica", 3500.50);
    expect(misProductos[0]).toStrictEqual({
        titulo: "mesada",
        id: "102",
        descripción: "mesada chica",
        precio: 3500.50
    })
});


/*borrar producto*

const eliminarProducto = (id) => {
    let index = misProductos.findIndex((todo) => {
        return todo.id == id;
    });
    if (index == -1) {
        throw "no existe este producto.";
    }
    misProductos.splice(index, 1)
};

test("eliminar producto a través de id", () => {
    producto("heladera", "103", "heladera phillips", 26549.36);
    producto("sillón", "104", "sillón azul", 1234.56);
    eliminarProducto("103");
    expect(misProductos).toHaveLength(1);
    expect(misProductos[0].id).toBe("104");
});

test("tirar error a través del throw", () => {
    expect(() => {
        misProductos.borrar(1);
    }).toThrow("no existe este producto.")
});

/*Carrito de compras*/




/*CORRECCIONES EN CLASE

const productos = {
    lista: [],
    agregar: function(id, titulo, desc, precio) {
        this.lista.push({
            id,
            titulo,
            descripcion: desc,
            precio
        })
    },
    modificar: function(id, dataProducto) {
        for(let producto of this.lista) {
            if(producto.id == id){
                // ["titulo", "precio"]
                let misKeys = Object.keys(dataProducto);
                for(let key of misKeys) {
                    producto[key] = dataProducto[key];
                }
            }
        }
    },
    borrar: function (id) {
        const index = this.lista.findIndex(producto => {
            return producto.id == id;
        });
        if(index == -1) {
            throw "Error: El id buscado no existe";
        }
        this.lista.splice(index, 1);
    }
};

const carrito = {
    lista: [],
    agregar: function(id, cantidad) {
        const producto = productos.lista.find((producto)=>{
            return producto.id == id;
        });
        producto.cantidad = cantidad;
        this.lista.push(producto);
    },
    borrar: function(id) {
        let index = this.lista.findIndex((producto) => {
            return producto.id == id;
        });
        if (index == -1) {
            throw "Error: Producto no existe en carrito";
        }
        this.lista.splice(index, 1);
    },
    sumarPrecio: function() {
        let total = 0;
        for(let producto of this.lista) {
            total += parseFloat(producto.precio * producto.cantidad);
        }
        return total;
    }
};

module.exports = {
    productos,
    carrito
};

///////////////*tests///////////////////

const shopping = require('./productos'),
    productos = shopping.productos,
    carrito = shopping.carrito;
beforeEach(()=>{
    productos.lista = [];
    carrito.lista = [];
});

test("Agregar producto a lista de productos", () =>{
    productos.agregar(1, "mi titulo", "mi descripcion", 12.33);
    expect(productos.lista[0]).toStrictEqual({
        id: 1,
        titulo: "mi titulo",
        descripcion: "mi descripcion",
        precio: 12.33
    })
});

test("Modificar producto en lista", () =>{
    productos.agregar(1, "mi titulo", "mi descripcion", 12.33);
    productos.modificar(1, { titulo: "mi nuevo titulo", precio: 33.12 });
    expect(productos.lista[0]).toStrictEqual({
        id: 1,
        titulo: "mi nuevo titulo",
        descripcion: "mi descripcion",
        precio: 33.12
    });
});

test("Borra producto de lista por id", () =>{
    productos.agregar(1, "mi titulo", "mi descripcion", 12.33);
    expect(productos.lista.length).toBe(1);
    productos.borrar(1);
    expect(productos.lista.length).toBe(0);
});

test("Tira error cuando no existe id para borrar", () =>{
    expect(() => {
        productos.borrar(1);
    }).toThrow("Error: El id buscado no existe");
});


////////////////////////////////////////////////////////////////
test("Agrego producto al carrito", () =>{
    productos.agregar(1, "titulo", "desc", 12.33);
    carrito.agregar(1, 3);
    expect(carrito.lista[0]).toStrictEqual({
        id: 1,
        titulo: "titulo",
        descripcion: "desc",
        precio: 12.33,
        cantidad: 3
    });
});

test("Borro producto del carrito", () =>{
    productos.agregar(1, "titulo", "desc", 12.33);
    carrito.agregar(1, 3);
    expect(carrito.lista.length).toBe(1);
    carrito.borrar(1);
    expect(carrito.lista.length).toBe(0);
});

test("Tira error cuando producto no existe en carrito", () =>{
    expect(() => {
        carrito.borrar(1);
    }).toThrow("Error: Producto no existe en carrito");
});

test("Suma los precios de los productos", () => {
    productos.agregar(1, "titulo", "desc", 10.50);
    productos.agregar(2, "titulo", "desc", 20.50);
    productos.agregar(3, "titulo", "desc", 30.00);
    productos.agregar(4, "titulo", "desc", 40.00);
    carrito.agregar(1, 2);
    carrito.agregar(2, 2);
    carrito.agregar(3, 1);
    carrito.agregar(4, 1);
    const total = carrito.sumarPrecio();
    expect(total).toBe(132.00);
});

*/