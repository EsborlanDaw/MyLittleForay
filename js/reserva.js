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
  let personasd = document.getElementById("personas");
  let totalpers = personasd.options[personasd.selectedIndex].text;
  
  let precio, preciototal;

  document.getElementById ('numper').value = totalpers;

  if (pais.toUpperCase() == 'ESPAÑA') {
    precio = 450.0;

    preciototal = totalpers * precio;
    document.getElementById('total').value = preciototal;
  }

  else if (pais.toUpperCase() == 'ITALIA') {
    precio = 550.0;
    preciototal = totalpers * precio;
    document.getElementById('total').value = preciototal;
  }

  else if ((pais.toUpperCase() == 'JAPÓN') || (pais.toUpperCase() == 'JAPON')) {
    precio = 750.0;
    preciototal = totalpers * precio;
    document.getElementById('total').value = preciototal;
  }

  else if (pais.toUpperCase() == 'MEXICO' || (pais.toUpperCase() == 'MÉXICO')) {
    precio = 650.0;
    preciototal = totalpers * precio;
    document.getElementById('total').value = preciototal;
  }

  
}


//Funcion para calcular el precio total con extras y descuentos
class Persona {
  constructor(id, precio)
   {
     this.id = id;
     this.precio = precio;
   }
}

function createPersona (){

  let personas = document.getElementById("personas");
  let totalpers = personas.options[personas.selectedIndex].text;
  let vecPersonas = [];


  for (let i=0; i<=totalpers; i++)
  {
    vecPersonas[i] = new Persona(i, calculatePrice());
  }
}

//Funcion para calcular desglose de precios

function byPerson()
{
  let personas = document.getElementById("personas");
  let totalad = personas.options[personas.selectedIndex].text;
  let total = document.getElementById("total");
  let preciopers = parseFloat(total) / parseFloat(totalad);
  console.log(total);
}

//FUncion precio con descuento
/*
  let checkTraslado = document.getElementById('traslado');
  let checkVehiculo = document.getElementById('vehiculo');
  let checkRestaurante = document.getElementById('restaurante');
  let codigo = document.getElementById("codigo").value;
  let tarjeta = document.getElementById("cantidad").value;
  let totalFamNum = document.getElementById("cfamilia").value;
  let totalAlberg = document.getElementById("alberg").value;
  if (checkTraslado == true)
      total = parseFloat(total) + (parseFloat(totalpers) * 15);
  if (checkVehiculo == true)
      total = parseFloat(total) + 500;
  if (checkRestaurante == true)
      total = parseFloat(total) + (parseFloat(totalpers) * 20);
  if  (codigo.lenght != 0 && tarjeta.lenght !=0)
      total = parseFloat(total) - parseFloat(tarjeta);
  if (totalFamNum.lenght != 0 && totalAlberg.lenght == 0)
      total = parseFloat(total) - (parseFloat(totalFamNum)-(parseFloat(totalFamNum) * 0.15));
  else (totalFamNum.lenght == 0 && totalAlberg.lenght != 0)
      total = parseFloat(total) - (parseFloat(totalAlberg)-(parseFloat(Alberg) * 0.10));
  
  document.getElementById('totaldesc').value = total;*/
  