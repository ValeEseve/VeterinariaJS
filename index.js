import { registrar, leerRegistros, mostrarLista } from "./operaciones.js";

const arg = process.argv.slice(2);

(async function main() {
  switch (arg[0]) {
    case "registrar":
      await registrar(arg);
      break;
    case "leer":
      await mostrarLista();
      break;
    default:
      console.log("Opción no válida");
  }
})();
