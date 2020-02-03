
/**
 * Transformar los distintos tipos de ropa
 * del ejercicio anterior a nuevas clases
 * que extiendan de la clase principal.
 */


class Ropa {
    constructor(boton, cierre) {
        this.boton = boton;
        this.cierre = cierre;
    }
    abotonar() {
        if (this.botón == true) {
            return "la prenda fue abotonada";
        }
        throw "esta prenda no puede ser abotonada";
    }
    cerrar() {
        if (this.cierre == true) {
            return "la prenda está cerrada";
        }
        throw "esta prenda no tiene cierre";
    }
}

class Arriba extends Ropa {
    constructor(nombre, tela, corte, boton, cierre) {
        super(boton, cierre);
        this.nombre = nombre;               /*no hay que volver a llamarlo*/
        this.tela = tela;
        this.corte = corte;
        this.boton = boton;
        this.cierre = cierre;
    }
}

class Abajo extends Ropa {
    constructor(nombre, tela, corte, boton, cierre) {
        super(boton, cierre);
        this.nombre = nombre;
        this.tela = tela;
        this.corte = corte;
        this.boton = boton;
        this.cierre = cierre;
    }
}

class Entero extends Ropa {
    constructor(nombre, tela, corte, boton, cierre) {
        super(boton, cierre);
        this.nombre = nombre;
        this.tela = tela;
        this.corte = corte;
        this.boton = boton;
        this.cierre = cierre;
    }
}

module.exports = {
    Ropa,
    Arriba,
    Abajo,
    Entero
}