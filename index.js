function calculoMedia(n1, n2, n3) {
    const calculo = (n1 + n2 + n3) / 3;
    return calculo;
}

const notas = [
    {
        nome: 'Jorge',
        nota1: 5,
        nota2: 6,
        nota3: 4,
    }, {
        nome: 'Amelia',
        nota1: 8,
        nota2: 4,
        nota3: 5,
    }, {
        nome: 'Gwen',
        nota1: 8,
        nota2: 8,
        nota3: 9,
    }
];

for (let i = 0; i < notas.length; i++) {
    let aluno = notas[i];
    let nome = aluno.nome;
    let nota1 = aluno.nota1;
    let nota2 = aluno.nota2;
    let nota3 = aluno.nota3;

    let media = calculoMedia(nota1, nota2, nota3);
    let resultadoFinal = "Inconsistente! Verificar com os professores!";

    if (media < 5) {
        resultadoFinal = "está Reprovado";
    } else if (media <= 7) {
        resultadoFinal = "está em Recuperação";
    } else {
        resultadoFinal = "está Aprovado";
    }

    console.log(`A média final do aluno ${nome} é ${media.toFixed(2)} e ${resultadoFinal}`);
}
