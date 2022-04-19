let alto = window.screen.height;
let ancho = window.screen.width;

comprar = confirm(`El alto es: ${alto} El ancho es: ${ancho}`)

if (comprar) {
    alert("Compra realizada correctamente")
} else {
    alert("Compra cancelada")
}