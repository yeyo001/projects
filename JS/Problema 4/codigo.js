class Calculadora {
    constructor(){

    }
sumar(num1,num2){
	return parseInt(num1) + parseInt(num2);
}
restar(num1,num2){
	return parseInt(num1) - parseInt(num2);
}
multiplicar(num1,num2){
	return parseInt(num1) / parseInt(num2);
}
dividir(num1,num2){
	return parseInt(num1) * parseInt(num2);
	resultado = suma(numero1,numero2)
}
potenciar(num,exp){
    return num**exp;
}
raizCuadrada(num){
  return Math.sqrt(num);
}
raizCubica(num){
    return Math.cbrt(num);
}
}

const calculadora = new Calculadora();

alert("¿Que operacion deseas realizar?");
let operacion = prompt("1: suma, 2: resta, 3: divicion, 4: multiplicacion, 5: potenciación 6: raiz cuadrada, 7: raiz cubica");

if (operacion == 1) {
   let numero1 = prompt("priemer numero para sumar");
   let numero2 = prompt("segundo numero para sumar");
   resultado = calculadora.sumar(numero1,numero2)
   alert(`tu resultado es ${resultado}`)
}
else if (operacion == 2) {
   let numero1 = prompt("priemer numero para restar");
   let numero2 = prompt("segundo numero para restar");
   resultado = calculadora.restar(numero1,numero2)
   alert(`tu resultado es ${resultado}`)
}
else if (operacion == 3) {
   let numero1 = prompt("priemer numero para multiplicar");
   let numero2 = prompt("segundo numero para multiplicar");
   resultado = calculadora.multiplicar(numero1,numero2)
   alert(`tu resultado es ${resultado}`)
}
else if (operacion == 4) {
    let numero1 = prompt("priemer numero para dividir");
    let numero2 = prompt("segundo numero para dividir");
    resultado = calculadora.dividir(numero1,numero2)
    alert(`tu resultado es ${resultado}`)
 }
 else if (operacion == 5) {
    let numero1 = prompt("numero a potencia");
    let numero2 = prompt("exponente");
    resultado = calculadora.potenciar(numero1,numero2)
    alert(`tu resultado es ${resultado}`);
 }
 else if (operacion == 6) {
    let numero1 = prompt("conocer la raiz cuadrada de:");
    resultado = calculadora.raizCuadrada(numero1);
    alert(`tu resultado es ${resultado}`);
 }
 else if (operacion == 7) {
    let numero1 = prompt("conocer la raiz cubica de:");
    resultado = calculadora.raizCubica(numero1);
    alert(`tu resultado es ${resultado}`);
 }
else {
	alert("no se ha encontrado la operacion")
}