//Questão 2

function idadeEmDias(idade) {
    if (idade < 0) {
        return "Erro: A idade não pode ser um número negativo.";
      }
      
    const diasPorAno = 365;
      
     
    const diasDeVida = idade * diasPorAno;
      
    return diasDeVida;
    }
    console.log(idadeEmDias(19))