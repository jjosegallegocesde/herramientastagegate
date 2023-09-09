let nombreIdea = document.getElementById("nombreIdea")
let descripcionIdea = document.getElementById("descripcionidea")
let fuenteIdea = document.getElementById("fuenteIdeaComo")
let fuenteIdeaPersona = document.getElementById("fuenteIdeaQuien")
let fechaIdea = document.getElementById("fechaIdea")

let nombreIdeaPuntuacion = document.getElementById("nombreIdeaPuntuacion")
let descripcionIdeaPuntuacion = document.getElementById("descripcionIdeaPuntuacion")

let facilidadImplementacion = document.getElementById("facilidadImplementacion")
let facilidadFabricacion = document.getElementById("facilidadFabricacion")
let inversionCapital = document.getElementById("inversiondecapital")
let brecha = document.getElementById("brecha")
let beneficioBruto = document.getElementById("beneficioBruto")
let competencia = document.getElementById("competencia")
let cicloVida = document.getElementById("cicloVida")
let totalPonderado = document.getElementById("puntuacionIdea")
let mensajePonderacion = document.getElementById("mensajeponderacion")

let botonContinuaridea=document.getElementById("botonseguiridea")
let botonPararIdea=document.getElementById("botonnoseguiridea")
let mensajeFinalIdea=document.getElementById("mensajefinalidea")


//fecha del sistema
let fechaSistema = new Date().toISOString().slice(0, 10);
fechaIdea.value = fechaSistema


//detectando ingresos de informacion idea
nombreIdea.addEventListener("input", validarEscritura)
descripcionIdea.addEventListener("input", validarEscritura)
fuenteIdea.addEventListener("input", validarEscritura)
fuenteIdeaPersona.addEventListener("input", validarEscritura)
fechaIdea.addEventListener("input", validarEscritura)
function validarEscritura() {
    nombreIdeaPuntuacion.textContent = "Idea: " + nombreIdea.value
    descripcionIdeaPuntuacion.textContent = descripcionIdea.value

}

//detectando ponderacion idea
let ponderacionTotal = 0
facilidadImplementacion.addEventListener("change", validarPonderacion)
facilidadFabricacion.addEventListener("change", validarPonderacion)
inversionCapital.addEventListener("change", validarPonderacion)
brecha.addEventListener("change", validarPonderacion)
beneficioBruto.addEventListener("change", validarPonderacion)
competencia.addEventListener("change", validarPonderacion)
cicloVida.addEventListener("change", validarPonderacion)
function validarPonderacion() {

    let ponderacionImlementacion = parseInt(facilidadImplementacion.value)
    let ponderacionFabricacion = parseInt(facilidadFabricacion.value)
    let ponderacioninversion = parseInt(inversionCapital.value)
    let ponderacionbrecha = parseInt(brecha.value)
    let ponderacionbeneficio = parseInt(beneficioBruto.value)
    let ponderacioncompetencia = parseInt(competencia.value)
    let ponderacionciclovida = parseInt(cicloVida.value)



    ponderacionTotal = ponderacionImlementacion + ponderacionFabricacion + ponderacioninversion + ponderacionbrecha
        + ponderacionbeneficio + ponderacioncompetencia + ponderacionciclovida

    let colorPonderado = ""
    let mensajePonderado = ""
    let colormensajeponderado = ""
    if (ponderacionTotal >= 0 && ponderacionTotal < 7) {
        colorPonderado = "text-danger"
        colormensajeponderado = "alert-danger"
        mensajePonderado = "La idea es interesante, pero sería prudente realizar una reevaluación exhaustiva. Algunos aspectos clave requieren una revisión más profunda antes de avanzar con confianza."
    } else if (ponderacionTotal >= 7 && ponderacionTotal < 14) {
        colorPonderado = "text-warning"
        colormensajeponderado = "alert-warning"
        mensajePonderado = "La idea tiene potencial, pero se necesita un estudio más detenido para entender completamente su viabilidad. Recomiendo dedicar más tiempo a la investigación y análisis antes de tomar decisiones importantes."
    } else if (ponderacionTotal >= 14 && ponderacionTotal < 21) {
        colorPonderado = "primary"
        colormensajeponderado = "alert-primary"
        mensajePonderado = "La idea es viable y muestra promesa. Los datos y la investigación respaldan su factibilidad. Es hora de considerar seriamente cómo implementarla de manera efectiva."
    } else {
        colorPonderado = "text-success"
        colormensajeponderado = "alert-success"
        mensajePonderado = "Felicidades, la idea es muy viable y tiene un gran potencial. Los análisis indican que puede ser una oportunidad valiosa. Ahora, es momento de elaborar un plan sólido para llevarla a la realidad de manera exitosa."
    }

    totalPonderado.textContent = ponderacionTotal
    mensajePonderacion.textContent = mensajePonderado
    totalPonderado.className = ""
    mensajePonderacion.className = ""

    totalPonderado.classList.add(colorPonderado)
    mensajePonderacion.classList.add("alert", colormensajeponderado)


}


let botonPuerta2=document.getElementById("botonpuerta2")

//seguir idea
botonContinuaridea.addEventListener("click",function(){
    mensajeFinalIdea.classList.remove("d-none")
    mensajeFinalIdea.textContent="Es un gran logro haber registrado con éxito tu idea de innovación. Esto marca el comienzo de un emocionante viaje hacia la creación y desarrollo de algo único y valioso. Tu creatividad y visión nos inspiran a todos"
    botonPuerta2.disabled=false





})

//no seguir idea
botonPararIdea.addEventListener("click",function(){
    mensajeFinalIdea.classList.remove("d-none")
    mensajeFinalIdea.textContent="La innovación a menudo implica experimentar y aprender de los resultados, y tu contribución es valiosa. No te desanimes. Continúa buscando oportunidades y explorando nuevas ideas. El camino hacia la innovación puede tener desafíos, pero cada paso te acerca más a tus objetivos"
    botonPuerta2.disabled=true

})













//rutina pdf
/*let boton = document.getElementById("botonpdfidea")
boton.addEventListener("click", function () {

    // Tu objeto JSON
    const datosFinales = {
        nombre: nombreIdea.value,
        edad: 30,
        ciudad: "Ciudad Ejemplo"
    };

    const tablaHTML = obtenerTabla(datosFinales);

    const documentDefinition = {
        pageMargins: [20, 20, 20, 20],
        content: [
            {
                text: 'Tabla desde JSON',
                style: 'header'
            },
            {
                table: {
                    widths: ['50%', '50%'],
                    body: [
                        [{text: 'Atributo', bold: true}, {text: 'Valor', bold: true}],
                        ...formatearTabla(tablaHTML)
                    ]
                }
            }
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                margin: [0, 0, 0, 10]
            }
        }
    };

    

    // Genera y descarga el PDF
    pdfMake.createPdf(documentDefinition).download('tabla.pdf');


})*/