//variáveis?
//dados de entrada?
//dados de saída? [listas]
const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  'A meu ver, sim!',
  'Com certeza!',
  'Suas chances são mais de 8 mil',
  'Num futuro próximo',
  'Isso não será possível',
  'Tudo indica que sim',
  'Não dessa vez',
  'Nunca serão, jamais serão',
  'Tente outra vez',
  'Não conte com isso',
  'Melhor não te dizer agora',
  'Sem dúvida, Fighting!',
  'Sim, você vai',
  'Isso não irá acontecer',
  'Sua pergunta não foi clara, pergunte novamente',
  'A maré está a seu favor, navegue com entusiasmo',
  'Não conte com isso',
  'As perspectivas não são tão boas',
  'Infelizmente isso não será possível'
]

//clicar em fazer pergunta
function fazerPergunta() {
  if (inputPergunta.value == '') {
    alert('digite sua pergunta')
    return
  }

  buttonPerguntar.setAttribute('disabled', true)

  const pergunta = '<div>' + inputPergunta.value + '</div>'

  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
  console.log(respostas[numeroAleatorio])

  elementoResposta.innerHTML = respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1
  //modelo do <h3>

  //sumir a resposta após 3s
  setTimeout(function () {
    elementoResposta.style.opacity = 0
    buttonPerguntar.removeAttribute('disabled')
  }, 3000) //3000 milisegundos = 3s
}
