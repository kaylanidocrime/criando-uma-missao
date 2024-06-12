const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Já agendou sua sobrancelha?",
        alternativas: [
            texto: "Sim!",
            afirmacao: "Ainda não!"
        ]
    },
    {
        enunciado: "Qual método vc mais gosta?",
        alternativas: [
            texto: "Pinça.",
           afirmacao: "Cera."
        ]
    },
    {
        enunciado: "Quem também ama a sensação pós fazer a sobrancelha?",
        alternativas: [
            texto: "Eu amoo!!",
            afirmacao: "Prefiro taturana!"
        ]
    },
    {
        enunciado: "Como você prefere a henna?",
        alternativas: [
            texto: "Natural.",
            afirmacao: "Marcada."
        ]
    },
    {
        enunciado: "Qual a melhor opção para você?",
        alternativas: [
           texto: "Henna.",
            afirmacao: "Micropigmentação."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}

mostraPergunta();
