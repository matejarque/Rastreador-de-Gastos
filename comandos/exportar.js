import fileSystem from 'fs';
import archivoJson from "../datos/gastos.json";

function exportarCSV() {
    // comprobar si el json esta vacio
    if (!archivoJson.length) {
        console.log("El archivo que desea exportar se encuentra vacío");
        return;
    }

    // extraer los encabezados para el CSV
    const encabezados = Object.keys(archivoJson[0]).join(",") + "\n";

    // Se convierte cada objeto a una fila de valores
    const filas = archivoJson.map(function(obj) {
        return Object.values(obj).join(",");
    }).join("\n");

    // se unen los encabezados con la fila para dar el formato
    const csv = encabezados + filas;

    // y se guarda el archivo
    fileSystem.writeFileSync("gastos.csv", csv);

    console.log("Archivo CSV 'gastos.csv' exportado correctamente.");
}
