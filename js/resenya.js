// Lista de reseñas
let comentario;

let Capturar = function(){
    let lstNumero = document.getElementsByClassName("form-control"),
        comentario = [];         
    for (var i = 0; i < lstNumero.length; i++) {    
        comentario[i] = lstNumero[i].value;
    }
        mostrar(comentario);    
        document.getElementById("popup").classList.remove("collapse")
    }

let mostrar = function(comentario){
    document.getElementById("listado").innerHTML += '<li class="list-group-item d-flex justify-content-between align-items-start" id="'+comentario[0]+'">    <div class="ms-2 me-auto">      <div class="fw-bold">'
    +comentario[0]+'</div>     '
    +comentario[1]+'    </div>    <span class="badge bg-primary rounded-pill">'
    +comentario[2]+'</span>  </li>'
};

let borrar = function(){
    document.getElementById(document.getElementsByClassName("form-control")[0].value).outerHTML=""
};
let cerraralert = function(){
    document.getElementById("popup").classList.add("collapse")
}

/////////////

class Resenya {
    constructor(autor, comentario, nota) {
        this.autor = autor;
        this.comentario = comentario;
        this.nota = nota;
    }
}

let r1 = new Resenya("Lionel", "cuper chachi", 10);