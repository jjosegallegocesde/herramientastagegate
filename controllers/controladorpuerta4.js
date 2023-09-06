let botonContinuarPrototipo=document.getElementById("botonseguirprototipo")
let botonPararPrototipo=document.getElementById("botonnoseguirprototipo")
let mensajeFinalPrototipo=document.getElementById("mensajefinalprototipo")


let botonPuerta5=document.getElementById("botonpuerta5")

//seguir idea
botonContinuarPrototipo.addEventListener("click",function(){
    mensajeFinalPrototipo.classList.remove("d-none")
    mensajeFinalPrototipo.textContent="Felicidades por alcanzar este emocionante hito en tu proyecto. El desarrollo exitoso de tu prototipo es un testimonio de tu dedicación y habilidades. Ahora que te adentras en la etapa de pruebas, estamos emocionados por lo que el futuro tiene reservado. Estamos seguros de que tu innovación seguirá brillando y alcanzando nuevos niveles de éxito. ¡Sigue adelante con entusiasmo y confianza!"
    botonPuerta5.disabled=false

})

//no seguir idea
botonPararPrototipo.addEventListener("click",function(){
    mensajeFinalPrototipo.classList.remove("d-none")
    mensajeFinalPrototipo.textContent="Queremos reconocer tus esfuerzos en el desarrollo del prototipo, incluso si los resultados no fueron los deseados. La innovación a menudo implica enfrentar desafíos y aprender de ellos. Aunque este prototipo no haya salido como esperabas, ten en cuenta que cada intento nos acerca más a la solución correcta"
    botonPuerta5.disabled=true

})