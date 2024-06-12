const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Vamos deixar sua autoestima lá em cima?",
        alternativas: [
            {
                texto: "Sim!",
                afirmacao: "afirmação"
            },
            {
                texto: "Prefiro ficar assim!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Já marcou sua sobrancelha?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "afirmação"
            },
            {
                texto: "Ainda não.",
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
