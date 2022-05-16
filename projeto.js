var primeiroValor = parseInt(prompt("Digite o primeiro Valor"));
var segundoValor = parseInt(prompt("Digite o segundo Valor"));

var operacao = prompt(
  "Digite 1 pra fazer uma multiplicaçao,2 para divisão,3 para soma, 4 para subtração:"
);

if (operacao == 1) {
  var resultado = primeiroValor * segundoValor;
  document.write(
    "<h2>" + primeiroValor + " * " + segundoValor + " = " + resultado + "</h2>"
  );
} else if (operacao == 2) {
  var resultado = primeiroValor / segundoValor;
  document.write(
    "<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>"
  );
} else if (operacao == 3) {
  var resultado = primeiroValor + segundoValor;
  document.write(
    "<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>"
  );
} else if (operacao == 4) {
  var resultado = primeiroValor - segundoValor;
  document.write(
    "<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>"
  );
} else {
  document.write("<h2>Opção Inválida</h2>");
}
