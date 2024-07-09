const Celdas = () => {
  const celdasArr: string[] = [];
  const numeroDeCeldas: number = 10000;

  for (let i = 0; i < numeroDeCeldas; i++) {
    celdasArr.push("[]");
  }

  return <>{celdasArr}</>;
};

export default Celdas;


/* 
Para crear el terreno se necesite una extension considerable, debemos tomar al menos cuatro indices 
*/