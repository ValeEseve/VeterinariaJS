import { readFileSync, writeFileSync } from "node:fs";

const leerRegistros = async () => {
  try {
    const data = readFileSync("citas.json", "utf-8");
    return data;
  } catch (error) {
    console.log("Error leyendo las citas: " + error);
    return "[]";
  }
};

const mostrarLista = async () => {
  try {
    const data = await leerRegistros()
    JSON.parse(data).forEach((cita) => {
      console.log(`
        ------------------------------
          Nombre: ${cita.nombre}
          Edad: ${cita.edad}
          Animal: ${cita.animal}
          Color: ${cita.color}
          Enfermedad: ${cita.enfermedad}
        ------------------------------
        `);
    });
  } catch (error) {
    console.log("Error al mostrar las citas: " + error);
    return [];
  }
}

const registrar = async (datos) => {
  try {
    const data = await leerRegistros();
    const citas = JSON.parse(data || "[]");
    citas.push({
      nombre: datos[1],
      edad: datos[2],
      animal: datos[3],
      color: datos[4],
      enfermedad: datos[5],
    });
    writeFileSync("citas.json", JSON.stringify(citas));
    console.log(`
        ¡Mascota ${datos[1]} agregada!
      `);
  } catch (error) {
    console.log(
      "Fallo en el registro de la mascota, intente nuevamente. " + error
    );
  };
};

export { registrar, leerRegistros, mostrarLista };
