//Funcion para ejecutar el tooltip

let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

//Funcion para ejecutar el toggle

let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
});


//Funcion para validar el país

/*function checkCountry(){

  let pais = document.getElementById("paisdestino").value;

  if (pais == null || pais.lenght == 0 || /^\s+$/.test(pais))
  {
    return false;
  }
  else if (pais.toUpperCase != "ESPAÑA" || pais.toUpperCase != "ITALIA" || 
  pais.toUpperCase != "JAPON" || pais.toUpperCase != "JAPÓN" || 
  pais.toUpperCase != "MÉXICO" || pais.toUpperCase != "MEXICO" )
  {
    return false;
  }
  else
    return true;

}*/

//Inhabilita las fechas anteriores a hoy

var hoy = new Date().toISOString().split('T')[0];
document.getElementsByName("fcheckin")[0].setAttribute('min', hoy);

//Funcion para sumar los 7 días a la fecha seleccionada

function sumarDias(frm) {

  let num = 7;

  // La fecha viene en formato YYYY-MM-DD
  let f = frm.fcheckin.value;

  let fecha = new Date(f);
  fecha.setDate(fecha.getDate() + num);

  //

  let mes = fecha.getUTCMonth() + 1;

  if (mes <= 9)
    mes = '0' + mes;

  //

  dia = fecha.getUTCDate();
  if (dia <= 9)
    dia = '0' + dia;

  frm.fcheckout.value = fecha.getUTCFullYear() + '-' + mes + '-' + dia;

  document.getElementById("fechaini").innerHTML = 'Fecha ida: ' + f;
  document.getElementById("fechafin").innerHTML = 'Fecha vuelta: ' + frm.fcheckout.value;
  document.getElementById("fechainiconf").innerHTML = 'Fecha ida: ' + f;
  document.getElementById("fechafinconf").innerHTML = 'Fecha vuelta: ' + frm.fcheckout.value;

}


//Funcion para poner la imagen

function addPhoto() {

  let pais = document.getElementById("paisdestino").value;
  let fotoPais;
  let fotoConfirmada;

  if (pais.toUpperCase() == 'ESPAÑA') {
    fotoPais = "../img/paises/España.jpg";
    fotoConfirmada = "../img/paises/España.jpg";
  }

  else if (pais.toUpperCase() == 'ITALIA') {
    fotoPais = '../img/paises/Italia.jpg';
    fotoConfirmada = '../img/paises/Italia.jpg';
  }

  else if ((pais.toUpperCase() == 'JAPÓN') || (pais.toUpperCase() === 'JAPON')) {
    fotoPias = '../img/paises/Japon.jpg';
    fotoConfirmada = '../img/paises/Japon.jpg';
  }

  else if (pais.toUpperCase() == 'MEXICO' || (pais.toUpperCase() === 'MÉXICO')) {
    fotoPais = '../img/paises/Mexico.jpg';
    fotoConfirmada = '../img/paises/Mexico.jpg';
  }
  else {
    fotoPais = '../img/IMG/default.jpg';
    fotoConfirmada = '../img/IMG/default.jpg';
  }

  document.getElementById('fotopais').src = fotoPais;
  document.getElementById('fotoconfirmada').src = fotoConfirmada;

  return fotoPais;

}

//Funcion para validar DNI

function checkDNI() {

  let dni = document.getElementById("ndoc").value;

  var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

  if (!(/^\d{8}[A-Z]$/.test(dni))) {
    console.log("ERRRORR");
  }

  if (dni.charAt(8) != letras[(dni.substring(0, 8)) % 23]) {
    return false;
  }

}

//Funcion para rellenar Resumen Reserva

function add() {

  let dato;


  dato = document.getElementById("paisdestino").value;
  document.getElementById("paisconfi").value = dato;

  dato = document.getElementById("ciudad").value;
  document.getElementById("ciudadconfi").value = dato;

  dato = document.getElementById("nom").value;
  document.getElementById("nconfi").value = dato;

  dato = document.getElementById("tel1").value;
  document.getElementById("tconfi").value = dato;

  dato = document.getElementById("email1").value;

  document.getElementById("econfi").value = dato;


}

/* Funcion para calcular el total de pago
    Costes
      -España = 450
      -Italia = 550
      -Japón = 750
      -México = 650
*/

function calculatePrice() {

  let pais = document.getElementById("paisdestino").value;
  let personasd = document.getElementById("personas");
  let totalpers = personasd.options[personasd.selectedIndex].text;
  let precio, preciototal;


  if (pais.toUpperCase() == 'ESPAÑA') {
    precio = 450.0;
    preciototal = totalpers * precio;

    document.getElementById('preciototalpersonas').innerHTML = 'Precio total para ' + totalpers + ' personas: ' + preciototal + ' €';

  }

  else if (pais.toUpperCase() == 'ITALIA') {
    precio = 550.0;
    preciototal = totalpers * precio;
    document.getElementById('preciototalpersonas').innerHTML = 'Precio total para ' + totalpers + ' personas: ' + preciototal + ' €';

  }

  else if ((pais.toUpperCase() == 'JAPÓN') || (pais.toUpperCase() == 'JAPON')) {
    precio = 750.0;
    preciototal = totalpers * precio;
    document.getElementById('preciototalpersonas').innerHTML = 'Precio total para ' + totalpers + ' personas: ' + preciototal + ' €';

  }

  else if (pais.toUpperCase() == 'MEXICO' || (pais.toUpperCase() == 'MÉXICO')) {
    precio = 650.0;
    preciototal = totalpers * precio;
    document.getElementById('preciototalpersonas').innerHTML = 'Precio total para ' + totalpers + ' personas: ' + preciototal + ' €';

  }



  return preciototal;

}

