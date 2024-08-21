/* busca por cada fila todas las casillas ocupadas, en caso de que esten ocupadas completamente
el programa eliminara esa fila y correra las filas ocupadas una casilla hacia abajo */
export function eliminarFilaOcupada(HEIGHT_GAME, casillasOcupadas, WIDTH_GAME) {
  let indice = HEIGHT_GAME - 1;
  while (indice != 0) {
    const filaOcupada = casillasOcupadas.filter(
      (element) => element.posY == indice
    );

    if (filaOcupada.length == WIDTH_GAME) {
      casillasOcupadas = casillasOcupadas.filter(
        (element) => element.posY != indice
      );

      console.log(casillasOcupadas);

      casillasOcupadas.forEach((element) => {
        if (element.posY < indice) {
          element.posY = element.posY + 1;
        }
      });
    } else {
      indice--;
    }
  }

  return casillasOcupadas;
}
