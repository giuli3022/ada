
//It's so fetch

let todos = [];
let todo;
let url = "https://jsonplaceholder.typicode.com/todos";



//Agregar to do
 
const agregarTodo = async (title, userId, completed) => {
    let data = {
        title,
        userId,
        completed
    }

    try {
        const res = await axios.post(url, data)
        todos.push(res.data);
    }
    catch (err) {
        console.log(err);
    }
}



//get to do

const obtenerUno = async (id) => {
    try {
        const res = await axios.get(`${url}/${id}`);
        todo = res.data;
    } catch (err) {
        console.log(err);
    }
}

//get todos

const obtenerTodos = async () => {
    try {
        const res = await axios.get(`${url}`);
        todos = res.data;
        armarHtml();
    } catch (err) {
        console.log(err);
    }
}


//modificar

const modificar = async (id, title, userId, completed) => {
    try {
        let data = {
            id,
            title,
            userId,
            completed
        }
        const res = await axios.put(`${url}/${id}`, data);
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id == id) {
                todos[i] = res.data;
            }
            armarHtml();
        }
    } catch (err) {
        console.log(err)
    }
}

//eliminar

const eliminarTodo = async id => {
    try {
        const data = await axios.delete(`${url}/${id}`);
        const index = todos.findIndex(todo => {
            return todo.id == id;
        })
        todos.splice(index, 1);
    } catch (err) {
        console.log(err);
    }
}


//Eventos

const armarHtml = () => {
    const ul = document.querySelector("#todo-list");
    ul.innerHTML = "";
    for (let todo of todos) {
        const li = document.createElement("li");
        const id = document.createElement("span");
        const title = document.createElement("span");
        const user = document.createElement("span");
        const completed = document.createElement("span");
        const eliminar = document.createElement("button");
        eliminar.innerText = "Eliminar";

        li.setAttribute("class", "todo-item");
        id.setAttribute("class", "todo-id");
        title.setAttribute("class", "todo-title");
        user.setAttribute("class", "todo-user");
        completed.setAttribute("class", "todo.completed");

        const titleText = document.createTextNode(todo.title);
        title.appendChild(titleText);

        const idText = document.createTextNode(todo.id);
        id.appendChild(idText);

        const userText = document.createTextNode(todo.user);
        user.appendChild(userText);

        completed.className = "todo-completed";
        const completedText = document.createTextNode(
            todo.completed ? "Completado" : "Incompleto");
        completed.appendChild(completedText);

        eliminar.className = "todo-delete";
        eliminar.addEventListener("click", () => {
            eliminarTodo(todo.id).then(armarHtml);
        })

        id.innerHTML = todo.id;
        title.innerHTML = todo.title;
        user.innerHTML = todo.userId;       //sin esto user era undefined pero el resto no ¿Por qué?


        li.appendChild(id);
        li.appendChild(title);
        li.appendChild(user);
        li.appendChild(completed);
        li.appendChild(eliminar);
        ul.appendChild(li);

    }
}

obtenerTodos();


///agregar tarea

/*const agregarTodo = () => {
    const todos = document.querySelector("#todo-list");
    let todo = document.createElement("li");
    todo.className = "todo-item";
    todos.appendChild(todo);

    let id = document.createElement("span");
    let idimput = document.querySelector("#todo-id-create").value;
    id.innerHTML = idimput;
    todo.appendChild(id);

    let title = document.createElement("span");
    let input = document.querySelector("#todo-title-create").value;
    title.className = "todo-title";
    title.innerHTML = input;
    todo.appendChild(title);

    let user = document.createElement("span");
    let inputuser = document.querySelector("#todo-user-create").value;
    user.innerHTML = inputuser;
    user.className = "todo-user";
    todo.appendChild(user);

    //falta el complete

    let boton = document.createElement("button");
    boton.innerHTML = "Eliminar";
    boton.className = "eliminar-boton";
    boton.addEventListener("click", () => {
        boton.parentElement.remove();
    })
    todo.appendChild(boton);
}

agregar = document.querySelector("#todo-create");
agregar.addEventListener("click", agregarTodo);
*/


//agregar tarea

const createbutton = document.querySelector("#todo-create");

createbutton.addEventListener("click", async () => {
    const title = document.querySelector("#todo-title-create").value;
    const user = document.querySelector("#todo-user-create").value;
    const check = document.querySelector("#todo-completed").checked;
    await agregarTodo(title, user, check);             //User figura undefined y el id se repite
    armarHtml();
})


//modificar tarea

let botonModificar = document.querySelector("#todo-update");
botonModificar.addEventListener("click", () => {
    let idvalue = document.querySelector("#todo-id-update").value;
    let titlevalue = document.querySelector("#todo-title-update").value;
    let uservalue = document.querySelector("#todo-user-update").value;
    const check = document.querySelector("#todo-completed-update").checked;
    modificar(idvalue, titlevalue, uservalue, check);
});


/* Tengo que:
    >Hacer el booleano de completado en agregar
    >Agregar los últimos estilos
    >En agregar el User figura undefined y el id se repite
*/










/*
Primer fetch:

const postear = (userId, title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
        "userId": userId,
        "title": title,
        "completed": false
    }).then(res => { res = todos.push(res) })
        .catch(err => { throw err });
};


const obtenerUno = id => {
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => {
            todo = res.data;
        })
};

const obtenerTodos = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res => {
            todos = res.data;
            armarHtml();
        })
        .catch(err => console.log(err));
};


const modificar = (id, title, userId, completed) => {
    let data = {
        id,
        title,
        userId,
        completed
    }
    axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, data)
        .then(res => {
            for (let i = 0; i < todos.length; i++) {
                if (todos[i].id == id) {
                    todos[i] = res.data;
                }
            }
            armarHtml();
        })
        .catch(err => { throw err; });
}


const eliminarTodo = id => {
    axios.delete("https://jsonplaceholder.typicode.com/todos${id}")
        .then(res => {
            const index = lista.findIndex(todo => {
                return todo.id == id;
            })
            lista.splice(index, 1);
        })
        .catch(err => { throw err; });
}
*/
