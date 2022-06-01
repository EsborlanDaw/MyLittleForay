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

}

//Poner imagen

function addPhoto() {


  let pais = document.getElementById("paisdestino").value;
  console.log(pais.toUpperCase());
  if (pais.toUpperCase() == 'ESPAÑA') {
    document.getElementById('fotopais').src = "../img/paises/España.jpg";
  }

  else if (pais.toUpperCase() == 'ITALIA') {
    document.getElementById('fotopais').src = '../img/paises/Italia.jpg';
  }

  else if ((pais.toUpperCase() == 'JAPÓN') || (pais.toUpperCase() === 'JAPON')) {
    document.getElementById('fotopais').src = '../img/paises/Japon.jpg';
  }

  else if (pais.toUpperCase() == 'MEXICO' || (pais.toUpperCase() === 'MÉXICO')) {
    document.getElementById('fotopais').src = '../img/paises/Mexico.jpg';
  }

}

//Funcion para rellenar Resumen Reserva
function add() {
  let dato = document.getElementById("paisdestino").value;
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
  let adultos = document.getElementById("adultos");
  let totalad = adultos.options[adultos.selectedIndex].text;
  let menores = document.getElementById("niños");
  let totalme = menores.options[menores.selectedIndex].text;
  let precio, preciototal;

  console.log(totalad);
  console.log(totalme);

  if (pais.toUpperCase() == 'ESPAÑA') {
    precio = 450;
    
    preciototal = (parseFloat (totalad) + parseFloat(totalme)) * precio;
    
    document.getElementById('total').value = preciototal;
  }

  else if (pais.toUpperCase() == 'ITALIA') {
    precio = 550;
    preciototal = (parseFloat(totalad) + parseFloat(totalme)) * precio;
    document.getElementById('total').value = preciototal;
  }

  else if ((pais.toUpperCase() == 'JAPÓN') || (pais.toUpperCase() === 'JAPON')) {
    precio = 750;
    preciototal = (parseFloat(totalad) + parseFloat(totalme)) * precio;
    document.getElementById('total').value = preciototal;
  }

  else if (pais.toUpperCase() == 'MEXICO' || (pais.toUpperCase() === 'MÉXICO')) {
    precio = 650;
    preciototal = (parseFloat(totalad) + parseFloat(totalme)) * precio;
    document.getElementById('total').value = preciototal;
  }
}









