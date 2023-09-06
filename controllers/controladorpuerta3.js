let botonContinuarDesarrollo=document.getElementById("botonseguirdesarrollo")
let botonPararDesarrollo=document.getElementById("botonnoseguirdesarrollo")
let mensajeFinalDesarrollo=document.getElementById("mensajefinaldesarrollo")


let botonPuerta4=document.getElementById("botonpuerta4")

//seguir idea
botonContinuarDesarrollo.addEventListener("click",function(){
    mensajeFinalDesarrollo.classList.remove("d-none")
    mensajeFinalDesarrollo.textContent="Felicidades por el logro de registrar con éxito el plan de negocio para tu proyecto de innovación. Este hito marca el comienzo de un emocionante viaje hacia la realización de tu visión. Tu dedicación y esfuerzo son inspiradores, y estamos emocionados de ser parte de tu camino hacia el éxito. ¡Sigue adelante con confianza y determinación!"
    botonPuerta4.disabled=false

})

//no seguir idea
botonPararDesarrollo.addEventListener("click",function(){
    mensajeFinalDesarrollo.classList.remove("d-none")
    mensajeFinalDesarrollo.textContent="Queremos reconocer tu valentía y esfuerzo en el proceso de elaboración del plan de negocio para tu proyecto de innovación, incluso si los resultados no fueron los esperados. A veces, los desafíos nos brindan las lecciones más valiosas. Este no es el final, sino una oportunidad para aprender y mejorar. Estamos aquí para apoyarte en la próxima etapa y para ayudarte a transformar esta experiencia en futuros éxitos. ¡Ánimo y sigue persiguiendo tus metas con determinación!"
    botonPuerta4.disabled=true

})