//<!-- Hecho por Luis Rodríguez -->

//Crear tarjeta
function tarjeta() {
    //titulo
    let titulo = document.getElementById("tittle").value;
    document.getElementById("titT").innerText = titulo.toUpperCase();

    //mensaje
    let mensaje = document.getElementById("mnsj").value;
    document.getElementById("text").innerText = mensaje;

    //de y para quien
    let de = document.getElementById("deq").value;
    let para = document.getElementById("paraq").value;
    if (de != "") {
        document.getElementById("deQ").innerText = "De: " + de;
    }
    if (para != "") {
        document.getElementById("paraQ").innerText = "Para: " + para;
    }

    //fondo
    let fondo = document.getElementById("fondo").value;
    let bg = document.getElementById("tarjeta");
    bg.style.background = fondo;

    validarEmail();
}

function importe(x) {
    //importe
    let importe = x;
    document.getElementById("importe").innerHTML = importe + "€";
}

//Validar email
function validarEmail() {
    let email = document.getElementById("email").value;
    
    if (!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)) || !impOb()){
        alert("La dirección de email " + email + " es incorrecta o no has seleccionado importe.");
        botonComprar.classList += " disabled";
    }else{
        botonComprar.classList.remove("disabled");
    }
}

//Importe obligatorio
function impOb() {
    if (document.getElementById("importe").innerHTML == "") {
        return false;
    }else{
        return true;
    }
}

//Boton comprar
document.getElementById("botonComprar").addEventListener("click",modal());

function modal() {
    let modal = document.createElement("div");
    modal.classList = "modal";
    modal.innerHTML =`<div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Tarjeta Regalo Comprada</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        En breves, si está de acuerdo, te será enviado un mensaje con la tarjeta regalo y la información pertinente al e-mail introducido.
        !!Muchas Gracias¡¡
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <input type="button" class="btn btn-success" value="De acuerdo" data-bs-dismiss="modal" onclick="recargar()">
      </div>

    </div>
  </div>`;
    document.body.appendChild(modal);   
}

//Nueva tarjeta, vaciar
function vaciar() {
    document.getElementById("titT").innerText = null;
    document.getElementById("text").innerText = null;
    document.getElementById("deQ").innerText = null;
    document.getElementById("paraQ").innerText = null;
    document.getElementById("tarjeta").style.background = "aqua";
    document.getElementById("importe").innerHTML = "";
    validarEmail();
}
  
//Recargar pagina
function recargar() {
        window.location.href = window.location.href;
}