import { readFileSync, writeFileSync } from "node:fs";

const leerRegistros = async () => {
  try {
    const data = readFileSync("citas.json", "utf-8");
    console.log(data);
    return JSON.parse(data);
  } catch (error) {
    console.log("Error leyendo las citas: " + error);
  }
};

const registrar = async (datos) => {
  try {
    const data = await leerRegistros();
    data.push({
      nombre: datos[0],
      edad: datos[1],
      animal: datos[2],
      color: datos[3],
      enfermedad: datos[4],
    });
    writeFileSync("citas.json", JSON.stringify(data));
  } catch (error) {
    console.log(
      "Fallo en el registro de la mascota, intente nuevamente." + error
    );
  }
};

leerRegistros();

export { registrar, leerRegistros };
