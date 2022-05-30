var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

//Funcion para ejecutar el toggle

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

//Funcion para sumar los 7 días a la fecha seleccionada

function sumarDias() {
    var fecha = document.getElementById("fcheckin");
    const F_CHECKOUT = 7
    let date = new Date (fecha.value + F_CHECKOUT);
    console.log(date.toLocaleDateString(date));
    
    
    let options = {}
}
