let totalDeDias = 30;

let qtdAnos, qtdMeses;

qtdAnos = parseInt(totalDeDias / 365);
totalDeDias= totalDeDias - (qtdAnos * 365);

qtdMeses= parseInt(totalDeDias / 30);                         ;
totalDeDias=  totalDeDias - (qtdMeses * 30);
console.log(qtdAnos, qtdMeses, totalDeDias);

let resultado = (qtdAnos + " ano(s) " + '\n' + 
qtdMeses +" mes(es)" + '\n' +
totalDeDias + " dia(s)");

print(resultado);