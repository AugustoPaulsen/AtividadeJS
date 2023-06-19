//Questão 3

function nomeMes(num) {
    if (num < 1 || num > 12) {
      return "Erro: O número do mês deve estar entre 1 e 12.";
    }
    const nomesDosMeses = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    
    return nomesDosMeses[num - 1];
  }
  console.log(nomeMes(5))