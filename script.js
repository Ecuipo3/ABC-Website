//Estos son los colores posibles 
const colores = ["green", "blue", "red"];

//Esta función es para entregar un color aleatorio 
function colorAleatorio (){
    const index = Math.floor(Math.random() * colores.length);
    return colores[index];
}
//Vamos a seleccionar todos los h5
const h5s = document.querySelectorAll("h5");
//Evento click para cada h5
h5s.forEach(function(h5){
addEventListener("click", function() {

let contador = 0;
const intervalo = setInterval(function(){ 
    h5.style.color = colorAleatorio ();
    contador++;

    if (contador===20){
        clearInterval(intervalo);
    }
} , 300 ); 
}); 
});