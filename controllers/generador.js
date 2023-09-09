//rutina pdf
import {obtenerTabla} from '../helpers/jsonTOtabla.js'
import {formatearTabla} from '../helpers/formateadorTabla.js'




let boton = document.getElementById("reportefinal")
boton.addEventListener("click", function () {



    //capturando data
    //etapa1
    let reportenombreIdea = document.getElementById("nombreIdea").value
    let reportedescripcionIdea = document.getElementById("descripcionidea").value
    let reportefuenteIdeaPersona = document.getElementById("fuenteIdeaQuien").value
    let reportefechaIdea = document.getElementById("fechaIdea").value
    let reportetotalPonderado = document.getElementById("puntuacionIdea").textContent

    //etapa2
    let reportenombreproyecto = document.getElementById("proyectonombre").value
    let reportefechainicioproyecto = document.getElementById("fechainicioproyecto").value
    let reporteduracionproyecto = document.getElementById("duracionproyecto").value
    let reporteobjetivoProyecto = document.getElementById("objetivoProyecto").value
    let reportefondosProyecto = document.getElementById("fondosProyecto").value
    let reporteresponsableProyecto = document.getElementById("responsableProyecto").value
    let reporteinnovacionproyecto = document.getElementById("innovacionproyecto").value

    //etapa3
    let reporteinformefabricacion = document.getElementById("informefabricacion").value
    let reporteinformemercados = document.getElementById("informemercados").value
    let reporteinformefactibilidadtecnica = document.getElementById("informefactibilidadtecnica").value
    let reporteinformefactibilidadlegal = document.getElementById("informefactibilidadlegal").value
    let reporteinformefactibilidfinanciera = document.getElementById("informefactibilidfinanciera").value




    // Tu objeto JSON
    const datosFinales = {
        "Nombre idea": reportenombreIdea,
        "Descripción idea:": reportedescripcionIdea,
        "Fuente de la idea":reportefuenteIdeaPersona,
        "Fecha de registro": reportefechaIdea,
        "Puntuación idea":reportetotalPonderado,
        "sin1":"sin",
        "Nombre del proyecto":reportenombreproyecto,
        "Objetivo del proyecto":reporteobjetivoProyecto,
        "Fecha de inicio":reportefechainicioproyecto,
        "Duración en meses del proyecto":reporteduracionproyecto,
        "Fondos del proyecto":reportefondosProyecto,
        "Responsable del proyecto":reporteresponsableProyecto,
        "Tipo de innovación que desarrolla el proyecto":reporteinnovacionproyecto,
        "sin2":"sin",
        "Informe de fabricación":reporteinformefabricacion,
        "Informe de mercados":reporteinformemercados,
        "Informe de factibilidad técnica":reporteinformefactibilidadtecnica,
        "Informe de factibilidad legal":reporteinformefactibilidadlegal,
        "Informe de factibilidad financiera":reporteinformefactibilidfinanciera,
        "sin3":"sin",
       

    };

    const tablaHTML = obtenerTabla(datosFinales);

    const documentDefinition = {
        pageMargins: [20, 20, 20, 20],
        content: [
            {
                text: 'Reporte Final STAGE GATE',
                style: 'header'
            },
            {
                table: {
                    widths: ['50%', '50%'],
                    body: [
                        [{text: 'Entregable', bold: true}, {text: 'Evidencia', bold: true}],
                        ...formatearTabla(tablaHTML)
                    ]
                }
            }
        ],
        footer: {
            columns: [
                'Herramienta Stage Gate / Maestria gestión de la innovación tecnológica cooperación y desarrollo regional', 
            ],
            margin: [20, 0] // Margen superior e inferior del footer
        },
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                margin: [0, 0, 0, 10]
            },
            // Define un estilo de texto con un hipervínculo
            link: {
                color: 'blue', // Color del enlace
                decoration: 'underline', // Subrayado del enlace
            }
        }
    };
    
    
    
    // Genera y descarga el PDF
    pdfMake.createPdf(documentDefinition).download('tabla.pdf');
    
})