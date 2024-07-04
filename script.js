//let i = 0
//while (i < 11) {
//    console.log(i);
//    i++;
//}



//let i = 0;

//while (true) {
//    let imput = prompt("digite um número:");

//    let num = parseInt(imput)

//    if (isNaN(num)){
//        break
//    }
//    i += num
//}
//console.log(i);



//let num = Math.floor(Math.random() * 10) + 1;

//while (true) {
//    let ress = parseInt(prompt("Adivinhe o número entre 1 e 10: "));

//    if (ress === num) {
//        alert("Parabéns! Você acertou o número.");
//        break

//    }else{
//        alert("tente novamente:");
//    }
//}



//let saldo = 1000; // Saldo inicial
//
//function verSaldo() {
//  alert(`Seu saldo é: R$ ${saldo.toFixed(2)}`);
//}
//
//function depositar() {
//  let valor = parseFloat(prompt("Digite o valor para depositar:"));
//  if (!isNaN(valor) && valor > 0) {
//    saldo += valor;
//    alert(`Você depositou R$ ${valor.toFixed(2)}. Seu novo saldo é: R$ ${saldo.toFixed(2)}`);
//  } else {
//    alert("Valor inválido para depósito.");
//  }
//}
//
//function sacar() {
//  let valor = parseFloat(prompt("Digite o valor para sacar:"));
//  if (!isNaN(valor) && valor > 0) {
//    if (valor <= saldo) {
//      saldo -= valor;
//      alert(`Você sacou R$ ${valor.toFixed(2)}. Seu novo saldo é: R$ ${saldo.toFixed(2)}`);
//    } else {
//     alert("Saldo insuficiente para este saque.");
//    }
//  } else {
//    alert("Valor inválido para saque.");
//  }
//}
//
//function caixaEletronico() {
//  let opcao;
//  do {
//    opcao = prompt("Escolha uma opção:\n1. Ver Saldo\n2. Depositar\n3. Sacar\n4. Sair");
//    switch(opcao) {
//      case '1':
//        verSaldo();
//        break;
//      case '2':
//        depositar();
//        break;
//      case '3':
//        sacar();
//        break;
//      case '4':
//        alert("Obrigado por usar o caixa eletrônico.");
//        break;
//      default:
//        alert("Opção inválida. Tente novamente.");
//    }
//  } while(opcao !== '4');
//}
//
//caixaEletronico();
