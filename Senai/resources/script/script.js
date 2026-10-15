// // arquivo != pasta 

// // arrays === lista

// let compras = ["ovo","arroz","feijão branco","sabao","sabao em po","sabao em barra",]
// //
// let busca = prompt("digite o item a busca");

//     let listaFiltrada = compras.find(compra => 
//     compra.toLowerCase() === busca.toLocaleUpperCase().
//     trim()    
//     )

//     let encontrar = compras.indexOf(listaFiltrada)
//     console.log(encontrar);



// let users = ["pedro","ana","joana","Diego","Davi messias","cristiano"];

// let searchUser = prompt("digite o nome  do usuário que  deseja busca:")

 // Fila de atendimento de um banco
// Criando um array com 7 clientes
let fila = [
    "Ana",
    "Bruno",
    "Carlos",
    "Daniela",
    "Eduardo",
    "Fernanda",
    "Gabriel"
];

// Exibe a fila inicial
console.log("Fila inicial:", fila);

// Adiciona um cliente comum no final da fila usando push()
fila.push("Helena");
console.log("Após adicionar um cliente comum (push):", fila);

// Adiciona um cliente prioritário no início da fila usando unshift()
fila.unshift("João - Prioritário");
console.log("Após adicionar um cliente prioritário (unshift):", fila);

// Atende o primeiro cliente da fila usando shift()
let clienteAtendido = fila.shift();
console.log("Cliente atendido:", clienteAtendido);
console.log("Fila após o atendimento (shift):", fila);

// Remove o último cliente, simulando uma desistência, usando pop()
let clienteDesistente = fila.pop();
console.log("Cliente que desistiu:", clienteDesistente);
console.log("Fila após a desistência (pop):", fila);