// console.log("<------- Personal Budget -------->");

// const transacciones = [
//   { transaccion: "Salario", tipoDeTransaccion: "Ingreso", monto: 2000 },
//   { transaccion: "Venta de un producto", tipoDeTransaccion: "Ingreso", monto: 500 },
//   { transaccion: "Pago de alquiler", tipoDeTransaccion: "Egreso", monto: 800 },
//   { transaccion: "Compra de comestibles", tipoDeTransaccion: "Egreso", monto: 150 }
// ];

// function registrarIngresoOEgreso() {
//   while (true) {
//     let transaccion = prompt("Ingrese el nombre de la transacción:");
//     while (!transaccion) {
//       alert("El nombre de la transacción no puede estar vacío.");
//       transaccion = prompt("Ingrese el nombre de la transacción:");
//     }

//     let tipoDeTransaccion;
//     while (true) {
//       const tipo = prompt(
//         "Escoja el tipo de transacción:\n1) Ingreso\n2) Egreso\n\nIngrese el número de la opción:"
//       );
//       if (tipo === "1") {
//         tipoDeTransaccion = "Ingreso";
//         break;
//       } else if (tipo === "2") {
//         tipoDeTransaccion = "Egreso";
//         break;
//       } else {
//         alert("Opción inválida. Debe ingresar 1 para Ingreso o 2 para Egreso.");
//       }
//     }

//     let monto;
//     while (true) {
//       monto = parseFloat(prompt("Ingrese el monto de la transacción:"));
//       if (!isNaN(monto) && monto > 0) {
//         break;
//       } else {
//         alert("El monto debe ser un número válido mayor a 0.");
//       }
//     }

//     transacciones.push({ transaccion, tipoDeTransaccion, monto });
//     console.log("Transacción registrada:", { transaccion, tipoDeTransaccion, monto });

//     const confirmacion = confirm("¿Desea agregar otra transacción?");
//     if (!confirmacion) {
//       break;
//     }
//   }
// }

// registrarIngresoOEgreso();
// console.log("Lista de transacciones registradas:", transacciones);
document.addEventListener("DOMContentLoaded", () => {
  const transacciones = [
      { transaccion: "Salario", tipoDeTransaccion: "Ingreso", monto: 2000 },
      { transaccion: "Alquiler", tipoDeTransaccion: "Egreso", monto: 800 },
      { transaccion: "Mercado", tipoDeTransaccion: "Egreso", monto: 400 }
  ];

  const form = document.getElementById("transactionForm");
  const transaccionInput = document.getElementById("transaccion");
  const tipoInput = document.getElementById("tipoDeTransaccion");
  const montoInput = document.getElementById("monto");
  const errorMessage = document.getElementById("errorMessage");
  const transaccionesList = document.getElementById("transaccionesList");

  function calcularTotalSaldo() {
      let totalIngresos = 0;
      let totalEgresos = 0;

      for (const transaccion of transacciones) {
          if (transaccion.tipoDeTransaccion === "Ingreso") {
              totalIngresos += transaccion.monto;
          } else {
              totalEgresos += transaccion.monto;
          }
      }

      return { totalIngresos, totalEgresos, saldoTotal: totalIngresos - totalEgresos };
  }

  function mostrarResumen() {
      const { totalIngresos, totalEgresos, saldoTotal } = calcularTotalSaldo();
      
      let resumenHTML = `
          <h3>📊 Resumen General</h3>
          <p>🔹 Movimientos registrados: ${transacciones.length}</p>
          <p>💰 Total de Ingresos: $${totalIngresos.toFixed(2)}</p>
          <p>💸 Total de Egresos: $${totalEgresos.toFixed(2)}</p>
          <p>💵 Saldo Total: $${saldoTotal.toFixed(2)}</p>
      `;

      if (saldoTotal < 0) {
          resumenHTML += `<p style="color:red;">⚠️ ¡Cuidado! Estás en saldo negativo.</p>`;
      } else {
          resumenHTML += `<p style="color:green;">✅ ¡Bien! Tienes un saldo positivo.</p>`;
      }

      document.getElementById("resumen").innerHTML = resumenHTML;
  }

  function actualizarListaTransacciones() {
      transaccionesList.innerHTML = "";
      transacciones.forEach(({ transaccion, tipoDeTransaccion, monto }) => {
          const li = document.createElement("li");
          li.textContent = `${transaccion} - ${tipoDeTransaccion}: $${monto}`;
          transaccionesList.appendChild(li);
      });
      mostrarResumen();
  }

  form.addEventListener("submit", (event) => {
      event.preventDefault();

      const transaccion = transaccionInput.value.trim();
      const tipoDeTransaccion = tipoInput.value;
      const monto = parseFloat(montoInput.value);

      if (!transaccion || isNaN(monto) || monto <= 0) {
          errorMessage.textContent = "❌ Error: Ingrese datos válidos.";
          return;
      }

      errorMessage.textContent = "";
      transacciones.push({ transaccion, tipoDeTransaccion, monto });

      transaccionInput.value = "";
      montoInput.value = "";

      actualizarListaTransacciones();
  });

  actualizarListaTransacciones();
});
