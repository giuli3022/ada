/***************************************************
 * Desarrollar una función que reciba por parámetro
 * un día de la semana y devuelva el número que 
 * le corresponde.
 * Comenzar por los casos de test, y luego hacer 
 * la función.
 *


const semana = (día) => {
    switch (día) {
        case "lunes": 
        return 1;
        case "martes":
        return 2;
        case "miércoles":
        return 3;
        case "jueves":
        return 4;
        case "viernes":
        return 5;
        case "sabado":
        return 6;
        case "domingo":
        return 7;
        default: 
        throw "el día no existe, guache.";
    }
}


test('recibe "lunes", devuelve 1', () =>{
    expect(semana("lunes")).toBe(1); 
});
test('recibe "martes", devuelve 2',() =>{
    expect(semana("martes")).toBe(2); 
});
test('recibe "miércoles", devuelve 3',() =>{
    expect(semana("miércoles")).toBe(3); 
});
test('recibe "jueves", devuelve 4',() =>{
    expect(semana("jueves")).toBe(4); 
});
test('recibe "viernes", devuelve 5',() =>{
    expect(semana("viernes")).toBe(5); 
});
test('recibe "sábado", devuelve 6',() =>{
    expect(semana("sabado")).toBe(6); 
});
test('recibe "domingo", devuelve 7',() =>{
    expect(semana("domingo")).toBe(7); 
});
test ('le paso "demango" tira error',() => {
expect(() => {
    semana("demango");
}).toThrow("El día no existe, guache.");
});
 /**************************************************
  * Desarrollar una función que convierta
  * de minutos a segundos. Pasar minutos por parámetro
  * y devolver los segundos.
  * Comenzar por los casos de test, y luego hacer la 
  * función. Recordar tirar errores y testearlos.
  */

/********************************************************

const convertidor = (minutos) => {
    if (typeof minutos == "number") {
        return parseInt(minutos) * 60;
    }
    throw "No es un número, perro";
};
test('multiplica 60 a minutos, devuelve en segundos', () => {
    expect(convertidor("2")).toBe(120);
});
test('multiplica 60 a minutos, devuelve en segundos', () => {
    expect(convertidor(15)).toBe(900);
});

test('si ingresa una palabra, da error', () => {
    expect(convertidor("")).toThrow("No es un número, perro");
});.

li:
const convertidor = (minutos) => {
   if (isNaN(minutos)) {
       throw "error"
   }
   return parseInt(minutos) * 60;
};
test('multiplica 60 al numero de minutos, devolviendome el tiempo en segundos', () => {
   expect(convertidor("2")).toBe(120);
});
test('multiplica 60 al numero de minutos, devolviendome el tiempo en segundos', () => {
   expect(convertidor(15)).toBe(900);
});
test('si ingresa una palabra, debe dar error', () => {
   expect(() => {
       convertidor("cualquier cosa")
   }).toThrow("error");
});



/**************************************************
 * Hacer una serie de funciones para un TODO list.
 * Que me permita cargar una tarea, con un titulo, 
 * descripcion de tarea, y si fue hecha o no, con un 
 * valor default.
 * Me tiene que permitir agregar tareas,
 * editar y eliminar. Además debería poder listar
 * las tareas permitiendome filtrar por
 * si fueron resueltas o no, pero sin ser obligatorio.
 * Por cada funcion que haga, primero empiezo por 
 * el test, y luego por la funcion.
 * Observaciones: Pensar en ejercicio integrador de 
 * cargar personas.
 */

let list = [];

beforeEach(() => {
    list = [];
});

const todoList = (tituloTarea, descripcion, hecho) => {

    list.push([tituloTarea, descripcion, hecho])
}

test("Comprobar si el array está completo", () => {
    todoList("titulo", "descripcion", false)
    expect(list[0]).toStrictEqual(["titulo", "descripcion", false]);
});


/*buscar tarea*/

const buscador = (tarea) => {
    let tareaError = -1
    for (let i = 0; i < list.length; i++) {
        if (list[i][0] == tarea) {
            return i;
        }
    }
    return tareaError;
};

const buscarTarea = (tarea) => {
    let i = buscador(tarea)
    if (i > -1) {
        return list[i];
    }
    return "ERRORRRRRRR";
}


test ("tarea1", () => {
    todoList("aprender", "aprender en ada", false);
    expect(buscarTarea("aprender")).toStrictEqual(["aprender", "aprender en ada", false])
});

test ("tarea2", () => {
    todoList("bañar", "bañarse en el baño", true);
    expect(buscarTarea("boñar")).toBe("ERRORRRRRRR")
});

test ("tarea3noexiste", () => {
    expect(buscarTarea("tareanoexiste")).toBe("ERRORRRRRRR")
});


/*editar tareas*/

const editarTarea = (tituloTarea, descripcion, hecho) => {
    let buscador = list.map((tarea) => {
        if (titulo == tarea[0]) {
            tarea[0] = tituloTarea;
            tarea[1] = descripcion;
            tarea[2] = hecho;
        }
    });
    return buscador;
}

