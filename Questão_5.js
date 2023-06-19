//Questão 5

function multiSemOperador(num1, num2) {
    let resultado = 0;
  
    for (let i = 0; i < num2; i++) {
      resultado += num1;
    }
  
    return resultado;
  }
  console.log(multiSemOperador(5,6))