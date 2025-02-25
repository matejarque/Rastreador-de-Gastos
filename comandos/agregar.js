let i = 1; // se va a utilizar como generador de identificador único (ID)
const fileSystem = require('fs');

function agregarGasto(descripcion, gasto, categoria, fecha) {
    if (typeof(descripcion) !== 'string' || typeof(gasto) !== 'number' || typeof(categoria) !== 'string' || !(fecha instanceof Date)) {
        console.log("Error en el tipo de dato");
        return;
    }
    
    const newGasto = {
        "ID": i,
        "Descripcion": descripcion,
        "Categoria": categoria,
        "Gasto": gasto,
        "Fecha": fecha,
        "Estado": true
    };
    i++;
    
    const format = JSON.stringify(newGasto);
    fileSystem.writeFile("./datos/gastos.json", format, (error) => {
        if (error) throw error;
        console.log("Información recibida");
    });
}


