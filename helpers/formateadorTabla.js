export function formatearTabla(tableHTML) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(tableHTML, 'text/html');
    const tableRows = doc.querySelectorAll('tr');
    const tableData = [];

    tableRows.forEach(row => {
        const rowData = [];
        row.querySelectorAll('td').forEach(cell => {
            rowData.push({ text: cell.innerText });
        });
        tableData.push(rowData);
    });

    return tableData;
}