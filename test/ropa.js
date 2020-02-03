/**
 * Crear una clase Ropa, con propiedades
 * que me permitan definir sus 
 * características básicas (nombre,
 * tipo, medidas, y pensar otras), y me permita 
 * hacer metodos para "ponerme" la ropa.
 * De esta forma, yo deberia poder
 * tener, por ejemplo, un metodo
 * "calzar" que no funcione si 
 * es una pollera, pero si 
 * funcione si es una zapatilla.
 * 
 * Crear varios tipos distintos de ropa.
 */


class Ropa {
    constructor(nombre, tipo, talle, color) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.talle = talle;
        this.color = color;
    }
    abotonar() {
        if (this.nombre == "camisa") {
            return "la camisa fue abotonada";
        }
        throw "esta prenda no puede ser abotonada";
    }
    probar() {
        if ((this.talle = "xs") || (this.talle = "s")) {
            return "este es tu talle";
        }
        throw "esta prenda no te queda";
    }
}



const camisa = new Ropa("camisa", "manga larga", "m", "verde");

const short = new Ropa("short", "corto", "xs", "naranja");

const pantalón = new Ropa("pantalón", "suelto", "s", "negro");

const vestido = new Ropa("vestido", "corto", "xl", "gris");

const remera = new Ropa("remera", "manga corta", "l", "rosa");


module.exports = Ropa