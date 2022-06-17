<!DOCTYPE html>
<html>
  <head>
    <title>Maratona Explorer</title>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script type="text/javascript" src="./index.js" defer=""></script>
    <link rel="stylesheet" href="./index.css" />
  </head>
  <body>
    <div id="container">
      <img
        src="https://gist.githubusercontent.com/maykbrito/0acdf4ce919838ffed50915a31fc5b23/raw/6f4dd01ec3116428ec4c99255944cb9ac7927590/cristal-ball.svg"
        alt="imagem de uma bola de cristal"
      />
      <h1>Vou revelar seu destino!</h1>
      <p>Clique em fazer pergunta para que seu destino seja revelado.</p>
      <input id="inputPergunta" type="text" placeholder="digite sua pergunta" />
      <button id="buttonPerguntar" onclick="fazerPergunta()">
        Fazer pergunta
      </button>
      <h3 id="resposta"></h3>
    </div>
  </body>
</html>

\*{
margin: 0;
box-sizing: border-box;
}
body {
background-color: black;
color: white;
text-align: center;
font-family: sans-serif;
}

#container {
margin-top: 100px;
width: 80% ;
max-width: 400px;
margin-inline: auto;
}
h1 {
margin-top: 40px;
margin-bottom: 10px;
opacity: 0.9;
}

p{
margin-bottom: 40px;
opacity: 0.7;
}
input, button {
display: block;
width: 100%;

padding: 20px;
font-size: 20px;
border-radius: 4px;
}
input {
margin-bottom: 20px;
}
/_ mexendo nas propriedades do botão _/
button {
border: none;
background-color: blueviolet;
color: white;
transition: filter .2s;
}
/_pseudo class: hover (adiciona funcionalidade ao passar o mouse sobre o botão)_/
button:hover {
filter: brightness(1.2);
cursor: pointer;
}

#resposta{
margin-top: 30px;
transition: opacity 1s;
}
#resposta div{
font-size: 16px;
font-weight: normal;
opacity: 0.9;
margin-bottom: 18px;
}

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
const numeroAleatorio = Math.floor(Math.random() \* totalRespostas)
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
