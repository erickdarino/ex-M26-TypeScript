"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculoIMC = (peso, altura) => {
    return peso / (altura * altura);
};
const saudacao = (nome) => {
    return `Olá, ${nome}!`;
};
console.log(saudacao("Erick"));
console.log(`Seu IMC é: ${calculoIMC(85, 1.70).toFixed(2)}`);
//# sourceMappingURL=exercicio.js.map