 //<!-- Hecho por Luis Rodríguez -->


var navbar = document.getElementById("navbar");
var url = window.location.pathname;
navbar.innerHTML= `
<nav id="barramenu" class="navbar navbar-expand-sm navbar-dark bg-primary">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span>Menú</span>
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav" >
                <li class="nav-item">
                    <a id="in" class="nav-link " href="../index.html">INICIO</a></li>
                <li class="nav-item">
                    <a id="des" class="nav-link" href="../HTML/paises.html">DESTINOS</a></li>
                <li class="nav-item">
                    <a id="tar" class="nav-link" href="../HTML/tarjetaregalo.html">TARJETA REGALO</a></li>
                <li class="nav-item">
                    <a id="resñ" class="nav-link" href="../HTML/resenya.html">RESEÑAS</a></li>
                <li class="nav-item">
                    <a id="snos" class="nav-link" href="../HTML/sobrenosotros.html">SOBRE NOSOTROS</a></li>
                <li class="nav-item">
                    <a id="res" class="nav-link" href="../HTML/reserva.html">RESERVAR</a></li></div>
            </ul>
        </div>
    </div>
</nav>`

if (url == "/index.html") {
    document.getElementById("in").classList += " disabled";
}
if (url == "/HTML/paises.html") {
    document.getElementById("des").classList += " disabled";
}
if (url == "/HTML/reserva.html") {
    document.getElementById("res").classList += " disabled";
}
if (url == "/HTML/sobrenosotros.html") {
    document.getElementById("snos").classList += " disabled";
}
if (url == "/HTML/resenya.html") {
    document.getElementById("resñ").classList += " disabled";
}
if (url == "/HTML/tarjetaregalo.html") {
    document.getElementById("tar").classList += " disabled";
}


