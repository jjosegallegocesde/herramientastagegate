let botonContinuarLanzamiento=document.getElementById("botonlanzarproducto")
let botonPararLanzamiento=document.getElementById("botonnolanzarproducto")
let mensajeFinalLanzamiento=document.getElementById("mensajefinallanzarproducto")


let botonPuerta6=document.getElementById("botonpuerta6")

//seguir idea
botonContinuarLanzamiento.addEventListener("click",function(){
    mensajeFinalLanzamiento.classList.remove("d-none")
    mensajeFinalLanzamiento.textContent="Felicidades por el impresionante logro de superar con éxito las pruebas y validaciones de tu prototipo. Tu dedicación y habilidades han allanado el camino para llevar tu innovación al siguiente nivel. Ahora que te preparas para la etapa de lanzamiento, estamos emocionados por las oportunidades que se avecinan. Tu trabajo duro ha dado sus frutos, y estamos seguros de que tu producto tendrá un impacto positivo en el mundo"
    botonPuerta6.disabled=false

})

//no seguir idea
botonPararLanzamiento.addEventListener("click",function(){
    mensajeFinalLanzamiento.classList.remove("d-none")
    mensajeFinalLanzamiento.textContent="Reconocemos tu arduo trabajo en el desarrollo del prototipo, aunque lamentablemente no haya superado las pruebas y validaciones en esta ocasión. La innovación a menudo implica desafíos y aprendizaje a lo largo del camino. A pesar de este revés, ten en cuenta que cada intento nos acerca un paso más a la solución adecuada"
    botonPuerta6.disabled=true

})