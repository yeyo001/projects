dineroCofla = prompt("¿Cuanto dinero tienes cofla?");
dineroMateo = prompt("¿Cuanto dinero tienes mateo?");
dineroPedro = prompt("¿Cuanto dinero tienes pedro?");

dineroCofla = parseInt(dineroCofla);
dineroMateo = parseInt(dineroMateo);
dineroPedro = parseInt(dineroPedro);

if(dineroCofla >= 0.6 && dineroCofla < 1){
    alert("cofla comprate paleta de agua");
    alert("Y te sobran" + (dineroCofla - 0.6));
}

else if(dineroCofla >= 1 && dineroCofla < 1.6){
    alert("Cofla comprate la pleta de coco");
    alert("Y te sobran" + (dineroCofla - 1));
}

else if(dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("Cofla comprate el helado de chocolate");
    alert("Y te sobran" + (dineroCofla - 1.6));
}

else if(dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert("Cofla el helado de chocolate y vainilla");
    alert("Y te sobran" + (dineroCofla - 1.7));
}
 
else if(dineroCofla >= 1.8 && dineroCofla < 2.9){ 
    alert("Cofla comprate el bote de helado de fresa");
    alert("Y te sobran " + (dineroCofla - 1.8));
}

else if(dineroCofla >= 2.9){
    alert("Cofla comprate el helado grande de chocolate con menta y vainilla");
    alert("Y te sobran" + (dineroCofla - 2.9));
}

else {
   alert("Lo siento pobre de mierda, no te alcanza para ningun helado mejor ve a trabajar");
}

if(dineroMateo >= 0.6 && dineroMateo < 1){
    alert("Mateo comprate paleta de agua");
}

else if(dineroMateo >= 1 && dineroMateo < 1.6){
    alert("Mateo comprate la pleta de coco");
}

else if(dineroMateo >= 1.6 && dineroMateo < 1.7){
    alert("Meteo comprate el helado de chocolate");
}

else if(dineroMateo >= 1.7 && dineroMateo < 1.8){
    alert("Mateo el helado de chocolate y vainilla");
}
 
else if(dineroMateo >= 1.8 && dineroMateo < 2.9){ 
    alert("Mateo comprate el bote de helado de fresa");
}

else if(dineroMateo >= 2.9){
    alert("Mateo comprate el helado grande de chocolate con menta y vainilla");
}

else {
   alert("Lo siento pobre de mierda, no te alcanza para ningun helado mejor ve a trabajar");
}

if(dineroPedro >= 0.6 && dineroPedro < 1){
    alert("Pedro comprate paleta de agua");
}

else if(dineroPedro >= 1 && dineroPedro < 1.6){
    alert("Pedro comprate la pleta de coco");
}

else if(dineroPedro >= 1.6 && dineroPedro < 1.7){
    alert("Pedro comprate el helado de chocolate");
}

else if(dineroPedro >= 1.7 && dineroPedro < 1.8){
    alert("Pedro el helado de chocolate y vainilla");
}
 
else if(dineroPedro >= 1.8 && dineroPedro < 2.9){ 
    alert("Pedro comprate el bote de helado de fresa");
}

else if(dineroPedro >= 2.9){
    alert("Pedro comprate el helado grande de chocolate con menta y vainilla");
}

else {
   alert("Lo siento pobre de mierda, no te alcanza para ningun helado mejor ve a trabajar");
}


