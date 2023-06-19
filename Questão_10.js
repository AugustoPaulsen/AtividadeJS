//Questão 10

function melhoresAlunos(estudantes) {
    let melhorMedia = -Infinity;
    let melhorAluno = "";
    
    for (let aluno in estudantes) {
      const notas = estudantes[aluno];
      const media = calcularMedia(notas);
  
    if (media > melhorMedia) {
        melhorMedia = media;
        melhorAluno = aluno;
      }
    }
    return { nome: melhorAluno, media: melhorMedia };
}

function calcularMedia(notas) {
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  return soma / notas.length;
}