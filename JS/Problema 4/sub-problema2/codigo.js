const obtenerInformacion = (materia)=>{
    materias = {
        fisica: ["Juan","pedro", "pepito","cofla", "maria"],
        programacion: ["Dalto","pedro", "juan","pepito"],
        logica: ["Diego","pedro","juan", "pepito","cofla", "maria"],
        quimica: ["Allyson","pedro","juan", "pepito","cofla","maria"]
    }
    if (materias[materia] !== undefined) {
        return [materias[materia],materia,materias];
    } else {
        return materias
    }
}

const  mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);

if (informacion !== false){
    let profesor = obtenerInformacion(materia)[0][0]
    alumnos = obtenerInformacion(materia)[0];
    alumnos.shift();
    document.write(`El profesor de: <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
    Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>
   `); 
}
}


mostrarInformacion("fisica")
mostrarInformacion("programacion")
mostrarInformacion("quimica")
mostrarInformacion("logica")
