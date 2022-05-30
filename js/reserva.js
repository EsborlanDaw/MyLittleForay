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

var hoy = new Date().toISOString().split( 'T' )[0];
document.getElementsByName( "fcheckin" )[0].setAttribute( 'min' , hoy);
  
//Funcion para sumar los 7 días a la fecha seleccionada

function sumarDias(frm) {

  let num = 7;

  // La fecha viene en formato YYYY-MM-DD
  let f = frm.fcheckin.value;

  let fecha = new Date(f);
  fecha.setDate(fecha.getDate () + num);
  
  //

  let mes = fecha.getUTCMonth() + 1;

  if(mes <= 9) 
    mes = '0' + mes;

  //

  dia = fecha.getUTCDate();
  if (dia <= 9) 
    dia = '0' + dia;

  frm.fcheckout.value = fecha.getUTCFullYear() + '-' + mes + '-' + dia;
  
}

function agregarInfo(){
    let node = document.getElementById(id);
    let clone = node.cloneNode(true);

    document.getElementById("nconfirmado").appendChild(clone);

}




