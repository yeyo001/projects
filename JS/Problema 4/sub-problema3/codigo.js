let materias = {
    fisica: ["Juan","pedro", "pepito","cofla", "maria"],
    programacion: ["Dalto","pedro", "juan","pepito"],
    logica: ["Diego","pedro","juan", "pepito","cofla", "maria"],
    quimica: ["Allyson","pedro","juan", "pepito","cofla","maria"]
} 


const inscribir = (alumno,materia)=>{
     personas = materias[materia];
     personas.shift();
     alumnos = personas;
     if (alumno.length >= 20) {
         document.write(`Lo siento ${alumno}, las clases de ${materia} ya estan llenas`)
     } else {
         alumnos.push(alumno);
        if (materia == "fisica") {
            materias = {
                fisica: alumnos,
                programacion: materia['programacion'],
                logica: materia['logica'],
                quimica: materia['quimica']
            }
         }
         else if (materia == "programacion") {
            materias = {
                fisica: materia['fisica'],
                programacion: alumnos,
                logica: materia['logica'],
                quimica: materia['quimica']
            }
         }
         else if (materia == "logica") {
            materias = {
                fisica: materia['fisica'],
                programacion: materia['programacion'],
                logica: alumnos,
                quimica: materia['quimica']
            }
         }
         else if (materia == "pquimica") {
            materias = {
                fisica: materia['fisica'],
                programacion: materia['programacion'],
                logica: materia['logica'],
                quimica: alumnos
            }
         }
         document.write(`¡Felicidades ${alumno}! te has incrito correctamente a ${materia}`)
     }
}

inscribir("pedrito", "fisica")


