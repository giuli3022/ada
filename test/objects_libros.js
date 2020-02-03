
/*************************************************
 * Crear un objeto que sea un libro, con todos 
 * sus detalles (nombre, autor, año, isbn). Ademas
 * de esto, deberá tener una lista de reviews, y cada
 * review deberá tener un formato de 
 * {nombre, review, valoracion(entre 1 y 5)}.
 * 
 * Deberemos crear una funcion para promediar esta 
 * valoracion. 
 * Tambien, tendremos que crear un getter para 
 * obtener el nombre, el autor y el isbn juntos 
 * en un formato legible (libro [por] autor - isbn).
 * Por último, tendremos que crear una funcion que nos
 * permita agregar nuevas reviews al libro.
 */

const libro = {
    nombre: "Demián",
    autor: "Hermann Hesse",
    año: "1919",
    isbn: "0000",
    get infoLibro() {
        return `${this.nombre} fue escrito por ${this.autor} en el año ${this.año}. Su isbn es ${this.isbn}`
    }
};


const reviews = {
    lista: [],
    agregar: function (nombre, review, valoracion) {
        if ((valoracion < 1) || (valoracion > 5)) {
            throw "La valoración es incorrecta.";
        }
        this.lista.push({
            nombre,
            review,
            valoracion,
        });
    },
    promediar: function () {
        let suma = this.lista.reduce(function (acumulador, siguienteValor) {
            return acumulador + siguienteValor.valoracion
        }, 0); /*valor inincial del reduce*/
        return suma / this.lista.length;
    }
}





/*reduce: concatena números o strings*/


























module.exports = {
    libro,
    reviews
}