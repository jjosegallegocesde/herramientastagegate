let botonContinuarProyecto=document.getElementById("botonseguirproyecto")
let botonPararProyecto=document.getElementById("botonnoseguirproyecto")
let mensajeFinalProyecto=document.getElementById("mensajefinalproyecto")


let botonPuerta3=document.getElementById("botonpuerta3")
//seguir idea
botonContinuarProyecto.addEventListener("click",function(){
    mensajeFinalProyecto.classList.remove("d-none")
    mensajeFinalProyecto.textContent="El registro exitoso de tu proyecto de innovación es un paso fundamental en el camino hacia la creatividad y la excelencia. Estamos ansiosos por ver cómo esta idea innovadora se desarrolla y se convierte en realidad. Tu dedicación y visión son inspiradoras, y estamos seguros de que tu proyecto traerá impactos positivos"
    botonPuerta3.disabled=false

})

//no seguir idea
botonPararProyecto.addEventListener("click",function(){
    mensajeFinalProyecto.classList.remove("d-none")
    mensajeFinalProyecto.textContent="Entendemos que a veces los proyectos no resultan como esperamos, pero es importante recordar que el proceso de innovación implica tomar riesgos y aprender de cada experiencia. Tu esfuerzo y valentía al embarcarte en este proyecto son dignos de admiración"
    botonPuerta3.disabled=true

})