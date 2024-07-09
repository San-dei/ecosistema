/* Altitud */
const bajoNivelDeMar: number = -10994;
const altoNivelDeMar: number = 8848;


interface Nivel {
  [key: string]: number;
}

export const almacenDeNiveles: Nivel[] = [];

for (let i = bajoNivelDeMar; i < altoNivelDeMar; i++) {
  let nivel = `nivel${i}`;
  almacenDeNiveles.push({
    [nivel]: i
  });
}

