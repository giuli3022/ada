const Ropa = require("./ropanv").Ropa;
const Arriba = require("./ropanv").Arriba;
const Abajo = require("./ropanv").Abajo;
const Entero = require("./ropanv").Entero;


/*Agregar ropa*/


test ("comprobar si remera fue añadida",() => {
    const remera = new Arriba ("remera lisa", "algodón", "manga corta", false, false);
    expect(remera.nombre).toStrictEqual("remera lisa");
});

test ("comprobar si pollera fue añadida",() => {
    const pollera = new Abajo ("pollera tubo", "corderoy", "corta", true, false);
    expect(pollera.nombre).toStrictEqual("pollera tubo");
});

test ("comprobar si vestido fue añadido",() => {
    const vestido = new Entero ("vestido floreado", "polyester", "corto", false, true);
    expect(vestido.nombre).toStrictEqual("vestido floreado");
});


/*Comprobar función botón y cierre*/


test ("probar throw de abotonar", () => {
    const blusa = new Arriba ("blusa verde", "seda", "manga larga", false, false);
    expect(()=> {blusa.abotonar()}).toThrow ("esta prenda no puede ser abotonada");
});

test ("probar return de abotonar", () => {
    const saco = new Arriba ("saco blanco", "lana", "manga larga", true, false);
    expect(()=> {saco.abotonar()}).toBeTruthy ();
});


test ("probar throw de cerrar", () => {
    const calzas = new Abajo ("calzas deportivas", "lycra", "corta", false, false);
    expect(()=> {calzas.cerrar()}).toThrow ("esta prenda no tiene cierre");
});


test ("probar return de cerrar", () => {
    const campera = new Arriba ("campera deportiva", "lycra", "manga larga", false, true);
    expect(()=> {campera.cerrar()}).toBeTruthy ();
});


/*ver todas mis prendas (No se si funcionó)*/


test ("ver todas mis prendas", () => {
    const misPrendas = () => {
        return Ropa;
    }
});

