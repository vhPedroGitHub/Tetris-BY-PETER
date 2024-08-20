export function obtenerElementoAleatorioArray(array) {
  // Verifica si el array no está vacío
  if (array.length === 0) {
    return null; // O puedes lanzar un error si prefieres
  }

  // Genera un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * array.length);

  // Devuelve el elemento en el índice aleatorio
  return array[indiceAleatorio];
}
