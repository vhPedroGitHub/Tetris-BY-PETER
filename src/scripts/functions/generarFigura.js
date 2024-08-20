import { obtenerElementoAleatorioArray } from "./generarArrayAleatorio";
import { obtenerNumeroAleatorio } from "./generarNumeroAleatorio";
import { Cuadrado } from "../Clases/Cuadrado";
import { Varilla } from "../Clases/Varilla";
import { T } from "../Clases/T";
import { LPequena } from "../Clases/LPequena";
import { LGrande } from "../Clases/LGrande";

export function obtenerFigura(figuras) {
  const figura = obtenerElementoAleatorioArray(figuras);
  if (figura == "cuadrado") {
    return new Cuadrado(
      obtenerNumeroAleatorio(3, 12),
      obtenerNumeroAleatorio(-5, 0),
      2,
      2,
      0
    );
  } else if (figura == "varilla") {
    return new Varilla(
      obtenerNumeroAleatorio(0, 15),
      obtenerNumeroAleatorio(-5, 0),
      4,
      0,
      0
    );
  } else if (figura == "T") {
    return new T(
      obtenerNumeroAleatorio(2, 13),
      obtenerNumeroAleatorio(-5, 0),
      2,
      1,
      1
    );
  } else if (figura == "lPequena") {
    return new LPequena(
      obtenerNumeroAleatorio(2, 13),
      obtenerNumeroAleatorio(-5, 0),
      1,
      0,
      1
    );
  } else {
    return new LGrande(
      obtenerNumeroAleatorio(2, 13),
      obtenerNumeroAleatorio(-5, 0),
      2,
      0,
      1
    );
  }
}
