# Personal Budget

## Descripción

Este programa permite registrar transacciones financieras de ingresos y egresos, proporcionando un resumen general del saldo y los movimientos realizados. Los datos se ingresan mediante `prompt()` y se muestran en la consola.

## Funcionalidades Principales

- Registrar múltiples transacciones de ingresos o egresos.
- Validar que el nombre y monto de la transacción sean correctos.
- Calcular el saldo total restando egresos de ingresos.
- Mostrar un resumen con la cantidad de movimientos, total de ingresos, total de egresos y saldo final.
- Alertar si el saldo es negativo.

## Funciones Implementadas

### 1. `calcularTotalSaldo()`

- Recorre el array de transacciones y suma los ingresos y egresos.

- Retorna un objeto con el total de ingresos, total de egresos y saldo final.

### 2. `mostrarResumen()`

- Llama a `calcularTotalSaldo()` y muestra los resultados en la consola.
- Indica si el saldo es positivo o negativo.

### 3. `registrarMovimiento()`

- Pide al usuario que ingrese transacciones mediante `prompt()`.
- Valida que el nombre y el monto sean correctos.
- Permite registrar múltiples transacciones en un bucle `while`.
- Pregunta al usuario si desea continuar o ver el resumen final.

## Reflexión sobre las estructuras de control de flujo

Las estructuras de control de flujo como `if/else` y `while` fueron fundamentales para la validación de datos y la iteración de registros.

- **`if/else`** ayudó a garantizar que los datos ingresados fueran correctos antes de agregarlos a la lista de transacciones.
- **`while`** permitió al usuario ingresar múltiples movimientos sin reiniciar el programa, mejorando la experiencia de uso.
- **Bucles `for`** facilitaron el cálculo del saldo total recorriendo la lista de transacciones.
