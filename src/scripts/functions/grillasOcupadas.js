import { Grilla } from "../Clases/Grillas";
export function grillasOcupadas(grillas, casillasAOcupar, grillasOcupadas) {
  grillas.forEach((element) => {
    const posX = element.posX;
    const posY = element.posY;
    if (casillasAOcupar.some((e) => e[0] == posX && e[1] == posY)) {
      grillasOcupadas.push(
        new Grilla(element.posX, element.posY, "green", true)
      );
    }
  });
  return grillasOcupadas;
}
