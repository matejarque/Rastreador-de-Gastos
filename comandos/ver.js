import archivoJson from "../datos/gastos.json";

function verDatos() {
    for (let i = 0; i < archivoJson.length; i++) {
        let gasto = archivoJson[i];

        console.log("Descripcion: " + gasto.ID);
        console.log("Descripcion: " + gasto.Descripcion);
        console.log("Categoria: " + gasto.Categoria);
        console.log("Gasto: " + gasto.Gasto);
        console.log("Fecha: " + gasto.Fecha);
        console.log("Estado: " + gasto.Estado);

        
        if (i < archivoJson.length - 1) {
            console.log("-----------------------------");
        }
    }
}



/** CONTENIDO DEL JSON
 *   "ID": i,
        "Descripcion": descripcion,
        "Categoria": categoria,
        "Gasto": gasto,
        "Fecha": fecha,
        "Estado": true
 */
