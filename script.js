let rs = require("readline-sync")

console.log("Digite sua altura em metros")

let altura = rs.questionFloat()

console.log("Digite seu peso em quilos")

let peso = rs.questionFloat()

let IMC = peso/(altura*altura)

console.log("Seu IMC é " + IMC + ".")

