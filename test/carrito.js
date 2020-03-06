/**
 * Refactorizar la lista de productos con el 
 * carrito de compras usando clases. 
 * Vamos a tener 3 tipos de productos, 
 *  1. Perfumes
 *  2. Chocolates
 *  3. Auriculares
 * Los 3 productos van a tener distintas 
 * caracteristicas, aunque compartan marca y precio.
 * Los chocolates tienen porcentaje, leche, tipo, 
 * extras (almendras, mani, pasas). 
 * Los auriculares van a tener una variable
 * "wireless" y una "tipo" (cerrados, abiertos)
 * 
 * Voy a necesitar un metodo que me devuelva una lista
 * formateada con todos los productos y caracteristicas 
 * en un texto. Uno por linea.
 * 
 * Ademas de eso cada producto puede tener descuentos, en 
 * porcentaje.
 * 
 * Hay que refactorizar el carrito de compras, de forma
 * que tenga lo mismo que hacia antes, pero a la hora de 
 * calcular el precio, lo haga teniendo en cuenta los
 * descuentos que aplican a cada producto.
 * 
 * El carrito tiene que tener una funcion que me permita
 * listar todos los productos agregados formateados con 
 * descripcion, cantidad, y un producto por linea.
 * 
 * Por ultimo sumar una clase cupon que tiene otro descuento
 * en porcentaje. Yo puedo aplicar un solo cupon a mi carrito
 * de compras y el calculo final del precio tiene que tomar
 * en cuenta esto.
 * 
 */

class Lista {
    constructor() {
        this.listaProductos = []; 
    }
    agregar (producto) {
        this.listaProductos.push(producto);
    }
 }

class Producto {
    constructor(marca, precio, descuentos) {
        this.marca = marca;
        this.precio = precio;
        this.descuentos = descuentos;
    }
}

class Perfume extends Producto {
    constructor(marca, precio, descuentos) {
        super(marca, precio);
        this.marca = marca;
        this.precio = precio;
        this.descuento = descuento;
    }
}

class Chocolate extends Producto {
    constructor(marca, precio, descuentos, porcentaje, leche, tipo, extras=null) {
        super(marca, precio);
        let extrasPosibles = ["almendras", "mani", "pasas", "rocklets"];
        this.marca = marca;
        this.precio = precio;
        this.descuento = descuento;
        this.porcentaje = porcentaje;
        this.leche = leche;
        this.tipo = tipo;
        if (extrasPosibles.indexOf(extras)>-1) {
            this.extras = extras;
        }
        else {
            this.extras = null;
        }
    }
}

class Auricular extends Producto {
    constructor(marca, precio, descuento, wireless, tipo) {
        super(marca, precio);
        this.marca = marca;
        this.precio = precio;
        this.descuento = descuento;
        this.wireless = wireless;
        if ((tipo = "abierto") || (tipo = "cerrado")) {
            this.tipo = tipo;
        }
        else {
            return "no es un tipo de auricular";
        }
    }
}



module.exports = {
    Lista,
    Producto,
    Perfume,
    Chocolate,
    Auricular
}