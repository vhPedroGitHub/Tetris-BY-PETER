export function obtenerNumeroAleatorio(numInferior, numSuperior) {
  return Math.floor(Math.random() * (numSuperior - numInferior) + numInferior);
}
