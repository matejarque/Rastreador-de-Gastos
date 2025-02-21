# 💰 Rastreador de Gastos

Una aplicación sencilla de seguimiento de gastos para gestionar tus finanzas. 📊 Permite agregar ➕, eliminar ❌, actualizar 🔄 y ver 👀 gastos, además de proporcionar un resumen 📈 detallado.

---

## ✨ Características
- ➕ Agregar un gasto con una descripción y un monto.
- 🔄 Actualizar un gasto existente.
- ❌ Eliminar un gasto.
- 👀 Ver todos los gastos registrados.
- 📊 Obtener un resumen de todos los gastos.
- 📅 Consultar un resumen de gastos de un mes específico del año en curso.

## 🚀 Características Adicionales (Opcionales)
- 🏷️ Categorizar los gastos y filtrarlos por categoría.
- 💸 Establecer un presupuesto mensual con advertencias ⚠️ si se supera.
- 📂 Exportar los gastos a un archivo CSV para su análisis.

---



## ▶️ Uso
Ejecuta la aplicación desde la línea de comandos:
```sh
node gastos.js
```

### 📝 Comandos Disponibles
| 📌 Comando                 | 📖 Descripción                              |
| ----------------------- | ---------------------------------------- |
| `agregar`               | ➕ Agrega un gasto con descripción y monto. |
| `actualizar`            | 🔄 Modifica un gasto existente.             |
| `eliminar`              | ❌ Elimina un gasto por su ID.              |
| `ver`                   | 👀 Muestra todos los gastos registrados.    |
| `resumen`               | 📊 Muestra un resumen de los gastos.        |
| `resumen-mensual <mes>` | 📅 Muestra el resumen de un mes específico. |
| `exportar`              | 📂 Guarda los gastos en un archivo CSV.     |

### 🔍 Ejemplos
✅ **Agregar un gasto:**
```sh
node gastos.js agregar "Cena en restaurante" 25.50
```

👀 **Ver todos los gastos:**
```sh
node gastos.js ver
```

📅 **Obtener resumen mensual de marzo:**
```sh
node gastos.js resumen-mensual 3
```

📂 **Exportar gastos a CSV:**
```sh
node gastos.js exportar
```

---


🎯 **¡Administra tus finanzas de manera eficiente con el Rastreador de Gastos!** 🚀

