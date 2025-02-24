import importacionFuncionLeer  from './funciones/modularizado.js';

//Crear la funcion isEmpty, para luego validar si el objeto esta vacio
    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    function eliminadoLogico(identificador) {
        const json = importacionFuncionLeer.leerJSON();
    // Comprobar si el json es un objeto, si no, hay que revisar la funcion leerJSON
    if (typeof json !== 'object') {
        console.log("Error en el JSON-TIPO DE DATO INCORRECTO");
        return;
    }

    // LLamar a la funcion creada anteriormente para comprobar si el JSON tiene objetos
    if (isEmpty(json)) {
        console.log("No se puede modificar, no hay datos guardados");
        return;
    }
    
        // Recorrer todo el json, si se encuentra el identificador se modifica el estado
    for (const key in json) {
        if (json[key].ID === identificador) {
            json[key].Estado = false; 
            console.log("Elemento modificado");
            return;
        }
    }

        console.log("Identificador no encontrado");
    }