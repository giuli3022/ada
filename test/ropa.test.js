const Ropa = require("./ropa");



test ("comprobar si camisa fue añadida", () => { 
    const camisa = new Ropa ("camisa", "manga larga", "m", "verde");
    expect(camisa.nombre).toStrictEqual ("camisa")
});

test ("comprobar si short fue añadido", () => {
    const short = new Ropa ("short", "corto", "xs", "naranja");
    expect(short.nombre).toStrictEqual ("short")
});

test ("probar abotonar", () => {
    const vestido = new Ropa ("vestido", "corto", "xl", "gris");
    expect(()=> {vestido.abotonar()}).toThrow ("esta prenda no puede ser abotonada");
});

/*
test ("probar mi talle correcto", () => {
    const pantalón = new Ropa("pantalón", "suelto", "s", "negro");
    expect(pantalón.probar).toStrictEqual ("este es tu talle");
})


test ("probar mi talle incorrecto", () => {
const vestido = new Ropa("vestido", "corto", "xl", "gris");
*/