const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const pergunta1 = "Pergunta 1";
const pergunta2 = "Pergunta 2";

const perguntas = [
  {
    enunciado:
      "Como a caça ilegal de lobisomens, uma figura mitológica frequentemente associada a seres humanos amaldiçoados, pode impactar a preservação de culturas e tradições relacionadas ao tratamento e controle dessas criaturas, de acordo com as diferentes lendase e práticas regionais?",
    alternativas: [" A caça ilegal de lobisomens, embora seja baseada em mitos e lendas, pode refletir a perseeguição de indivíduos com características físicas diferentes, levando a estigmatização e a práticas discriminatórias, o que impacta diretamente nas tradições de tratamentos e crenças culturais em várias regiões",
       "A caça ilegal de lobisomens é um fenômeno amplamente aceito, já que todos os lobisomens podem ser exterminados sem consequências, sendo sua caça um meio eficaz de controlar a população de criaturas sobrenaturais."],
  },


  {
    enunciado:
      "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
    alternativas: [
      "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
      "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
    ],
  },



  {
    enunciado:
      "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
    alternativas: [
      "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
      "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
    ],
  },
  ];

  let atual = 0;
  let perguntaAtual;

  function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
  }