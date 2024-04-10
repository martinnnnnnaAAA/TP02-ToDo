const textoIngresado = document.getElementById("TextoIngresado");
let Lista = [
    {
        id: Date.now(),
        texto: 'Estudiar' ,
        tachado: false,
        fechayhora: new Date().toLocaleString(),
        fechayhoraT: "",
    }
];

const AgregarText = () => {
    let texto = textoIngresado.value;
    Lista.push({
        texto: texto,
        tachado: false,
        id: Date.now(),
        fechayhora: new Date().toLocaleString(),
        fechayhoraT: ""
    });
    mostrarLista();
    
}
const Tachar = (id) => {

    let objeto = Lista.find(n => n.id == id);
    if(objeto.tachado){
        objeto.tachado = false;
        objeto.fechayhoraT = "";

    }
    else{
        objeto.tachado = true;
        objeto.fechayhoraT = new Date().toLocaleString();
    }

    mostrarLista();

    
}

const CalcularRapidez = () => {
    let menorTiempo = new Date(Lista[0].fechayhoraT) - new Date(Lista[0].fechayhora);
    let rapidez;
    Lista.forEach(element => {
        rapidez = new Date(element.fechayhoraT) - new Date(element.fechayhora);
        if(menorTiempo > rapidez){
            menorTiempo = rapidez;
        }
    });
    let objeto = Lista.find(n => new Date(n.fechayhoraT) - new Date(n.fechayhora) == menorTiempo)
    document.getElementById("TextoTiempo").innerHTML = `La tarea mas rapida fue: ${objeto.texto}`;
}

const EliminarToDo = (id) =>{

    let objeto = Lista.find(n => n.id == id);
    Lista.splice(objeto,1)
    mostrarLista();

}



const mostrarLista = () => {
    document.getElementById("ToDo").innerHTML = "";
    document.getElementById("ToDo").innerHTML = Lista.map(n => {
        const className = n.tachado ? "tachado" : "";
        

        return `<li class="${className}"> <input type="checkbox" onchange="Tachar(${n.id})">${n.texto} Creacion : ${n.fechayhora} Tachado : ${n.fechayhoraT} <br> <button onclick="EliminarToDo(${n.id})"> Eliminar ToDo </button></li> `;
    }).join("");
}


mostrarLista();
 