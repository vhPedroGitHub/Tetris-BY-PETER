export function grillasOcupadas(grillas, casillasAOcupar) {
  grillas.forEach((element) => {
    const posX = element.posX;
    const posY = element.posY;
    if (casillasAOcupar.some((e) => e[0] == posX && e[1] == posY)) {
      element.ocupado = true;
    }
  });
}
