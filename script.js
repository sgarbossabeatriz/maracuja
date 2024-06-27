const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A evolução da pandemia de COVID-19 tem sido complexa e variada em diferentes partes do mundo. Desde seu surgimento em Wuhan, China, no final de 2019, o vírus se espalhou rapidamente, levando a diferentes ondas e padrões de transmissão em várias regiões.",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "A evolução da pandemia de COVID-19 tem sido marcada pela emergência de várias variantes do vírus  "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "SARS-CoV-2, cada uma com impactos distintos na transmissibilidade e na eficácia das medidas de controle"
            }
        ]
    },
    {
        enunciado: "Ao longo do relato histórico, seria importante destacar não apenas a evolução da pandemia em si, mas também a forma como a ciência e a medicina têm respondido a essas variantes em constante mutação.",
        alternativas: [
            {
                texto: "Como as vacinas contra o COVID-19 estão sendo adaptadas para lidar com as variantes emergentes do vírus?",
                afirmacao: " Desde as primeiras ondas até variantes recentes como Delta e Ômicron, os países têm "
            },
            
            
            
            
        ]
    },
    {
        enunciado: " As vacinas contra a COVID-19 estão sendo adaptadas para lidar com as variantes emergentes do vírus de várias maneiras: atualizações das vacinas existentes para melhorar sua eficácia contra as variantes, estudos para avaliar a eficácia das vacinas contra as variantes, desenvolvimento de vacinas multivalentes e consideração de doses de reforço. Essas medidas visam garantir uma proteção contínua contra a evolução do SARS-CoV-2. ",
        alternativas: [    
            {
                texto: "Quais são as principais medidas tomadas pelos países para conter a propagação das novas variantes?",
                afirmacao: "enfrentado desafios significativos na adaptação de suas estratégias de saúde pública"
            }
        ]
    },
    {
        enunciado: "Os países têm adotado medidas como monitoramento intensivo através do sequenciamento genômico, restrições de viagem para áreas com variantes preocupantes, reforço das medidas de saúde pública como uso de máscaras e distanciamento social, aceleração das campanhas de vacinação e administração de doses de reforço, comunicação pública sobre riscos, isolamento de casos e rastreamento de contatos para conter a propagação das novas variantes do vírus SARS-CoV-2.",
        alternativas: [
            {
                texto: "Quais são as preocupações com as variantes que podem surgir no futuro próximo?",
                afirmacao: "A vigilância genômica, a vacinação ampla e a prontidão para ajustar políticas com base em novas variantes são "
            },
        ]
    },
    {
        enunciado: "Preocupações futuras com variantes do SARS-CoV-2 incluem aumento da transmissibilidade, possível evasão parcial da imunidade adquirida, impacto nas vacinas existentes, potencial para aumento da severidade da doença, desafios diagnósticos e terapêuticos, e a rápida disseminação global, o que pode complicar esforços de controle da pandemia. ",
        alternativas: [
            {
                texto: "compreendi",
                afirmacao: "cruciais para mitigar os impactos e promover uma resposta coordenada globalmente."
            },
            
                
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
    caixaPerguntas.textContent = ""
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();