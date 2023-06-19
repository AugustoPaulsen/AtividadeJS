//Questão 6

function repetir(elemento, quantidade) {
    if (quantidade <= 0) {
      return [];
    }
  
    const resultado = [];
  
    for (let i = 0; i < quantidade; i++) {
      resultado.push(elemento);
    }
  
    return resultado;
  }
  console.log(repetir("eita como to de boa", 4))