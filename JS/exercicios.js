// Comentário em JavaScript

/* 
Comentario de múltiplas linhas
no javaScript
*/


/* 

Parte 1: Fundamentos e Sintaxe Básica
Conceito: let, const e var
var: É a forma antiga de declarar variáveis. Ela tem um "escopo de função", o que pode causar comportamentos inesperados. Evite usar var.

let: Permite que você declare variáveis que podem ter seu valor alterado. Ela tem "escopo de bloco" (só existe dentro do bloco {} onde foi criada).

const: Permite declarar variáveis cujo valor não pode ser reatribuído. Também tem "escopo de bloco". É a escolha ideal para a maioria dos casos, pois torna o código mais previsível.

*/

// Exemplo de let: o valor pode ser alterado.
let contador = 10;
console.log(contador); // Saída: 10
contador = 11;
console.log(contador); // Saída: 11

// Exemplo de const: tentar reatribuir gera um erro.
const nome = "Maria";
console.log(nome); // Saída: Maria
// A linha abaixo causará um erro: TypeError: Assignment to constant variable.
// nome = "Joana"; 

// Exemplo de escopo de bloco
if (true) {
  let dentroDoIf = "Eu só existo aqui dentro";
  const tambemDentroDoIf = "Eu também!";
  console.log(dentroDoIf); // Funciona
}
// A linha abaixo causará um erro: ReferenceError: dentroDoIf is not defined
// console.log(dentroDoIf);

/* 
Exercício 1: Calculadora de Média
Objetivo: Crie um programa que calcule a média de três notas e exiba uma mensagem indicando se o aluno foi aprovado (média >= 7) ou reprovado.
*/

// --- EXERCÍCIO 1: CALCULADORA DE MÉDIA ---

// 1. Declare três constantes para as notas.
const nota1 = 8.5;
const nota2 = 6.0;
const nota3 = 7.5;

// 2. Declare uma constante para o número de provas.
const numeroDeProvas = 3;

// 3. Calcule a média. A média é a soma das notas dividida pelo número de provas.
const media = (nota1 + nota2 + nota3) / numeroDeProvas;

// 4. Declare uma constante para a nota de corte (nota mínima para aprovação).
const notaDeCorte = 7.0;

// 5. Use let para a mensagem final, pois ela pode mudar.
let mensagemFinal = "";

// 6. Use um if/else para verificar se a média é maior ou igual à nota de corte.
if (media >= notaDeCorte) {
  mensagemFinal = "Parabéns, você foi aprovado(a)!";
} else {
  mensagemFinal = "Que pena, você foi reprovado(a). Tente novamente.";
}

// 7. Imprima os resultados no console.
console.log(`Sua média foi: ${media.toFixed(2)}`); // toFixed(2) formata para 2 casas decimais
console.log(mensagemFinal);