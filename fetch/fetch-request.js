/*
API --> permimte acceder a mi información procesada de alguna forma.

FETCH --> nos permite de alguna manera, acceder a esta api y obtener un resultado.

Al momento de obtener datos para trabajar con nuestro sistema, vamos a
tener que acceder a alguna fuente de informacion, o sea, un backend o una 
base de datos. Para lograr esto tenemos varias herramientas que cumplen todas
la misma funcion. Fetch. Obtener.
  
get: obtener / post: crear / put: modificar / delete: eliminar

get y delete: no tiene un body
*/


fetch(url, {        //-->la url es la acción
    method: 'POST', // *GET, POST, PUT, DELETE
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
}).then( res => {
    // parse y return response
    return JSON.parse(res);
}).catch( err =>{
    console.log(err); // Catch error como en try/catch
});


//fetch(...).then(...).catch;


fetch("https://mirecursoonline.con/bla", data)
    .then( res =>{
        //parse y return response
        console.log("chau");
        return JSON.parse(res);
    }).catch( err => {
        console.log(err);
    });
console.log("hola");
//hola
//chau


/**
Tenemos la api de Fetch, un standard que viene en todos los browsers, y como podemos
observar en el ejemplo anterior, estamos encadenando .then y .catch en nuestra ejecución
 
Esto es porque tenemos algo llamado promesas. 
Las promesas son datos que devuelve una función, en este caso "fetch". Esta promesa devuelta
no tiene ningún dato real de lo que esperamos, simplemente nos dice "te prometo que voy a
devolverte algo", y en cuanto lo hace, usando la función "then" podemos tomar esa data, que 
nos llega por parámetro, y ejecutar algo con la misma.
De la misma forma encadenamos un "catch", porque puede suceder que haya un error, y en lugar de
frenar la ejecución de nuestro programa, queremos hacer algo para que la UX sea mejor, y no 
se muestre un error por consola y nada más.

La API fetch se puede usar, pero también podemos usar librerías que nos faciliten esto.
Por ejemplo AXIOS.
*/

