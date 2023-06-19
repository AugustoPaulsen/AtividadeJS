//Questão 4

function inverterValor(parametro) {
    if (typeof parametro === 'boolean') {
      return !parametro;
    } else if (typeof parametro === 'number') {
      return -parametro;
    } else {
      return "Booleano ou Número esperados, mas o parâmetro é do tipo " + typeof parametro;
    }
  }
  console.log(inverterValor(43))