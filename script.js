const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Já marcou sua sobrancelha?",
        alternativas: [
            {
                texto: "Sim!",
                afirmacao: "afirmação"
            },
            {
                texto: "Ainda não!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual modelo de sobrancelha vc acha melhor?",
        alternativas: [
            {
                texto: "Arqueada.",
                afirmacao: "afirmação"
            },
            {
                texto: "Curvada.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual método vc prefere?",
        alternativas: [
            {
                texto: "Pinça.",
                afirmacao: "afirmação"
            },
            {
                texto: "Cera.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual procedimento vc acha melhor?",
        alternativas: [
            {
                texto: "Henna.",
                afirmacao: "afirmação"
            },
            {
                texto: "micropigmentação.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Como vc prefere a henna? ",
        alternativas: [
            {
                texto: "Natural.",
                afirmacao: "afirmação"
            },
            {
                texto: "Marcada.",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
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

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
