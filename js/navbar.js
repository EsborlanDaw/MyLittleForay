 //<!-- Hecho por Luis Rodríguez -->


var navbar = document.getElementById("navbar");
/*let txtNavbar = `<nav id="barramenu" class="navbar navbar-expand-sm navbar-dark bg-primary">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span>Menú</span>
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul class="navbar-nav" >
                                <li class="nav-item"><a class="nav-link" href="../index.html">INICIO</a></li>
                                <li class="nav-item"><a class="nav-link" href="paises.html">DESTINOS</a></li>
                                <li class="nav-item"><a class="nav-link" href="tarjetaregalo.html">TARJETA REGALO</a></li><li class="nav-item"><a class="nav-link" href="../HTML/resenya.html">RESEÑAS</a></li><li class="nav-item"><a class="nav-link" href="../HTML/sobrenosotros.html">SOBRE NOSOTROS</a></li><li class="nav-item"><a class="nav-link" href="../HTML/reserva.html">RESERVAR</a></li></div></ul></div></div></nav>`;

navbar.innerHTML = txtNavbar;
*/

var url = window.location.pathname;

if (url == "/index.html") {
    navbar.innerHTML= '<nav id="barramenu" class="navbar navbar-expand-sm navbar-dark bg-primary"><div class="container-fluid"><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"><span>Menú</span><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="collapsibleNavbar"><ul class="navbar-nav" ><li class="nav-item"><a class="nav-link  disabled" href="../index.html">INICIO</a></li><li class="nav-item"><a class="nav-link" href="HTML/paises.html">DESTINOS</a></li><li class="nav-item"><a class="nav-link" href="HTML/tarjetaregalo.html">TARJETA REGALO</a></li><li class="nav-item"><a class="nav-link" href="../HTML/resenya.html">RESEÑAS</a></li><li class="nav-item"><a class="nav-link" href="../HTML/sobrenosotros.html">SOBRE NOSOTROS</a></li><li class="nav-item"><a class="nav-link" href="../HTML/reserva.html">RESERVAR</a></li></div></ul></div></div></nav>';    
}
if (url == "/HTML/paises.html") {
    navbar.innerHTML= '<nav id="barramenu" class="navbar navbar-expand-sm navbar-dark bg-primary"><div class="container-fluid"><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"><span>Menú</span><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="collapsibleNavbar"><ul class="navbar-nav" ><li class="nav-item"><a class="nav-link" href="../index.html">INICIO</a></li><li class="nav-item"><a class="nav-link disabled" href="paises.html">DESTINOS</a></li><li class="nav-item"><a class="nav-link" href="tarjetaregalo.html">TARJETA REGALO</a></li><li class="nav-item"><a class="nav-link" href="../HTML/resenya.html">RESEÑAS</a></li><li class="nav-item"><a class="nav-link" href="../HTML/sobrenosotros.html">SOBRE NOSOTROS</a></li><li class="nav-item"><a class="nav-link" href="../HTML/reserva.html">RESERVAR</a></li></div></ul></div></div></nav>';    
}
if (url == "/HTML/reserva.html") {
    navbar.innerHTML= '<nav id="barramenu" class="navbar navbar-expand-sm navbar-dark bg-primary"><div class="container-fluid"><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"><span>Menú</span><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="collapsibleNavbar"><ul class="navbar-nav" ><li class="nav-item"><a class="nav-link" href="../index.html">INICIO</a></li><li class="nav-item"><a class="nav-link" href="paises.html">DESTINOS</a></li><li class="nav-item"><a class="nav-link" href="tarjetaregalo.html">TARJETA REGALO</a></li><li class="nav-item"><a class="nav-link" href="../HTML/resenya.html">RESEÑAS</a></li><li class="nav-item"><a class="nav-link" href="../HTML/sobrenosotros.html">SOBRE NOSOTROS</a></li><li class="nav-item"><a class="nav-link disabled" href="../HTML/reserva.html">RESERVAR</a></li></div></ul></div></div></nav>';    
}
if (url == "/HTML/sobrenosotros.html") {
    navbar.innerHTML= '<nav id="barramenu" class="navbar navbar-expand-sm navbar-dark bg-primary"><div class="container-fluid"><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"><span>Menú</span><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="collapsibleNavbar"><ul class="navbar-nav" ><li class="nav-item"><a class="nav-link" href="../index.html">INICIO</a></li><li class="nav-item"><a class="nav-link" href="paises.html">DESTINOS</a></li><li class="nav-item"><a class="nav-link" href="tarjetaregalo.html">TARJETA REGALO</a></li><li class="nav-item"><a class="nav-link" href="../HTML/resenya.html">RESEÑAS</a></li><li class="nav-item"><a class="nav-link disabled" href="../HTML/sobrenosotros.html">SOBRE NOSOTROS</a></li><li class="nav-item"><a class="nav-link" href="../HTML/reserva.html">RESERVAR</a></li></div></ul></div></div></nav>';    
}
if (url == "/HTML/resenya.html") {
    navbar.innerHTML= '<nav id="barramenu" class="navbar navbar-expand-sm navbar-dark bg-primary"><div class="container-fluid"><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"><span>Menú</span><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="collapsibleNavbar"><ul class="navbar-nav" ><li class="nav-item"><a class="nav-link" href="../index.html">INICIO</a></li><li class="nav-item"><a class="nav-link" href="paises.html">DESTINOS</a></li><li class="nav-item"><a class="nav-link" href="tarjetaregalo.html">TARJETA REGALO</a></li><li class="nav-item"><a class="nav-link disabled" href="../HTML/resenya.html">RESEÑAS</a></li><li class="nav-item"><a class="nav-link" href="../HTML/sobrenosotros.html">SOBRE NOSOTROS</a></li><li class="nav-item"><a class="nav-link" href="../HTML/reserva.html">RESERVAR</a></li></div></ul></div></div></nav>';    
}
if (url == "/HTML/tarjetaregalo.html") {
    navbar.innerHTML= '<nav id="barramenu" class="navbar navbar-expand-sm navbar-dark bg-primary"><div class="container-fluid"><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"><span>Menú</span><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="collapsibleNavbar"><ul class="navbar-nav" ><li class="nav-item"><a class="nav-link" href="../index.html">INICIO</a></li><li class="nav-item"><a class="nav-link" href="paises.html">DESTINOS</a></li><li class="nav-item"><a class="nav-link disabled" href="tarjetaregalo.html">TARJETA REGALO</a></li><li class="nav-item"><a class="nav-link" href="../HTML/resenya.html">RESEÑAS</a></li><li class="nav-item"><a class="nav-link" href="../HTML/sobrenosotros.html">SOBRE NOSOTROS</a></li><li class="nav-item"><a class="nav-link" href="../HTML/reserva.html">RESERVAR</a></li></div></ul></div></div></nav>';    
}
