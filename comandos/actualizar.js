import leerJSON from './funciones/modularizado.js';

function actualizarJSON(identificador, datos) {
    // validar y verificar si el identificador es un numero valido
    if (typeof identificador !== 'number') {
        console.log("Tipo de identificador inválido, debe ser un numero entero");
        return;
    }

    // Verifico que los datos ingresados sen de tipo objeto
    if (typeof datos !== 'object') {
        console.log("Tipo de datos incorrectos");
        return;
    }

    const objetoJson = leerJSON.leerJSON();

    // Recorre las propiedades del objeto JSON
    for (const clave in objetoJson) {
        if (objetoJson[clave].ID === identificador) {

            // Actualizar los datos del objeto si coincide el ID
            Object.assign(objetoJson[clave], datos);
            console.log("Datos actualizados");
            JSON.stringify(objetoJson);
            return;
        }
    }

    console.log("Identificador no encontrado");
}