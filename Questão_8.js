//Questão 8

function somarNumeros(array) {
    let soma = 0;
    
    for (let i = 0; i < array.length; i++) {
        
    if (typeof array[i] === 'number') {
          soma += array[i];
        }
        return soma;
      }
    }
    
      
          
         
   