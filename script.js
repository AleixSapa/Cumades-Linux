function copiarAlPortapapers(boto,Numero) {
    var QueFilaCopias=Numero
    var ConvercioDeQueFilaQueCopias=QueFilaCopias-1
    // Troba la fila del botó clicat
    var filaActual = boto.parentElement.parentElement;
    // Agafa el contingut de la cel·la del costat (per exemple, la primera cel·la)
    var textACopiar = filaActual.cells[ConvercioDeQueFilaQueCopias].innerText;

    // Utilitza l'API del portapapers per copiar
    navigator.clipboard.writeText(textACopiar)
        .then(() => {
            alert(//"S'ha copiat al portapapers: "+
             textACopiar);
        })
        .catch(err => {
            console.error("Error al copiar al portapapers: ", err);
            alert("Hi ha hagut un error al copiar.");
        });
}

const searchInput = document.getElementById("searchInput");
const tableRows = document.querySelectorAll("tbody tr");

searchInput.addEventListener("input", function () {
    const filter = searchInput.value.toLowerCase();
    tableRows.forEach(row => {
        const cells = row.querySelectorAll("td");
        const rowText = Array.from(cells).map(cell => cell.textContent.toLowerCase()).join(" ");
        row.style.display = rowText.includes(filter) ? "" : "none";
    });
});