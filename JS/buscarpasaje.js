const origen = document.getElementById("origen");
const destino = document.getElementById("destino");
const ida = document.getElementById("fechaIda");
const vuelta = document.getElementById("fechaVuelta");
const pasajeros = document.getElementById("pasajeros");
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

function buscarPasaje() {

    let lugarOrigen = [];
    let lugarDestino = [];

    switch (origen.value) {
        case '1':
            lugarOrigen = "Ezeiza, Argentina";
        break;

        case '2':
            lugarOrigen = "Mar del Plata, Argentina";
        break;

        case '3':
            lugarOrigen = "Aeroparque, Argentina";
        break;

        case '4':
            lugarOrigen = "Palomar, Argentina";
        break;

        case '5':
            lugarOrigen = "Rosario, Argentina";
        break;

        case '6':
            lugarOrigen = "Mendoza, Argentina";
        break;
    }

    switch (destino.value) {
        case '1':
            lugarDestino = "Madrid, España";
        break;

        case '2':
            lugarDestino = "Cordoba, Argentina";
        break;

        case '3':
            lugarDestino = "Bariloche, Argentina";
        break;

        case '4':
            lugarDestino = "San Pablo, Brasil";
        break;

        case '5':
            lugarDestino = "Bogotá, Colombia";
        break;

        case '6':
            lugarDestino = "Santiago, Chile";
        break;

        case '7':
            lugarDestino = "Atlanta, Estados Unidos";
        break;

        case '8':
            lugarDestino = "Milan, Italia";
        break;

        case '9':
            lugarDestino = "Dubai, Emiratos Arabes Unidos";
        break;

        case '10':
            lugarDestino = "Macao, China";
        break;

        case '11':
            lugarDestino = "Seul, Corea del Sur";
        break;

        case '12':
            lugarDestino = "París, Francia";
        break;
    }

    if (origen.value === "" || destino.value === "" || ida.value === "" || pasajeros.value === "" ) {

        window.alert ("Por favor, completá los datos");

    } else {

    window.alert ("Tu pasaje desde" + " " + lugarOrigen + " " + "hasta"+ " " + lugarDestino + " " + "fue registrado, para confirmarlo ingresá tu email")
   
    } 

    let email = prompt("Ingrese su email:"); 
    
    if(!regexEmail.test(email)) {

        window.alert ("El mail ingresado es inválido");
        
    }else {

    window.alert ("Muchas gracias! Tu reserva fue registrada, te enviaremos un email a:", email, "para proceder con el pago.");
}

}


