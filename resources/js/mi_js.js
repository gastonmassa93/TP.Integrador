let valorDeTicket = 200;
let descuentoEstudiante = 80;
let descuentoTrainer = 50;
let descuentoJunior = 15;
let valorTotal = 0;

function calcular() {
    let categoria = document.getElementById("categoria").value;
    let cantidad = document.getElementById("cantidad").value;

    if(categoria == "estudiante") {
        valorTotal = (valorDeTicket * cantidad) - (valorDeTicket * cantidad * descuentoEstudiante / 100);
    } else if(categoria == "trainer") {
        valorTotal = (valorDeTicket * cantidad) - (valorDeTicket * cantidad * descuentoTrainer / 100);
    } else if(categoria == "junior") {
        valorTotal = (valorDeTicket * cantidad) - (valorDeTicket * cantidad * descuentoJunior / 100);
    }
    // alert (valorTotal);
    document.getElementById("total").innerHTML = valorTotal;


}