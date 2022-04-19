class celulares {
    constructor(color,peso,tamaño,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if(this.encendido == false) {
            alert("Celular prendido");
            this.encendido = true;
        } else {
            alert("Celular apagado");
        }

    }
  reiniciar(){
      if(this.encendido == true) {
          alert("Reiniciando celular");
      } else {
          alert("El celular esta apagado")
      }
  }
  tomarFotos(){
      alert(`Foto tomada en una resolucion de: ${this.resolucionDeCamara}`)
  }
  grabarVideo() {
      alert(`Grabando video en: ${this.resolucionDeCamara}`)
  }
  mostrarInfo(){
      return` 
      Color: <b>${this.color}</b></br>
      Peso:  <b>${this.peso}}</b></br>
      Tamaño: <b>${this.tamaño}</b></br>
      Resolucion de Video: <b>${this.resolucionDeCamara}</b></br>
      Memoria ram: <b>${this.memoriaRam}</b></br>
      `
     
  }
}


celular1 = new celulares("Azul","150g","5p","Full hd","4GB")
celular3 = new celulares("verde","135g","7p","Full hd","8GB")
celular2 = new celulares("negro","140g","4p","HD","7GB")


// celular1.presionarBotonEncendido();
// celular1.tomarFotos();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();



document.write(`
  ${celular1.mostrarInfo()} <br>
  ${celular2.mostrarInfo()} <br>
  ${celular3.mostrarInfo()} <br>
`)
