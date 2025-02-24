const fileSystem = require('fs')
//Funcion para leer los datos del json y poder realizar algunos cambios.
function leerJson(){
    fileSystem.readFile("./datos/gastos.json", function(error, data){
        if((error)){
            console.log("No se encuentra el archivo");
            return;
        }
        try {
            const gastos = JSON.parse(data);
            return gastos;
        } catch (parseError) {
            console.error("Error al parsear el JSON:", parseError);
        }
    })
}
