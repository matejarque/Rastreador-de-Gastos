const fileSystem = require('fs');
const readlineSync = require('readline-sync');
import Agregar from './comandos/Actualizar.js';

// Función para leer el JSON
function leerJson() {
    try {
        const data = fileSystem.readFileSync("./datos/gastos.json", "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error al leer el archivo:", error);
        return [];
    }
}

// Función para mostrar el menú y capturar la opción del usuario
function menuOpcion() {
    console.log("\nCOMANDOS DISPONIBLES:");
    console.log("1) Agregar");
    console.log("2) Actualizar");
    console.log("3) Eliminar");
    console.log("4) Ver gastos");
    console.log("5) Exportar");
    console.log("6) Salir");

    let opcion = readlineSync.questionInt("Ingrese una opción: ");
    return opcion;
}

// Función principal del programa
function inicioDelPrograma() {
    let num;
    
    do {
        num = menuOpcion();
        
        switch (num) {
            case 1:
                console.log("Ingrese datos necesarios:");
                let descripcion = readlineSync.question("Descripcion: ");
                let gasto = readlineSync.questionFloat("Gasto: ");
                let categoria = readlineSync.question("Categoria: ");
                let fecha = readlineSync.question("Fecha (YYYY-MM-DD): ");
                
                Agregar.agregarGasto(descripcion, gasto, categoria, fecha);
                console.log("Gasto agregado correctamente.");
                break;

            case 2:
                console.log("Función de actualización en desarrollo...");
                break;

            case 3:
                console.log("Función de eliminación en desarrollo...");
                break;

            case 4:
                let gastos = leerJson();
                console.log("Listado de gastos:", gastos);
                break;

            case 5:
                console.log("Función de exportación en desarrollo...");
                break;

            case 6:
                console.log("Saliendo del programa...");
                break;

            default:
                console.log("Opción no válida. Intente nuevamente.");
        }
    } while (num !== 6);
}
