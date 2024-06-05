const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Já agendou sua sobrancelha?",
        alternativas: [
            "Sim!",
            "Ainda não!"
        ]
    },
    {
        enunciado: "Qual método vc mais gosta?",
        alternativas: [
            "Pinça.",
            "Cera.",
        ]
    },
    {
        enunciado: "Quem também ama a sensação pós fazer a sobrancelha?",
        alternativas: [
            "Eu amoo!!",
            "Prefiro taturana!"
        ]
    },
    {
        enunciado: "Como você prefere a henna?",
        alternativas: [
            "Natural.",
            "Marcada."
        ]
    },
    {
        enunciado: "Qual a melhor opção para você?",
        alternativas: [
           "Henna.",
            "Micropigmentação."
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();
