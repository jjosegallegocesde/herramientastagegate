export function obtenerTabla(jsonData) {
    let tableHTML = '<table border="1">';
    for (const key in jsonData) {
        if (jsonData.hasOwnProperty(key)) {
            tableHTML += '<tr>';
            tableHTML += `<td>${key}</td>`;
            tableHTML += `<td>${jsonData[key]}</td>`;
            tableHTML += '</tr>';
        }
    }
    tableHTML += '</table>';
    return tableHTML;
}