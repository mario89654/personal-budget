#  Aplicación de Gestión de Finanzas Personales

Este proyecto es una aplicación web interactiva que permite a los usuarios registrar sus transacciones financieras, visualizar su saldo total, filtrar movimientos específicos y buscar transacciones por nombre. Utiliza **JavaScript** y el paradigma **funcional** con métodos como `map()`, `filter()` y `find()`, además de manipulación del DOM para actualizar la UI.

---

## **Funciones principales**

- ✅ Registrar ingresos y egresos.
- ✅ Calcular el saldo total.
- ✅ Filtrar egresos mayores a $100.
- ✅ Obtener solo los nombres de las transacciones con `map()`.
- ✅ Buscar transacciones por nombre usando `find()`.
- ✅ Mostrar resultados tanto en consola como en la UI.

---

## **Comparación entre paradigmas: Imperativo vs. Funcional**

Durante el desarrollo de esta aplicación, se aplicaron ambos paradigmas de programación:

| Característica          | Paradigma Imperativo  | Paradigma Funcional  |
|------------------------|------------------------|------------------------|
| **Definición** | Indica "cómo" hacer las cosas, describiendo cada paso. | Indica "qué" se quiere lograr, usando funciones puras. |
| **Ejemplo en el código** | Uso de bucles `for` para recorrer y calcular totales. | Uso de `map()`, `filter()` y `find()` para transformar datos. |
| **Mutabilidad** | Modifica variables directamente. | Evita modificar datos, prefiere devolver nuevos valores. |
| **Legibilidad** | Más detallado pero puede ser difícil de leer. | Código más corto y declarativo, fácil de entender. |
| **Escalabilidad** | Puede volverse más complejo con el tiempo. | Se enfoca en funciones reutilizables, mejor mantenimiento. |

 **Ejemplo en nuestro código:**  

- En lugar de recorrer manualmente la lista con `for`, utilizamos **`map()`** para extraer los nombres de las transacciones y **`filter()`** para
seleccionar los egresos mayores a $100.  
- También evitamos modificar datos directamente, devolviendo nuevos arrays en cada función.

---

## **Reflexión sobre el principio DRY**

El principio **DRY (Don't Repeat Yourself)** se aplicó de la siguiente manera:

1. **Uso de funciones reutilizables**  
   - Se crearon funciones como `obtenerNombresTransacciones()` y `obtenerEgresosMayoresA100()` en lugar de repetir la lógica cada vez que se necesitaban estos datos.
   - Esto permitió que cualquier cambio en la estructura de datos se hiciera en un solo lugar.

2. **Separación de responsabilidades**  
   - Se dividió el código en funciones pequeñas y específicas:  
     ✅ `calcularTotalSaldo()` → Calcula ingresos, egresos y saldo.  
     ✅ `mostrarResumen()` → Genera el resumen en la UI.  
     ✅ `actualizarListaTransacciones()` → Renderiza los movimientos en la lista.  
     ✅ `buscarTransaccionPorNombre(nombre)` → Busca movimientos específicos con `find()`.  

3. **Uso de métodos nativos de JavaScript**  
   - Se evitó usar `for` innecesarios gracias a `map()`, `filter()` y `find()`, reduciendo líneas de código y evitando repetir lógica.

### Beneficios obtenidos al aplicar DRY

- **Código más corto y fácil de leer.**  
- **Menos errores al modificar funciones, ya que son reutilizables.**  
- **Mayor escalabilidad y mantenimiento a largo plazo.**  

---

## **Tecnologías utilizadas**

- HTML5
- CSS3
- JavaScript (ES6+)
- Métodos funcionales: `map()`, `filter()`, `find()`

---
