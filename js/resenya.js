// Lista de reseñas
let comentarios= [];
comentarios.push(["Marc","Me ha parecido fascinante el viaje, con la informacion que da la pagina me he aclarado a la hora de planificarlo y espero con ansias volver a repetir una experiencia como la ultima.","japon","8"]);
comentarios.push(["Paco","EL viaje no ha estado nada mal, pero al ruta no me ha acabado de gustar, te deja sin ver cosas importantes del pais y acabe sin ver lo que me apetecia.","españa","4"]);
comentarios.push(["Lionel","Me ha ayudado mucho la pagina y volveria a repetir uno de los viajes que ofrecen para probar la experiencia MALUFA en otro pais.","italia","8"]);


let Capturar = function(){
    let lstNumero = document.getElementsByClassName("form-control"),
        comentario = [];         
    for (var i = 0; i < lstNumero.length; i++) {    
        comentario[i] = lstNumero[i].value;
    }
    comentarios.push(comentario);

        mostrar(comentario);    
        document.getElementById("popup").classList.remove("collapse")
        vaciarform();
    };

let mostrar = function(comentario){
    document.getElementById("listado").innerHTML ="";
    let fondo;
    for (let i = 0; i < comentarios.length; i++) {
        switch (comentarios[i][2]) {
            case "españa": 
            fondo = "bg-secondary";
                break;
            case "italia": 
            fondo = "bg-warning";
                break;
            case "japon": 
            fondo = "bg-primary";
                break;
            case "mexico": 
            fondo = "bg-danger";
                break;
            default:
                break;
        }
    document.getElementById("listado").innerHTML += '<li class="list-group-item d-flex justify-content-between align-items-start '+ fondo +'" id="'+comentarios[i][0]+'">    <div class="ms-2 me-auto">      <div class="fw-bold">'
    +comentarios[i][0]+'</div><span class="text-light">     '
    +comentarios[i][1]+'    </span></div>    <span class="badge bg-primary rounded-pill">'
    +comentarios[i][3]+'</span> <span class="badge bg-danger rounded-pill" onclick="borrar(\''+comentarios[i][0]+'\','+i+')">X</span> </li>'   
    }
};

let borrar = function(coment,n){
    console.log(comentarios);
    if (comentarios.length==1) {
        comentarios.length=0;
    }else{
        comentarios.splice(n,1);
    }
    console.log(comentarios);
    document.getElementById(coment).outerHTML="";
};
let cerraralert = function(){
    document.getElementById("popup").classList.add("collapse")
};

let vaciarform = function(){
    document.getElementById("form").reset();
};

mostrar();

/////////////

class Resenya {
    constructor(autor, comentario, nota) {
        this.autor = autor;
        this.comentario = comentario;
        this.nota = nota;
    }
};

let r1 = new Resenya("Lionel", "cuper chachi", 10);