//Funcion calcular extras
function calculateExtras() {

  let total = calculatePrice();

  let totalextras = 0;
  let personasd = document.getElementById("personas");
  let totalpers = personasd.options[personasd.selectedIndex].text;

  if (document.getElementById('traslado').checked) {

    totalextras = (parseFloat(totalpers) * 15);
    total = parseFloat(total) + (parseFloat(totalpers) * 15);
    document.getElementById('extratraslado').innerHTML = '- Extra traslado: ' + totalextras + '€';
    document.getElementById('trasladoconfirmado').innerHTML = '- Extra traslado: ' + totalextras + '€';
  }
  else {
    document.getElementById('extratraslado').innerHTML = '';
    document.getElementById('trasladoconfirmado').innerHTML = '';
  }

  if (document.getElementById('vehiculo').checked) {

    total = parseFloat(total) + 500;
    document.getElementById('extravehiculo').innerHTML = '- Extra vehiculo: 500€';
    document.getElementById('vehiculoconfirmado').innerHTML = '- Extra vehiculo: 500€';
  }
  else {
    document.getElementById('extravehiculo').innerHTML = '';
    document.getElementById('vehiculoconfirmado').innerHTML = '';
  }

  if (document.getElementById('restaurante').checked) {

    totalextras = 0;
    totalextras = (parseFloat(totalpers) * 20);
    total = parseFloat(total) + (parseFloat(totalpers) * 20);
    document.getElementById('extrarestaurante').innerHTML = '- Extra restaurante: ' + totalextras + '€';
    document.getElementById('restauranteconfirmado').innerHTML = '- Extra restaurante: ' + totalextras + '€';

  }
  else {
    document.getElementById('extrarestaurante').innerHTML = '';
    document.getElementById('restauranteconfirmado').innerHTML = '';
  }
  if (document.getElementById('fiesta').checked) {
    document.getElementById('extrafiesta').innerHTML = '- Extra fiesta incluido, pago y confirmación en el hotel';
    document.getElementById('fiestaconfirmada').innerHTML = '- Extra fiesta incluido, pago y confirmación en el hotel';
  }
  else {
    document.getElementById('extrafiesta').innerHTML = '';
    document.getElementById('fiestaconfirmada').innerHTML = '';
  }



  document.getElementById('totalconfirmado').innerHTML = 'Total + extras: ' + total;

  document.getElementById('totalconfirmadoresumen').innerHTML = 'Total + extras: ' + total;


  return total;
}

//Funcion para calcular descuento

function calculateDiscount() {
  let total = calculateExtras();
  let descuento = document.getElementById('codigo').value;
  let final;

  if (descuento.lenght != 0) {

    switch (descuento) {
      case 'tarj100':
        final = total - 100;
        document.getElementById('preciodesc').innerHTML = 'Tarjeta descuento: -100 ';
        break;
      case 'tarj200':
        final = total - 200;
        document.getElementById('preciodesc').innerHTML = 'Tarjeta descuento: -200 ';
        break;
      case 'tarj300':
        final = total - 300;
        document.getElementById('preciodesc').innerHTML = 'Tarjeta descuento: -300 ';
        break;
      case 'tarj400':
        final = total - 400;
        document.getElementById('preciodesc').innerHTML = 'Tarjeta descuento: -400 ';
        break;
      case 'tarj500':
        final = total - 500;
        document.getElementById('preciodesc').innerHTML = 'Tarjeta descuento: -500 ';
        break;
      default:
        final = total + 0;
    }

    document.getElementById('preciofinal').innerHTML = 'Precio Total Final: ' + final;

  }

  return final;
}

//Funcion rellenar confirmacion de reserva

function confirmation() {

  let dato = document.getElementById("paisdestino").value;
  document.getElementById("paisconfirmado").value = dato;

  dato = document.getElementById("ciudad").value;
  document.getElementById("ciudadconfirmada").value = dato;

  dato = document.getElementById("nom").value;
  document.getElementById("nconfirmado").value = dato;

  dato = document.getElementById("tel1").value;
  document.getElementById("tconfirmado").value = dato;

  dato = document.getElementById("email1").value;
  document.getElementById("econfirmado").value = dato;

  document.getElementById('ptconfirmado').innerHTML = 'Precio total para ' + totalpers + ' personas: ' + preciototal + ' €';

}
