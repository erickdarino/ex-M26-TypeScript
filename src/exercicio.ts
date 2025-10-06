const calculoIMC = (peso: number, altura: number): number => {
    return peso / (altura * altura);
}

const saudacao = (nome: string): string => {
    return `Olá, ${nome}!`;
}
console.log(saudacao("Erick"));
console.log(`Seu IMC é: ${calculoIMC(85, 1.70).toFixed(2)}`);