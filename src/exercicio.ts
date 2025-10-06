const calculoMetroQuadrado = (largura: number, comprimento: number): number => {
    return largura * comprimento;
}

const saudacao = (nome: string): string => {
    return `Olá, ${nome}!`;
}
console.log(saudacao("Erick"));
console.log(calculoMetroQuadrado(5, 10));
