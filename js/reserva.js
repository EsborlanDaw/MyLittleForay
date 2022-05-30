//Función para ejecutar el tooltip

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

function sumar() {
    var fecha = new Date  (document.getElementById("fcheckin").value);
    const F_CHECKOUT = 7

    if (numero1 !== '' && numero2 !== '') {
        var suma = fecha + F_CHECKOUT;
        document.getElementById('fcheckout').value = suma;
    }
}




