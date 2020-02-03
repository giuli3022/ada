/*
const --> no lo puedo modificar salvo que modifique internamente un array o un objeto.
          Usado para cualquier cosa constante. Por ej.: Funciones.
let --> lo puedo modificar.

Scope:  Es la porción de vida de una declaración. El scope nos definirá el acceso que tendremos a nuestras
        declaraciones.

Funciones:
mis funciones existen en tiempo de compilación.

-function funcionDeclarada () {}
    Tiene scope propio.

-const funcionVariable = function () {}
    Tiene scope propio.    

-const funcionArrow = () => {}
    No tienen scope propio.

    Objetos:
    Puede tener propiedades.

    const miObjeto = {
        id: 1,
        metodo: function () {
            const pepe;
            this.id
            this.pepe --> ERROR
        },
        metodoArrow: () => {
            this.id --> ERROR
            miObjeto.id --> ok
        }
    };


    Clases:

    class MiClase {
        constructor() {
            this.id = 1;
            this.nombre = "test";
        }
    miFuncion (nuevoId, nuevoNombre = "nuevo nombre") {
        this.id = nuevoId;
        this.nombre = nuevoNombre;
        }
    }

    MiClase.id; --> ERROR
    const miObjeto = new MiClase();
    miObjeto.id --> ok
    miObjeto.miFuncion (2, "nuevo nombrecito");
    miObjeto.miFuncion (3);
*/


