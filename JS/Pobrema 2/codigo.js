let free = false;
const validarCliente = (time)=>{
    let edad = prompt("¿Cual es tu edad?");
    if (edad > 18) {
       if (time >= 2 && time < 7 && free == false) {
           alert("Papu, puedes pasar gratis por que eres la primera persona despues de las 2:AM");
           free = true;
       } else {
           alert(`Mira papu puedes pasar por que son las ${time } HS:00 pero tienes que pagar la entrada`);
       }
    } else {
        alert("Mira papu :u, tu no puedes pasar por que eres menor de edad");
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(1);
validarCliente(2);
validarCliente(2.4); 
validarCliente(3);
