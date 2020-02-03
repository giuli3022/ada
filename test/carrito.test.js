const Producto = require("./carrito").Producto;
const Lista = require("./carrito").Lista;
const Perfume = require("./carrito").Perfume;
const Chocolate = require("./carrito").Chocolate;
const Auricular = require("./carrito").Auricular;


/*Agregar productos*/


test("probar agregar perfume", () => {
    const Channel = new Perfume("Channel", 1500, 5);
    lista = new Lista();
    lista.agregar(Channel);
    expect(lista.listaProductos[0] === Channel);
});


test ("probar agregar perfume", () => {
    const Ciel = new Perfume ("Ciel", 500, 10);
    lista = new Lista();
    lista.agregar(Ciel);
    expect(lista.listaProductos[0] === Ciel);
});


test ("probar agregar chocolate", () => {
    const Milka = new Chocolate ("Milka", 100, 15, 80, 50, "aireado", "mani");
    lista = new Lista();
    lista.agregar(Milka);
    expect(lista.listaProductos[0] === Milka);
});

test ("probar agregar chocolate mal", () => {
    const Arcor = new Chocolate ("Arcor", 80, 10, 50, 50, "blanco", "frutas");
    lista = new Lista();                                        /*no me tira el return */
    lista.agregar(Arcor);
    expect(lista.listaProductos[0] === Arcor);
});


test ("probar agregar auriculares", () => {
    const Sony = new Auricular ("Sony", 750, 20, true, "cerrado");
    lista = new Lista();
    lista.agregar(Sony);
    expect (lista.listaProductos[0] === Sony);
});


test ("probar agregar auriculares mal", () => {
    const Samsung = new Auricular ("Samsung", 400, 50, false, "cualquier cosa");
    lista.agregar(Samsung);
    expect (lista.listaProductos[0]) === Samsung;
});
