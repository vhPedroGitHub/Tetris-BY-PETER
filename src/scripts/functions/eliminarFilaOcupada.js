/* busca por cada fila todas las casillas ocupadas, en caso de que esten ocupadas completamente
el programa eliminara esa fila y correra las filas ocupadas una casilla hacia abajo */
export function eliminarFilaOcupada(filaY, casillasOcupadas, grillas) {
  const filaOcupada = casillasOcupadas.filter(
    (element) => element.posY == filaY
  );

  if (filaOcupada.length == 15) {
    casillasOcupadas = casillasOcupadas.filter(
      (element) => element.posY < filaY
    );

    // reorganizamos las casillas para que pasen a estar ocupadas las que deben de estar ocupadas
    grillas.forEach((element) => {
      if (
        casillasOcupadas.some(
          (e) => e.posY + 1 == element.posY && e.posX == element.posX
        )
      ) {
        element.color = "blue";
        element.ocupado = true;
      } else {
        element.ocupado = false;
        element.color = "green";
      }
    });
    return true;
  }

  return false;
}
