const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const pergunta1 = "Pergunta 1";
const pergunta2 = "Pergunta 2";

const perguntas = ["Pergunta 1", "Pergunta 2"];

const perguntas = [
  {
    enunciado: "Como a caça ilegal de lobisomens, uma figura mitológica frequentemente associada a seres humanos amaldiçoados, pode impactar a preservação de culturas e tradições relacionadas ao tratamento e controle dessas criaturas, de acordo com as diferentes lendas e práticas regionais?",
    alternativas: ["A caça ilegal de lobisomens, embora seja baseada em mitos e lendas, pode refletir a perseguição de indivíduos com características físicas diferentes, levando a estigmatização e a práticas discriminatórias, o que impacta diretamente nas tradições de tratamentos e crenças culturais em várias regiões.",
    "A caça ilegal de lobisomens é um fenômeno amplamente aceito, já que todos os lobisomens podem ser exterminados sem consequências, sendo sua caça um meio eficaz de controlar a população de criaturas sobrenaturais."],
  },
  {
    enunciado: "Pergunta 2",
    alternativas: ["Alternativa 1", "Alternativa 2"],
  },
];