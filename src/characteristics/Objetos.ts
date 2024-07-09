import { almacenDeNiveles } from "./LogicaDeMecanismos"

/* CALORES FIJOS (El valor sera fijo desde el primer renderizado)*/
export const Terreno = {
  Agua: 'agua',
  Bosque: 'bosque',
  Pradera: 'pradera',
  Desierto: 'desierto',
  Montana: 'montana'
}

export const Vegetacion = {
  Ninguna: 'niguna',
  Hierba: 'hierba',
  Arbustos: 'arbustos',
  Arboles: 'arboles'
}

export const Fauna = {
  Ninguna: 'ninguna',
  Herbivoros: 'herbivoros',
  Carnivoros: 'carnivoros',
  Omnivoros: 'omnivoros'
}

export const NutrienteSuelo = {
  Bajo: 'bajo',
  Medio: 'medio',
  Alto: 'alto'
}

export const Altitud = [
  nivel: almacenDeNiveles
]




/* CALORES VARIABLES (El se modificara pasado un determinado tiempo)*/

export const Temperatura = {
  grados: 0
}

export const Humedad = {
  humedad: 0
}

export const Precipitacion = {
  presipitacionLlovisna: 0
}

export const VelocidadDeViento = {
  velocidadDeViento: 0
}

export const LuzSolar = {
  tiempoSolar: 0
}

export const Estaciones = {
  
}
/* 



Horas de Luz Solar: Promedio de horas de luz solar diaria
*/