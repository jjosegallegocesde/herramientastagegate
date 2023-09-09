export function formatearTabla(tableHTML) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(tableHTML, 'text/html');
    const tableRows = doc.querySelectorAll('tr');
    const tableData = [];

    tableRows.forEach(row => {
        const rowData = [];
        row.querySelectorAll('td').forEach(cell => {
            if (cell.innerText === "sin" || cell.innerText === "sin1" || cell.innerText === "sin2" || cell.innerText === "sin3" || cell.innerText === "sin4" || cell.innerText === "sin5"|| cell.innerText === "sin6") {
                rowData.push({ text: cell.innerText, fillColor: 'black' }); // Cambia 'black' al color que desees
            } else if (cell.innerText.startsWith('http://') || cell.innerText.startsWith('https://')) {
                // Si el valor de la celda es un URL, crea un objeto con un enlace
                rowData.push({ link: cell.innerText, text: cell.innerText, color: 'blue' }); // Texto azul para URLs
            } else {
                rowData.push({ text: cell.innerText });
            }
        });
        tableData.push(rowData);
    });

    return tableData;
}
