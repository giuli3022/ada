const producto = require("./restaurant").producto;
const ProductoConsumido = require("./restaurant").ProductoConsumido;
const Mesa = require("./restaurant").Mesa;
const mesasActivas = require("./restaurant").mesasActivas;

/////PRODUCTOS/////

//Función: agregar producto

test("agregar producto", () => {
    producto.agregar(1, "café", 50);
    expect(producto.lista[0]).toStrictEqual({
        id: 1,
        nombre: "café",
        precio: 50
    });
});

test("agregar producto", () => {
    producto.agregar(2, "chocolata", 700);
    expect(producto.lista[1]).toStrictEqual({
        id: 2,
        nombre: "chocolata",
        precio: 700
    });
});

test("agregar producto", () => {
    producto.agregar(3, "té", 65);
    expect(producto.lista[2]).toStrictEqual({
        id: 3,
        nombre: "té",
        precio: 65
    });
});

test("agregar producto", () => {
    producto.agregar(4, "medialuna", 30);
    expect(producto.lista[3]).toStrictEqual({
        id: 4,
        nombre: "medialuna",
        precio: 30
    });
});

//Función: modificar producto

test("modificar producto de la lista", () => {
    producto.modificar(2, { nombre: "chocolatada", precio: 70 });
    expect(producto.lista[1]).toStrictEqual({
        id: 2,
        nombre: "chocolatada",
        precio: 70
    });
});

//Función: eliminar producto

test("eliminar producto", () => {
    producto.agregar(5, "sljflidjfk", 564);
    expect(producto.lista.length).toBe(5);
    producto.eliminar(5);
    expect(producto.lista.length).toBe(4);
});

test("tira error cuando el id es inexistente", () => {
    expect(() => {
        producto.eliminar(7);
    }).toThrow("Error: El id buscado no existe");
});


/////MESAS/////

//Función: agregar mesa

test("agregar mesa", () => {
    mesasActivas.agregarMesa(1);
    expect(mesasActivas.lista.length).toBe(1);
});

test("agregar mesa", () => {
    mesasActivas.agregarMesa(2);
    expect(mesasActivas.lista.length).toBe(2);
});

//Errores en ID

test("probar throw de ID", () => {
    expect(() => {
        mesasActivas.agregarMesa("hello")              
    }).toThrow("El ID de la mesa debe ser un número.")          
})

test("probar throw de mesa ocupada", () => {
    expect(() => {
        mesasActivas.agregarMesa(1);
    }).toThrow("mesa ocupada");
});

//Función: eliminar mesa

test("eliminar mesa", () => {
    mesasActivas.agregarMesa(3);
    expect(mesasActivas.lista.length).toBe(3);
    mesasActivas.eliminarMesa(3);
    expect(mesasActivas.lista.length).toBe(2);
});

//Función: agregar productos a mesa


test("Agregar productos a mesa", () =>{
    mesasActivas.agregarMesa(3);
    mesasActivas.agregarProductos("café", 2);
    expect(mesasActivas.lista.length).toBe(3);
    expect(mesasActivas.lista[0].cantidad).toBe(2);
});



/*
test("Agregar productos a mesa", () =>{
    mesasActivas.agregarMesa(3);
    mesasActivas.agregarProductos("café", 2);
    expect(mesasActivas.lista.length).toBe(1);
    expect(mesasActivas.lista[0].cantidad).toBe(2);
});

productoConsumido is not defined

no estoy metiendo los productos en cada mesa

test("Agregar productos a mesa", () =>{
    mesasActivas.agregarMesa(4);
    mesasActivas.agregarProductos("café", 2);
    expect(ProductoConsumido.producto).toBe(1);
    expect(ProductoConsumido.cantidad).toBe(2);
});
/*
test("Tirar error por producto inexistente", () => {
    const mesa = new Mesa ();
    expect(() => {
    mesa.agregarProductos(producto.lista[9], 4);
    }).toThrow("Producto inexistente.");
});

//Función: cerrar cuenta











































































































//Función: agregarProductos
/*
test("Agregar productos a mesa", () =>{
    const mesa = new Mesa();
    mesa.agregarProductos(producto.lista[0].nombre, 2);
    expect(mesa.lista.length).toBe(1);
    expect(mesa.lista[0].cantidad).toBe(2);
});

test("Tirar error por producto inexistente", () => {
    const mesa = new Mesa ();
    expect(() => {
    mesa.agregarProductos(producto.lista[9], 4);
    }).toThrow("Producto inexistente.");
});


//Función: eliminarProductos

test("Eliminar productos de mesa", () => {
    const mesa = new Mesa();
    mesa.agregarProductos(producto.lista[0].nombre, 2);
    expect (mesa.lista.length).toBe(1);
    mesa.eliminarProductos(1);
    expect(mesa.lista.length).toBe(0);
});


test("Tirar error por producto inexistente", () => {
    const mesa = new Mesa ();
    expect(() => {
    mesa.agregarProductos(producto.lista[6], 4);
    }).toThrow("Producto inexistente.");
});


//Función: cerrarCuenta

test("Cerrar cuenta y comprobar suma final", () => {
    const mesa = new Mesa ();
    mesa.agregarProductos(producto.lista[1].nombre, 2);
    mesa.agregarProductos(producto.lista[2].nombre, 1);
    mesa.agregarProductos(producto.lista[3].nombre, 3);
    expect(mesa.cerrarCuenta()).toBe(295);
});

test("Cerrar cuenta y comprobar suma final", () => {
    const mesa = new Mesa ();
    mesa.agregarProductos(producto.lista[0].nombre, 1);
    mesa.agregarProductos(producto.lista[3].nombre, 3);
    expect(mesa.cerrarCuenta()).toBe(140);
});*/

